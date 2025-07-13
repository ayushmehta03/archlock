export const dynamic = "force-dynamic";
import { prisma } from "@/lib/db";
import Image from "next/image";
import { notFound } from "next/navigation";
import Security from "./Security";

interface Props {
  params: { accessKey: string };
}

export default async function ViewFilePage({ params }: Props) {
  const file = await prisma.file.findUnique({
    where: {
      viewerAccessKey: params.accessKey,
    },
  });

  if (!file) return notFound();

  const isExpired = new Date(file.expiresAt).getTime() < Date.now();
  const manuallyExpired = file.isExpired;

  if (isExpired||manuallyExpired) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-4 p-4">
        <h2 className="text-2xl font-bold text-red-600">⚠️ Link Expired</h2>
        <p className="text-gray-700 dark:text-gray-200 mt-2">
          This file link is no longer accessible.
        </p>
        <p className="text-center text-gray-700 dark:text-gray-300">
          Contact your file provider for a new link.
        </p>
      </div>
    );
  }

  return (
    <>
    <Security accessKey={params.accessKey} />
    <div className="min-h-screen flex flex-col items-center p-4 gap-6">
    <h1 className="text-xl sm:text-2xl font-bold text-center text-blue-700 dark:text-blue-400 mt-4">
        📄 File Shared With You
      </h1>

      <div className="w-full max-w-4xl">
        <Image
          src={file.url}
          alt={file.fileName}
          width={1200}
          height={800}
          className="rounded-xl object-contain w-full h-auto shadow-md"
          priority
        />
      </div>

    <div className="w-full max-w-3xl bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 rounded-xl text-sm text-gray-800 dark:text-gray-200 text-center mb-4">
        <p className="text-base sm:text-lg">
          <strong>⏳ Expires:</strong>{" "}
          {new Date(file.expiresAt).toLocaleString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>

        {file.webcamLock && (
          <div className="mt-4 bg-red-100 text-red-700 p-3 rounded-md font-medium text-sm sm:text-base">
            ⚠️ Webcam Lock is active. Do not capture or record this screen.
            Your webcam may be monitored.
          </div>
        )}
      </div>
    </div>
    </>
  );
}
