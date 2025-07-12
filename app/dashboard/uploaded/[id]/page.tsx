import { prisma } from "@/lib/db"
import { notFound } from "next/navigation"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import CopyButton from "@/components/CopyButton"
import Link from "next/link"

interface Props {
  params: { id: string }
}

export default async function UploadSuccessPage({ params }: Props) {
  const file = await prisma.file.findUnique({
    where: { id: params.id },
  })

  if (!file) return notFound()

  const viewLink = `${process.env.NEXT_PUBLIC_SITE_URL}/view/${file.viewerAccessKey}`

  return (
    <div className="flex flex-col p-6 max-w-2xl mx-auto items-center gap-6">
      <h1 className="text-2xl font-bold text-green-600">✅ Upload Successful</h1>

      <p className="text-center text-gray-600 dark:text-gray-300 text-lg">
        Thank you! Your file has been uploaded successfully.
      </p>

      <div className="w-full  p-4 rounded-xl text-sm flex justify-between items-center gap-4 ">
        <span className="truncate">{viewLink}</span>

        <CopyButton link={viewLink} />

        <Link href={viewLink} target="_blank">
          <Button variant="ghost">🔗 View File Page</Button>
        </Link>
      </div>
    </div>
  )
}


const a="6a872f1b-0fe7-43ea-bb6c-336f1925545a"