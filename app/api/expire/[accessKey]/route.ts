import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const accessKey = url.pathname.split("/").pop(); // or use regex for more robust parsing
  const body = await req.json();

  if (!accessKey) {
    return NextResponse.json({ success: false, error: "Missing access key" }, { status: 400 });
  }

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
