import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/ui/SumbitButton";
import { currentUser } from "@clerk/nextjs/server";
import { Label } from "@radix-ui/react-dropdown-menu";
import { LockIcon, UploadCloud } from "lucide-react";
import handleSubmission from "./action";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Dashboard() {
  const user = await currentUser();

  function getTimeGreeting() {
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 0 && hour < 12) return `Good Morning... ${user?.firstName}`;
    else if (hour >= 12 && hour < 17)
      return `Good Afternoon... ${user?.firstName}`;
    else return `Good Evening... ${user?.firstName}`;
  }

  return (
    <main className="mt-4 px-4 text-black dark:text-gray-300">
      <div className="flex flex-col items-center gap-4 text-center">
        <h3 className="text-xl sm:text-2xl">{getTimeGreeting()}</h3>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4">
          <LockIcon className="text-blue-500" />
          <Link href="/dashboard/alerts">
            <Button className="hover:bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl hover:scale-105 transition-transform">
              View Security Threats
            </Button>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6 text-xl">
          <UploadCloud
            size={30}
            className="transition-transform duration-300 hover:rotate-12"
          />
          <p className="text-lg">Upload your file below</p>
        </div>
      </div>

      <Card className="w-full max-w-md mx-auto py-8 mt-6 px-4 mb-6">
        <CardHeader>
          <CardTitle>Upload your file</CardTitle>
          <CardDescription>Get a secured & monitored access link</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={handleSubmission}>
            <div className="flex flex-col gap-2">
              <Label className="px-2">Select File</Label>
              <Input
                name="filedata"
                type="file"
                accept=".pdf,image/*"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="px-2">File Name</Label>
              <Input
                name="filename"
                type="text"
                required
                placeholder="House Plan Sector-45"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="px-2">Client Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="client@gmail.com"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="px-2">Expire After (hours)</Label>
              <Input
                name="expiryInHours"
                type="number"
                placeholder="Optional: e.g. 6"
              />
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" name="webcamLock" value="true" />
              <Label>Enable Webcam Lock</Label>
            </div>

            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      <div className="flex flex-col mt-4 mb-10 gap-4 items-center justify-center text-center">
        <h2 className="text-xl sm:text-2xl dark:text-blue-400 text-black">
          Want to track file details?
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          See your uploaded files, their status, and secure links
        </p>
        <Link href="/dashboard/table">
          <Button className="hover:bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl hover:scale-105 transition-transform">
            Track Uploaded Files
          </Button>
        </Link>
      </div>
    </main>
  );
}
