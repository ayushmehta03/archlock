"use client";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

export default function Navbar() {
  const { user, isSignedIn } = useUser();

  return (
    <nav className="w-full px-4 py-3 flex flex-col sm:flex-row justify-between items-center bg-transparent">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-3 sm:mb-0">
        <Image alt="logo" src={logo} width={60} height={60} className="object-contain" />
      </div>

      {/* Nav buttons */}
      <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3">
        {isSignedIn ? (
          <>
            <Link href="/">
              <Button variant="ghost" className="text-sm sm:text-base">
                Home
              </Button>
            </Link>

            <Link href="/dashboard">
              <Button variant="ghost" className="text-sm sm:text-base">
                Dashboard
              </Button>
            </Link>

            <Link href="/help">
              <Button variant="ghost" className="text-sm sm:text-base">
                Help
              </Button>
            </Link>

            <SignOutButton>
              <Button variant="ghost" className="text-sm sm:text-base">
                Sign Out
              </Button>
            </SignOutButton>

            <ModeToggle />

            <Image
              src={user.imageUrl}
              alt="User Avatar"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
          </>
        ) : (
          <>
            <SignInButton>
              <Button variant="ghost" className="text-sm sm:text-base">
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton>
              <Button variant="ghost" className="text-sm sm:text-base">
                Sign Up
              </Button>
            </SignUpButton>

            <Link href="/help">
              <Button variant="ghost" className="text-sm sm:text-base">
                Help
              </Button>
            </Link>

            <ModeToggle />
          </>
        )}
      </div>
    </nav>
  );
}
