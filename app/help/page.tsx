import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Clock1, File, Image, ShieldCheck, Upload } from 'lucide-react';
import Link from 'next/link';
import { BiSupport } from 'react-icons/bi';
export default function Help(){

    return(
      <>
      <div className=" text-black mt-4 dark:text-gray-200  items-center flex  flex-row gap-4 justify-center  ">
      <h1 className="text-2xl font-bold">Help & Support</h1>
       <BiSupport className='text-green-500' size={30} />
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
<h2 className='text-center font-semibold text-2xl text-blue-700 dark:text-blue-400 mt-4 mb-4 '>
      Frequently Asked Questions

</h2>
<Accordion  type="single" collapsible className='w-full flex gap-2 flex-col px-6 py-4 mb-6'>
<AccordionItem value="item-1">
    <AccordionTrigger>What file formats can I upload to ArchLock?</AccordionTrigger>
    <AccordionContent>
      ArchLock currently supports commonly used blueprint and map file formats including PDF, JPG, PNG, and DWG. 
      These formats ensure high compatibility with architecture and design software. 
      If you require support for a different format, feel free to contact us.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger>How does the expiry link work?</AccordionTrigger>
    <AccordionContent>
      When uploading a file, you can set a custom expiry time in minutes or hours. 
      After this time elapses, the link becomes inactive and access to the file is revoked automatically.
      This ensures your documents remain secure and are not accessible longer than needed.
    </AccordionContent>
  </AccordionItem>
 
  <AccordionItem value="item-3">
    <AccordionTrigger>What is webcam-based anti-screenshot surveillance?</AccordionTrigger>
    <AccordionContent>
      Our platform uses your device’s webcam to detect when someone tries to capture the screen using an external device like a phone camera. 
      If such activity is detected, the access link is immediately expired and the user is notified. 
      This adds an extra layer of protection against unauthorized duplication.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-4">
    <AccordionTrigger>Can I revoke or delete a file before its expiry time?</AccordionTrigger>
    <AccordionContent>
      Yes, absolutely. You can manually revoke access to any uploaded file from your dashboard.
      This allows you full control over file availability at all times, regardless of the initially set expiry time.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-5">
    <AccordionTrigger>Is my data encrypted and secure?</AccordionTrigger>
    <AccordionContent>
      All uploaded files are securely stored with end-to-end encryption. 
      Only users with the generated link can access them — and even then, only within the time window you define. 
      We never share, sell, or use your data for any other purpose. Your privacy is our top priority.
    </AccordionContent>
  </AccordionItem>
</Accordion>

      </>
   
    )
}