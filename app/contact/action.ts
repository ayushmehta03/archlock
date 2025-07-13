"use server";

import { sendEmail } from "@/lib/sendEmail";

export default async function handleSubmission(formData: FormData) {
  try {
    const email = formData.get("email")?.toString().trim();
    const name = formData.get("name")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!email || !name || !message) {
      throw new Error("All fields are required.");
    }

    console.log("Contact Form:", { name, email, message });

    // Optional: send contact mail to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL!, // 👈 make sure this exists in .env
      subject: `📬 New Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="margin-left: 1rem; color: #333;">${message}</blockquote>
        <br/>
        <p>🛡️ Sent via ArchLock Contact Form</p>
      `,
    });

    return { success: true };
  } catch (error: any) {
    console.error("❌ Contact form error:", error.message || error);
    return { success: false, error: "Failed to submit form. Try again." };
  }
}
