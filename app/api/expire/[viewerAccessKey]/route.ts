import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { viewerAccessKey: string } }
) {
  const { viewerAccessKey } = params;

  try {
    await prisma.file.update({
      where: { viewerAccessKey }, // ✅ field matches your model
      data: { isExpired: true },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error expiring file:", err);
    return NextResponse.json({ success: false, error: "Something went wrong" }, { status: 500 });
  }
}
