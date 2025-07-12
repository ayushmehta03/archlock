import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";
import { Copy } from "lucide-react";
import { notFound } from "next/navigation";

interface Props{
    params:{id:string}
}

export default async function uploadSuccesPage({params}:Props){
const file= await prisma.file.findUnique({
    where:{id:params.id}
})
if(!file) return notFound

const viewLink = `${process.env.NEXT_PUBLIC_SITE_URL}/view/${file.viewerAccessKey}`

}

const a="6a872f1b-0fe7-43ea-bb6c-336f1925545a"