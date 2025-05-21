import React from 'react'
import { MessageCircle } from 'lucide-react'

const AppIcon = () => {
  return (
    <div className='flex items-center gap-2'>
        <MessageCircle className='text-fuchsia-500' />
        <h1 className='text-2xl font-semibold text-fuchsia-500 font-mono'>
            Fex
            <span className='font-normal'>xa</span></h1>
    </div>
  )
}

export default AppIcon