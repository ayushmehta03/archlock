"use server";

import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/db";
import { sendEmail } from "@/lib/sendEmail";
import { formatIST } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { UploadApiResponse } from "cloudinary";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default async function handleSubmission(formData: FormData) {
  try {
    // Extract form data
    const fileName = formData.get("filename")?.toString().trim();
    const clientEmail = formData.get("email")?.toString().trim();
    const file = formData.get("filedata") as File;
    const webcamLock = formData.get("webcamLock") === "true";
    const expiryInHours = Number(formData.get("expiryInHours")) || 1;

    const user = await currentUser();
    const ownerId = user?.id;

    if (!fileName || !clientEmail || !ownerId) {
      throw new Error("Missing required fields");
    }

    if (!file || !file.size) {
      throw new Error("No file uploaded");
    }

    // Convert file to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudinary
    const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: "archlock",
          public_id: fileName,
          resource_type: "auto",
        },
        (error, result) => {
          if (error || !result) {
            console.error("Cloudinary Upload Error:", error);
            return reject(error || new Error("Upload failed"));
          }
          resolve(result);
        }
      ).end(buffer);
    });

    const expiresAt = new Date(Date.now() + expiryInHours * 60 * 60 * 1000);
    const viewerAccessKey = uuidv4().slice(0, 8);

    // Save to DB
    const savedFile = await prisma.file.create({
      data: {
        fileName,
        clientEmail,
        url: uploadResult.secure_url,
        publicId: uploadResult.public_id,
        fileType: uploadResult.resource_type,
        ownerId,
        webcamLock,
        expiresAt,
        viewerAccessKey,
      },
    });

    const link = `${process.env.NEXT_PUBLIC_BASE_URL}/view/${savedFile.viewerAccessKey}`;

    await sendEmail({
      to: clientEmail,
      subject: "🔐 Your ArchLock Secure Access Link",
      html: `
        <p>Hello,</p>
        <p><strong>${user.firstName}</strong> has securely shared a file with you via ArchLock.</p>
        <p><a href="${link}">Click here to view the file</a></p>
        <p>This link will expire on <strong>${formatIST(savedFile.expiresAt)}</strong>.</p>
        <br/>
        <p>⚠️ Do not forward this link. Viewing is monitored.</p>
      `,
    });

    redirect(`/dashboard/uploaded/${savedFile.id}`);
  } catch (error: any) {
    console.error("❌ Error in handleSubmission:", error.message || error);
    throw new Error("Something went wrong while processing your file.");
  }
}
