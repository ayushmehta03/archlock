import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { LiveStats } from "@/components/LiveStats";
import { Button } from "@/components/ui/button";
import WorkFlow from "@/components/WorkFlow";
import {  Link, LockIcon, Settings } from "lucide-react";
import LinkNext from "next/link";

export default function Page() {
  return (
    <>
      <main className="text-black dark:text-gray-200 px-4 sm:px-6">
        <section className="text-center mt-6">
          <div className="flex flex-row justify-center items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold">
              Share Site Maps <span className="text-blue-600">Securely</span>
            </h1>
            <LockIcon className="text-blue-700" />
          </div>

          <div className="mt-4 flex flex-row justify-center gap-2 items-center text-lg sm:text-xl font-semibold">
            <p>
              ArchLock empowers civil engineers to send project maps via one-time secure links
            </p>
            <Link />
          </div>
        </section>

        <section className="mt-10 text-center">
          <h2 className="text-2xl font-semibold mb-6">Why ArchLock?</h2>
          <Features />
        </section>

        <section className="mt-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold">How ArchLock Works</h2>
            <Settings className="text-blue-700" size={22} />
          </div>
          <WorkFlow />
        </section>

        <section className="mt-10 text-center">
          <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-400">Who ArchLock is For</h2>
          <ul className="list-none space-y-3 mt-4 text-base">
            <li className="flex items-center justify-center gap-2">🧱 Architects sharing confidential blueprints securely</li>
            <li className="flex items-center justify-center gap-2">🏗️ Engineers and contractors requiring limited-time document access</li>
            <li className="flex items-center justify-center gap-2">🚀 Startups exchanging sensitive or internal documents</li>
            <li className="flex items-center justify-center gap-2">🏢 Real estate professionals sharing property plans securely</li>
          </ul>
        </section>

        <LiveStats />

        <section className="text-center mt-8 mb-12">
          <h2 className="text-xl font-semibold mb-2">Ready to Secure Your Maps?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Start uploading with ArchLock in just seconds.</p>
          <LinkNext href="/dashboard">
            <Button className="hover:bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:scale-105 transition-transform">
              Go to Dashboard
            </Button>
          </LinkNext>
        </section>
      </main>

      
    </>
  );
}
