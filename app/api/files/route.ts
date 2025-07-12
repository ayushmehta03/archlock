import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    const files= await prisma.file.findMany({
        orderBy:{createdAt:"desc"}
    })
    return NextResponse.json(files)
}
