import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import CopyButton from "@/components/CopyButton";
import Link from "next/link";

interface Props {
  params: { id: string };
}

export default async function UploadSuccessPage({ params }: Props) {
  const file = await prisma.file.findUnique({
    where: { id: params.id },
  });

  if (!file) return notFound();

  const viewLink = `${process.env.NEXT_PUBLIC_SITE_URL}/view/${file.viewerAccessKey}`;

  return (
    <main className="flex flex-col px-4 py-10 max-w-2xl mx-auto items-center gap-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-green-600 text-center">
        ✅ Upload Successful
      </h1>

      <p className="text-center text-gray-600 dark:text-gray-300 text-base sm:text-lg">
        Thank you! Your file has been uploaded successfully and is ready to be shared.
      </p>

      <div className="w-full bg-gray-100 dark:bg-gray-800 border dark:border-gray-700 border-gray-300 p-4 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-3 overflow-x-auto">
        <span className="truncate w-full sm:w-auto text-sm text-gray-800 dark:text-gray-200">
          {viewLink}
        </span>

        <div className="flex flex-wrap gap-2 justify-end sm:justify-start">
          <CopyButton link={viewLink} />
          <Link href={viewLink} target="_blank">
            <Button variant="ghost" className="whitespace-nowrap">
              🔗 View File Page
            </Button>
          </Link>
        </div>
      </div>

      <Link href="/dashboard">
        <Button className="mt-4 hover:bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:scale-105 transition-transform">
          Back to Dashboard
        </Button>
      </Link>
    </main>
  );
}
