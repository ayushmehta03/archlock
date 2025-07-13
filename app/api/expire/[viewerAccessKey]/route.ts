import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { accessKey: string } }
) {
  const { accessKey } = params;
  const body = await req.json();

  try {
    const file = await prisma.file.findUnique({
      where: { viewerAccessKey: accessKey },
    });

    if (!file) {
      return NextResponse.json({ success: false, error: "File not found" }, { status: 404 });
    }

    await prisma.file.update({
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
    console.error("Error expiring file:", err);
    return NextResponse.json({ success: false, error: "Something went wrong" }, { status: 500 });
  }
}
