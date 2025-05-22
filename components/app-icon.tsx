import React from 'react'
import { MessageCircle } from 'lucide-react'

const AppIcon = () => {
  return (
    <div className='flex items-center gap-2'>
        <MessageCircle  />
        <p className='text-2xl font-mono font-bold bg-clip-text bg-gradient-to-r text-transparent from-blue-950 via-blue-400 to-purple-800 text-shadow-blue-400 '>Feedbackly</p>
    </div>
  )
}

export default AppIcon