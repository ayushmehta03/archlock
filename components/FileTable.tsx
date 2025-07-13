"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

type FileType = {
  id: string;
  fileName: string;
  url: string;
  viewerAccessKey: string;
  createdAt: string;
  expiresAt: string;
  isExpired: boolean;
};

function getStats(files: FileType[]) {
  const total = files.length;
  const expired = files.filter(
    (f) =>
      new Date(f.expiresAt).getTime() < Date.now() || f.isExpired
  ).length;
  const active = total - expired;
  return { total, expired, active };
}

export default function FileTable() {
  const [files, setFiles] = useState<FileType[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const res = await fetch("/api/files");
      const data = await res.json();
      setFiles(data);
    };
    fetchFiles();
  }, []);

  const stats = getStats(files);

  return (
    <>
      {/* 📄 File Table */}
      <div className="mt-6 overflow-x-auto rounded-xl border dark:border-gray-700 shadow-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>File</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Uploaded</TableHead>
              <TableHead>Expires</TableHead>
              <TableHead>Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {files.map((file) => {
              const isExpired =
                new Date(file.expiresAt).getTime() < Date.now() || file.isExpired;

              return (
                <TableRow key={file.id}>
                  <TableCell className="font-medium text-wrap max-w-[200px]">
                    {file.fileName}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`font-semibold ${
                        isExpired ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      {isExpired ? "Expired" : "Active"}
                    </span>
                  </TableCell>
                  <TableCell>
                    {new Date(file.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {new Date(file.expiresAt).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Link
                      href={`/view/${file.viewerAccessKey}`}
                      className="text-blue-600 dark:text-blue-400 underline hover:opacity-80 transition"
                    >
                      View
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {/* 📊 Stats Section */}
      <div className="mt-10 mb-10 flex flex-wrap justify-center gap-6 px-2">
        {[
          {
            title: "Total Formed Links",
            count: stats.total,
            color: "text-blue-700 dark:text-blue-400",
          },
          {
            title: "Active Links",
            count: stats.active,
            color: "text-green-600 dark:text-green-400",
          },
          {
            title: "Expired Links",
            count: stats.expired,
            color: "text-red-600 dark:text-red-400",
          },
        ].map((box) => (
          <div
            key={box.title}
            className="flex flex-col gap-2 border-2 border-gray-200 dark:border-gray-700 justify-center h-56 w-full sm:w-[48%] lg:w-[22%] rounded-2xl p-4 items-center shadow-md transition-transform hover:scale-105 ease-in-out bg-white dark:bg-gray-900"
          >
            <h3 className="text-lg font-semibold text-center dark:text-gray-100">
              {box.title}
            </h3>
            <p className={`text-center text-4xl font-bold ${box.color}`}>
              {box.count}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
