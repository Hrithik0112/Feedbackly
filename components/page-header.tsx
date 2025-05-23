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
import HeaderMenu from './header-menu'

const PageHeader = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full transition-all bg-gray-950/90 backdrop-blur-md">
      <div className="w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto ">
        <div className="flex h-14 items-center justify-between">
          <AppIcon/>
          <div>
            <>

            <SignedOut>
              <div className='flex items-center gap-2 '>

              <SignInButton>
                <Button variant="brand" >Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button variant="brand" >Sign Up</Button>
              </SignUpButton>
              </div>
            </SignedOut>
            </>
            <SignedIn>
              <div className='flex items-center gap-2 '>

              <HeaderMenu/>
              <UserButton />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PageHeader;