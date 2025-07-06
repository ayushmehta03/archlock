import { Bell, Link2, UploadCloud, Verified } from "lucide-react"
export default function WorkFlow(){
    return(
         <div className="mt-6 flex flex-wrap justify-center gap-4 px-2">
<div className="flex flex-col gap-2 border-2  justify-center h-60 w-full sm:w-[48%] lg:w-[22%] rounded-2xl p-4 items-center shadow-md transition-transform   hover:scale-110 ease-in ">
 <UploadCloud />
        <h3 className="text-lg font-semibold text-center">Upload your Map</h3>
        <p className="text-center text-sm">Engineer uploads a project map securely via dashboard </p>
      </div>

      <div className="flex flex-col gap-2 border-2 justify-center h-60 w-full sm:w-[48%] lg:w-[22%] rounded-2xl p-4 items-center shadow-md transition-transform  hover:scale-110 ease-in">
<Link2 />
        <h3 className="text-lg font-semibold text-center">Gneerate Secure Link</h3>
        <p className="text-center text-sm">A one time use link is created and emailed to the client </p>
      </div>

      <div className="flex flex-col gap-2 border-2 justify-center h-60 w-full sm:w-[48%] lg:w-[22%] rounded-2xl p-4 items-center shadow-md transition-transform hover:scale-110 ease-in">
        <Verified />
        <h3 className="text-lg font-semibold text-center">Client Verifies Access</h3>
        <p className="text-center text-sm">Client opnes the link and allows camera access to proceed</p>
      </div>

      <div className="flex flex-col gap-2 border-2 justify-center h-60 w-full sm:w-[48%] lg:w-[22%] rounded-2xl p-4 items-center shadow-md transition-transform   hover:scale-110 ease-in">
        <Bell />
        <h3 className="text-lg font-semibold text-center">Auto Expiry & Notifactions</h3>
        <p className="text-center text-sm">Once viewed, the link expires and notifactions are sent</p>
      </div>
    </div>
    )
}