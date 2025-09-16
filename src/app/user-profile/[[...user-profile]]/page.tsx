import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const UserPrfilePage = () => {
  return (
    <div className='flex justify-center items-center  py-8'>
        
        <UserProfile />
    </div>
  )
}

export default UserPrfilePage