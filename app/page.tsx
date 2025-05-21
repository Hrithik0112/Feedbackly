"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  const handleClick = () => {
    router.push("/(user)/dashboard");
  }
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-fuchsia-300">
        <div className="flex flex-col justify-center items-center min-h-dvh ">
          <h1 className="font-mono text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-white via-fuchsia-400 to-purple-600">Welcome to the dark side</h1>
        <Button onClick={handleClick} className="bg-fuchsia-500 text-white mt-4 hover:bg-fuchsia-600 transition-all duration-200">  
          Get Started
        </Button>
        </div>
    </div>
  );
}
