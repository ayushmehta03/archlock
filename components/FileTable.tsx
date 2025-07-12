"use client"

import { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Link } from "lucide-react"

type FileType = {
  id: string
  fileName: string
  url: string
  viewerAccessKey: string
  createdAt: string
  expiresAt: string
  isExpired: boolean
}
function getStats(files:FileType[]){
     const total = files.length
  const expired = files.filter((f) => f.isExpired).length
  const active = total - expired
  return { total, expired, active }
}

export default function FileTable() {
  const [files, setFiles] = useState<FileType[]>([])
 
  useEffect(() => {
    const fetchFiles = async () => {
      const res = await fetch("/api/files")
      const data = await res.json()
      setFiles(data)
    }
    fetchFiles()
  }, [])


  
 const stats= getStats(files)
  return (
    <>
    <div className="mt-6 rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>File</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Uploaded</TableHead>
            <TableHead>Expires</TableHead>
            <TableHead>Link</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files.map((file) => {
            const isExpired =
              new Date(file.expiresAt).getTime() < Date.now()
              const stats =getStats(files)
            return (
              <TableRow key={file.id}>
                <TableCell className="font-medium">
                  {file.fileName}
                </TableCell>
                <TableCell>
                  <span
                    className={
                      isExpired ? "text-red-600" : "text-green-600"
                    }
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
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
     
    </div>
     <div className="mt-12 flex flex-wrap justify-between gap-6 px-2 mb-6 ">
<div className="flex flex-col gap-2 border-2  justify-center h-60 w-full sm:w-[48%] lg:w-[22%] rounded-2xl p-4 items-center shadow-md transition-transform   hover:scale-110 ease-in ">
        <h3 className="text-lg font-semibold text-center">Total Formed Links</h3>
        <p className="text-center text-2xl text-blue-700 dark:text-blue-400">{stats.total}</p>
      </div>

      <div className="flex flex-col gap-2 border-2 justify-center h-60 w-full sm:w-[48%] lg:w-[22%] rounded-2xl p-4 items-center shadow-md transition-transform  hover:scale-110 ease-in">
        <h3 className="text-lg font-semibold text-center">Active Links</h3>
        <p className="text-center text-2xl text-green-600 dark:text-green-400">{stats.active}</p>
      </div>

      <div className="flex flex-col gap-2 border-2 justify-center h-60 w-full sm:w-[48%] lg:w-[22%] rounded-2xl p-4 items-center shadow-md transition-transform hover:scale-110 ease-in">
        <h3 className="text-lg font-semibold text-center">Expired Links</h3>
        <p className="text-center text-2xl text-red-600 dark:text-red-400">{stats.expired}</p>
      </div>

      </div>
    
</>
  )
}
