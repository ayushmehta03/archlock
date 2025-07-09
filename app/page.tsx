import Features from "@/components/Features"
import { LiveStats } from "@/components/LiveStats"
import { Button } from "@/components/ui/button"
import WorkFlow from "@/components/WorkFlow"

import { CheckIcon, Link, LockIcon, Settings } from "lucide-react"
export default function Page(){
  return(
    <>
    <main className="text-black dark:text-gray-200">

    <div className="flex flex-row justify-center p-2 gap-2 items-center">
      <h1 className="text-2xl font-bold px-1">Share Site Maps <span className="text-blue-600">Securely</span></h1>
      <LockIcon className="text-blue-700" />
    </div>
    <div className="mt-6 text-center justify-center text-xl flex flex-row gap-2 items-center p-2 font-semibold  ">
      <p>ArchLock empowers civil engineers to send project maps via one time secure links </p>
      <Link />
    </div>
    <div className="mt-4 flex flex-col text-center  ">
      <h2 className="text-2xl font-semibold mb-6 ">Why ArchLock ?</h2>
      <Features />

    </div>
     <div className="mt-4 flex flex-col  text-center ">
      <div className="flex flex-row gap-2 items-center justify-center">
          <h2 className="text-2xl font-semibold mb-4 mt-4 ">How ArchLock Works </h2>
          <Settings className="text-blue-700" size={22}/>

      </div>
 <WorkFlow />
 <h2 className="text-2xl mt-6 font-bold text-blue-800 dark:text-blue-400">Who ArchLock is For</h2>
 <ul className="list-none space-y-2 mt-4  ">
  <li className="flex items-center justify-center gap-2">
    <span>🧱 Architects sharing confidential blueprints securely</span>

  </li>
    <li className="flex items-center justify-center gap-2">
    <span>🏗️ Engineers and contractors requiring limited-time document access</span>

  </li>
    <li className="flex items-center justify-center gap-2">
    <span>🚀 Startups exchanging sensitive or internal documents</span>

  </li>
    <li className="flex items-center justify-center gap-2">
    <span>🏢 Real estate professionals sharing property plans securely</span>

  </li>

 </ul>
 <LiveStats />
   </div>
   </main>

    </>
  )
}