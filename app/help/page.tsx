import { Button } from '@/components/ui/button';
import { Clock1, File, Image, ShieldCheck, Upload } from 'lucide-react';
import Link from 'next/link';
import { HiOutlineSupport } from 'react-icons/hi';

export default function Help(){

    return(
      <>
      <div className=" text-black mt-4 dark:text-gray-200  items-center flex  flex-row gap-4 justify-center  ">
      <h1 className="text-2xl font-bold">Help & Support</h1>
       <HiOutlineSupport className='text-green-500' size={30} />
      </div>
       <div className=" text-black mt-8 dark:text-gray-200  items-center flex  flex-row gap-4 justify-center   ">
       <File  className='text-yellow-500' size={24} />
      <h2 className="text-xl font-semibold ">How to Upload a File ?</h2>
      </div>



       <div className="mt-6 flex flex-wrap justify-center gap-4 px-2  ">
<div className="flex flex-col gap-2 border-2  justify-center h-60 w-full p-4 sm:w-[48%] lg:w-[22%] rounded-2xl  items-center shadow-md transition-transform   hover:scale-110 ease-in  ">
        <Image className='text-blue-500' />
        <h3 className="text-lg font-semibold text-center">Choose Your File</h3>
        <p className="text-center text-sm">Select the house map or blueprint file you want to upload</p>
      </div>

      <div className="flex flex-col gap-2 border-2 justify-center h-60 w-full sm:w-[48%] lg:w-[22%] rounded-2xl p-4 items-center shadow-md transition-transform  hover:scale-110 ease-in">
      <Clock1 className='text-emerald-500' />
        <h3 className="text-lg font-semibold text-center">Set Expiry Time</h3>
        <p className="text-center text-sm">Decide how long the file should be accessible set the expiry in minutes or hours

</p>
      </div>

      <div className="flex flex-col gap-2 border-2 justify-center h-60 w-full sm:w-[48%] lg:w-[22%] rounded-2xl p-4 items-center shadow-md transition-transform hover:scale-110 ease-in">
        <Upload  className='text-orange-400'/>
        <h3 className="text-lg font-semibold text-center">Upload & Generate Link</h3>
        <p className="text-center text-sm">Click the upload button and the file will be securely stored and you’ll get a unique shareable link</p>
      </div>

      <div className="flex flex-col gap-2 border-2 justify-center h-60 w-full sm:w-[48%] lg:w-[22%] rounded-2xl p-4 items-center shadow-md transition-transform   hover:scale-110 ease-in">
        <ShieldCheck className='text-purple-300' />
        <h3 className="text-lg font-semibold text-center">Share with Confidence</h3>
        <p className="text-center text-sm">Share the link knowing it's protected with auto expiry and webcam based anti screenshot surveillance</p>
      </div>
    </div>

  <section className="mt-10 text-center">
  <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">Ready to Upload Your Blueprint?</h2>
  <p className="mb-6 text-gray-600 dark:text-gray-300">Let ArchLock secure your data with smart expiry & surveillance.</p>
  <Link href="/dashboard">
  <Button variant="ghost" className='hover:bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl hover:scale-110 animate transition-transform   '>Upload Now</Button>
  </Link>
  
</section>
      
      </>
   
    )
}