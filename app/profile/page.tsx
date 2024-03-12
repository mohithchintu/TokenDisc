import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const ProfilePage = () => {
    return (
        <div className='flex justify-center items-center py-10 bg-[#E9EBE7]'>
            <UserProfile appearance={{
                variables: {
                    colorPrimary: "#60A289",
                    colorText: "black",
                    colorBackground: '#E9EBE7'
                }
            }} />
        </div>
    )
}

export default ProfilePage