import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-fuchsia-300">
        <div className="flex flex-col justify-center items-center min-h-dvh ">
          <h1 className="font-mono text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-white via-fuchsia-400 to-purple-600">Welcome to the dark side</h1>
        <Button>  
          Get Started
        </Button>
        </div>
    </div>
  );
}
