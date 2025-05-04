import React from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const GraduationLogo: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-row gap-4 items-center'>
      <Avatar className='w-16 h-16'>
        <AvatarImage src="/images/logo.png" alt="logo" />
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
      <div>
        {children}
      </div>
    </div>
  )
}

export default GraduationLogo
