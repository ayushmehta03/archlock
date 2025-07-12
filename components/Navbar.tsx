"use client"
import { SignInButton, SignOutButton, SignUpButton, useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import Link from "next/link";
import Help from "@/app/help/page";

export default function Navbar() {
  const { user, isSignedIn } = useUser();

  return (
    <nav className="flex flex-row gap-4 p-4 justify-between items-center">
      <div className="text-2xl dark:text-gray-300">
        <h2>ArchLock</h2>
      </div>

      {isSignedIn ? (
        <div className="flex items-center gap-4 mr-6">
          <Link href="/">
            <Button variant="ghost" className="hover:scale-110 transition-transform">
              Home
            </Button>
          </Link>

         <Link href="/dashboard">
          <Button variant="ghost" className="hover:scale-110 transition-transform">
            Dashboard
            </Button>
         </Link>
         

          

         <Link href="/help">
          <Button variant="ghost" className="hover:scale-110 transition-transform">
            Help
            </Button>
         </Link>
          
         <SignOutButton>
            <Button variant="ghost" className="hover:scale-110 transition-transform">
              Sign Out
            </Button>
          </SignOutButton>
         

          

          <ModeToggle />
           <Image
            src={user.imageUrl}
            alt="User Avatar"
            width={30}
            height={30}
            className="rounded-full object-cover aspect-square"
          />
        </div>
      ) : (
        <div className="gap-4 mr-6 flex flex-row">
          <SignInButton>
            <Button variant="ghost" className="hover:scale-110 transition-transform">
              Sign In
            </Button>
          </SignInButton>

          <SignUpButton>
            <Button variant="ghost" className="hover:scale-110 transition-transform">
              Sign Up
            </Button>
          </SignUpButton>
            <Link href="/help">
          <Button variant="ghost" className="hover:scale-110 transition-transform">
            Help
            </Button>
         </Link>



          <ModeToggle />
        </div>
      )}
    </nav>
  );
}
