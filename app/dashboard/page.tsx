import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/ui/SumbitButton";
import { currentUser } from "@clerk/nextjs/server";
import { Label } from "@radix-ui/react-dropdown-menu";
import { UploadCloud } from "lucide-react";
import handleSubmission from "./action";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Dashboard(){
const user= await currentUser();
function getTimeGreeting(){
    const now= new Date();
    const hour = now.getHours();
    if(hour>=0 && hour<12){
     return `Good Morning ... ${user?.firstName}`

    }
    else if(hour>=12 && hour<17){
     return `Good AfterNoon ... ${user?.firstName}`

    }
    else{
      return `Good Evening ... ${user?.firstName}`

    }
}
return(
    <main className="mt-4 text-black dark:text-gray-300  ">
    <div className="flex flex-col text-center gap-4 justify-center">
            <h3 className="text-xl px-4">{getTimeGreeting()}</h3>
            <div className="flex flex-row justify-center gap-6 items-center text-center mt-4 ">
             <h2 className="text-xl dark:text-blue-600 text-blue-900"> Files Uploaded: 12
             </h2>
             <h2 className="dark:text-red-700 text-xl text-red-400">Expired: 10</h2>
            </div>  
            <div className="flex flex-row gap-4 justify-center mt-4 text-xl">
              <UploadCloud size={30} className="transition-transform animate animation-duration-300 hover:rotate-360"/>
              <p>Upload your file below</p>

            </div>
    </div>
    <Card className="w-full max-w-md mx-auto py-8 mt-6 px-1 mb-6 ">
      <CardHeader>
        <CardTitle>Upload your file</CardTitle>
        <CardDescription>Upload File get Secured Link</CardDescription>
      </CardHeader>
      <CardContent>
      
        <form className="flex flex-col gap-4" action={handleSubmission}>
            <div className="flex flex-col gap-2">
            <Label className="px-2">Select file</Label>
            <Input name="filedata" type="file"        accept=".pdf,image/*"
 required  />
          </div>


          <div className="flex flex-col gap-2">
            <Label className="px-2">File Name</Label>
            <Input name="filename" type="text" required placeholder="House Plan Sector-45" />
          </div>


          <div className="flex flex-col gap-2">
          <Label>clientEmail</Label>
          <Input name="email" type="email" placeholder="client@gmail.com" required />
          </div>
          <div className="flex flex-col gap-2">
    <Label>Expire After (hours)</Label>
    <Input
      name="expiryHours"
      type="number"
      placeholder="Optional: e.g. 6"
    />
  </div>
  <div className="flex items-center gap-2">
  <input type="checkbox" name="webcamLock" value="true" />
  <Label>Enable Webcam Lock</Label>
</div>
  <SubmitButton />
  
        </form>
      </CardContent>

    </Card>
    <div  className="flex flex-col mt-4  mb-6 gap-6 items-center justify-center ">
  <h2 className="text-center text-black text-2xl dark:text-blue-400">Want to track file details ? </h2>
  <p className="text-sm text-black dark:text-gray-200 text-center">
See the uploaded files their status and secure links

  </p>
  <Link href="/dashboard/table">
  <Button variant="ghost" className='hover:bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl hover:scale-110 animate transition-transform   '>Track Uploaded Files</Button>
  </Link>
  
    </div>

    </main>




)    
}
