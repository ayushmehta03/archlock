"use server";

import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { UploadApiResponse } from "cloudinary";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default async function handleSubmission(formData: FormData) {
  const fileName = formData.get("filename") as string | null;
  const clientEmail = formData.get("email") as string | null;
  const file = formData.get("filedata") as File;
  const webcamLock = formData.get("webcamLock") === "true";
  const expiryInHours = Number(formData.get("expiryInHours")) || 1;
  const user= await currentUser()
    const ownerId=user?.id
  if (!fileName || !clientEmail || !ownerId) {
    throw new Error("Missing required fields");
  }

  if (!file || !file.size) {
    throw new Error("No file uploaded");
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        folder: "archlock",
        public_id: fileName,
        resource_type: "auto",
      },
      (error, result) => {
        if (error || !result) reject(error || new Error("Upload failed"));
        else resolve(result);
      }
    ).end(buffer);
  });

  const expiresAt = new Date(Date.now() + expiryInHours * 60 * 60 * 1000);
  const viewerAccessKey = uuidv4().slice(0, 8); 

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

  redirect(`/dashboard/uploaded/${savedFile.id}`)
}
