import Features from "@/components/Features"
import WorkFlow from "@/components/WorkFlow"

import { Link, LockIcon } from "lucide-react"
export default function Page(){
  return(
    <>
    <main className="text-black dark:text-gray-200">

    <div className="flex flex-row justify-center p-2 gap-2 items-center">
      <h1 className="text-2xl font-bold px-1">Share Site Maps <span className="text-blue-600">Securely</span></h1>
      <LockIcon />
    </div>
    <div className="mt-6 text-center justify-center text-xl flex flex-row gap-2 items-center p-2 font-semibold  ">
      <p>ArchLock empowers civil engineers to send project maps via one time secure links </p>
      <Link />
    </div>
    <div className="mt-4 flex flex-col text-center  ">
      <h2 className="text-xl font-semibold mb-6 ">Why ArchLock ?</h2>
      <Features />

    </div>
     <div className="mt-4 flex flex-col text-center  ">
      <h2 className="text-xl font-semibold mb-6 mt-4 ">How ArchLock Works </h2>
 <WorkFlow />
    </div>
   </main>

    </>
  )
}