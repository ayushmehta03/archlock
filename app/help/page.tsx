import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Clock1, File, Image, ShieldCheck, Upload } from "lucide-react";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";

export default function Help() {
  return (
    <>
      <div className="text-black dark:text-gray-200 mt-4 px-4 flex flex-col sm:flex-row gap-2 items-center justify-center">
        <h1 className="text-2xl font-bold text-center">Help & Support</h1>
        <BiSupport className="text-green-500" size={28} />
      </div>

      <div className="text-black dark:text-gray-200 mt-8 px-4 flex flex-col sm:flex-row gap-2 items-center justify-center">
        <File className="text-yellow-500" size={22} />
        <h2 className="text-xl font-semibold text-center">How to Upload a File?</h2>
      </div>

      <div className="mt-6 px-4 flex flex-wrap justify-center gap-4">
        {[
          {
            icon: <Image className="text-blue-500" />,
            title: "Choose Your File",
            desc: "Select the house map or blueprint file you want to upload",
          },
          {
            icon: <Clock1 className="text-emerald-500" />,
            title: "Set Expiry Time",
            desc: "Decide how long the file should be accessible set the expiry in minutes or hours",
          },
          {
            icon: <Upload className="text-orange-400" />,
            title: "Upload & Generate Link",
            desc: "Click the upload button and the file will be securely stored and you’ll get a unique shareable link",
          },
          {
            icon: <ShieldCheck className="text-purple-300" />,
            title: "Share with Confidence",
            desc: "Share the link knowing it's protected with auto expiry and webcam based anti screenshot surveillance",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 border-2 w-full sm:w-[48%] lg:w-[22%] h-60 p-4 rounded-2xl items-center justify-center shadow-md transition-transform hover:scale-105 ease-in"
          >
            {item.icon}
            <h3 className="text-lg font-semibold text-center">{item.title}</h3>
            <p className="text-center text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-10 px-4 text-center">
        <h2 className="text-2xl font-bold mb-2 text-blue-700 dark:text-blue-400">
          Ready to Upload Your Blueprint?
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Let ArchLock secure your data with smart expiry & surveillance.
        </p>
        <Link href="/dashboard">
          <Button className="hover:bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl hover:scale-105 transition-transform">
            Upload Now
          </Button>
        </Link>
      </section>

      <h2 className="text-center text-2xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-4">
        Frequently Asked Questions
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full max-w-3xl mx-auto px-4 py-4 mb-6"
      >
        {[
          {
            q: "What file formats can I upload to ArchLock?",
            a: "ArchLock supports PDF, JPG, PNG, and DWG formats. These are common in architectural workflows. Need more? Contact us.",
          },
          {
            q: "How does the expiry link work?",
            a: "You set the expiry during upload. Once that time ends, the file is inaccessible. Fully automatic.",
          },
          {
            q: "What is webcam-based anti-screenshot surveillance?",
            a: "We use TensorFlow.js to detect phones pointed at screens via webcam and instantly expire the link for security.",
          },
          {
            q: "Can I revoke or delete a file before its expiry time?",
            a: "Yes! From your dashboard, you can revoke any link early for total control.",
          },
          {
            q: "Is my data encrypted and secure?",
            a: "Absolutely. We use end-to-end encryption and never share your data. Only the unique access link allows viewing.",
          },
        ].map((item, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger>{item.q}</AccordionTrigger>
            <AccordionContent>{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-8 mb-10 px-4 flex flex-col items-center text-center gap-3">
        <h3 className="text-lg sm:text-xl text-blue-700 dark:text-blue-400 font-medium">
          Have questions, feedback, or suggestions? We'd love to hear from you!
        </h3>
        <h4 className="text-sm sm:text-base">Contact Us Now</h4>
        <Link href="/contact">
          <Button className="hover:bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl hover:scale-105 transition-transform">
            Click Here
          </Button>
        </Link>
      </div>

      <Footer />
    </>
  );
}
