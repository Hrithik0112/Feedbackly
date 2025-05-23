import React from 'react'
import { MessageCircle } from 'lucide-react'

const AppIcon = () => {
  return (
    <div className='flex items-center gap-2'>
        <MessageCircle className='text-purple-300'  />
        <p className='text-2xl font-mono font-bold bg-clip-text bg-gradient-to-b text-transparent   from-white   to-purple-400  '>Feedbackly</p>
    </div>
  )
}

export default AppIcon