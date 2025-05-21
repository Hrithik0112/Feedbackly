import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import AppIcon from './app-icon'

const PageHeader = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full transition-all bg-white/20 backdrop-blur-md">
      <div className="w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto border-b">
        <div className="flex h-14 items-center justify-between">
          <AppIcon/>
          <div>
            <SignedOut>
              <SignInButton>
                <Button className="bg-fuchsia-500 hover:bg-fuchsia-700 ">Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button className="bg-fuchsia-500 hover:bg-fuchsia-700 ml-2">Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PageHeader;