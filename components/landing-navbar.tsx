"use client";

import { useAuth } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export const LandingNabvbar = () => {
  const { isSignedIn } = useAuth();

  return (
    
    <div className="w-full flex justify-center pt-6 px-4">
    <nav className="w-full max-w-6xl bg-black bg-opacity-80 rounded-full flex items-center justify-between p-4">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill src="/logo.png" alt="Logo" className="rounded-full" />
        </div>
      </Link>
      <div className="flex items-center space-x-6">
        <Link href="/releases" className="text-white hover:text-gray-300 transition">
          RELEASES
        </Link>
        <Link href="/store" className="text-white hover:text-gray-300 transition">
          STORE
        </Link>
        <Link href="/about" className="text-white hover:text-gray-300 transition">
          ABOUT US
        </Link>
        <Link href="/contact" className="text-white hover:text-gray-300 transition">
          CONTACT
        </Link>
      </div>
      <Button variant="ghost" size="icon" className="text-white hover:bg-white hover:bg-opacity-10 rounded-full">
         
      </Button>
    </nav>
  </div>
)
}