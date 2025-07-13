import { prisma } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

// ✅ Handle preflight CORS request
export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // 🔒 Use specific origin in production
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(
  req: NextRequest,
  { params }: { params: { viewerAccessKey: string } }
) {
  const { viewerAccessKey } = params;

  try {
    await prisma.file.update({
      where: { viewerAccessKey },
      data: { isExpired: true },
    });

    return new NextResponse(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // 🔒 Use exact domain in production
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (err) {
    console.error("Error expiring file:", err);
    return new NextResponse(
      JSON.stringify({ success: false, error: "Something went wrong" }),
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  }
}
