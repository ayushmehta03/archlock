import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(
  req: NextRequest,
  context: { params: { accessKey: string } }
) {
  const { accessKey } = context.params;
  const body = await req.json();

  try {
    const file = await prisma.file.findUnique({
      where: { viewerAccessKey: accessKey },
    });

    if (!file) {
      return NextResponse.json({ success: false, error: "File not found" }, { status: 404 });
    }

    const updated = await prisma.file.update({
      where: { viewerAccessKey: accessKey },
      data: { isExpired: true },
    });

    console.log("✅ File expired:", updated);

    await prisma.securityAlert.create({
      data: {
        accessKey,
        reason: body.reason || "Unknown reason",
        mail: file.clientEmail,
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Error expiring file:", err);
    return NextResponse.json({ success: false, error: "Something went wrong" }, { status: 500 });
  }
}
