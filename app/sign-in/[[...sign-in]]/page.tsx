import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-[#E9EBE7]'>
            <SignIn appearance={{
                variables: {
                    colorPrimary: "#60A289",
                    colorText: "black",
                    colorBackground: '#E9EBE7'
                }
            }} />
        </div>
    )
}

export default SignInPage