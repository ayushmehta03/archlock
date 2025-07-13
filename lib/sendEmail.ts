import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.SMTP_EMAIL!,
    pass: process.env.SMTP_PASSWORD!,
  },
});

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    await transporter.sendMail({
      from: `"ArchLock" <${process.env.SMTP_EMAIL}>`,
      to,
      subject,
      html,
    });
    console.log("✅ Email sent to", to);
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
