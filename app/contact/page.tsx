"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GitBranch, Mail } from "lucide-react";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { toast } from "sonner";
import handleSubmission from "./action";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-2xl text-blue-700 dark:text-blue-400 text-center font-bold mb-4">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        Have questions, feedback, or suggestions? We'd love to hear from you!
      </p>

      <form
        action={async (formData) => {
          const res = await handleSubmission(formData);
          if (res?.success) toast.success("Message Sent Successfully");
          else toast.error("Failed to send Message");
        }}
        className="py-6 pl-6"
      >
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 block text-md ml-4 font-medium dark:text-gray-300">
            Name
          </label>
          <Input
            className="dark:bg-black w-full px-4 rounded-2xl mb-4"
            name="name"
            type="text"
            required
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-700 block text-md ml-4 font-medium dark:text-gray-300">
            Email
          </label>
          <Input
            className="dark:bg-black w-full px-4 rounded-2xl mb-2"
            name="email"
            type="email"
            required
            placeholder="xyz@gmail.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-700 block text-md ml-4 font-medium dark:text-gray-300">
            Message
          </label>
          <Textarea
            className="dark:bg-black w-full px-4 rounded-2xl"
            name="message"
            required
            placeholder="Your Message"
          />
        </div>

        <div className="flex flex-col mt-4">
          <Button
            type="submit"
            variant="ghost"
            className="w-full hover:scale-105 transition-transform"
          >
            Send Message
          </Button>
        </div>
      </form>

      <h2 className="text-center text-xl font-semibold text-blue-500 mt-6 mb-4">
        Contact Developer
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center text-sm text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-2">
          <Mail className="text-blue-500" />
          <span>ayushmehtabps@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <GitBranch className="text-orange-500" />
          <Link
            href="https://github.com/ayushmehta03"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <BiLogoLinkedin className="text-blue-500" size={20} />
          <Link
            href="https://www.linkedin.com/in/ayush-mehta-7357ba314/"
            target="_blank"
            className="hover:underline"
          >
            Ayush Mehta
          </Link>
        </div>
      </div>
    </div>
  );
}
