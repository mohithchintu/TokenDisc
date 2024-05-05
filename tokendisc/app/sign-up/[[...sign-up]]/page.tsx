import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-[#E9EBE7]'>
            <SignUp appearance={{
                variables: {
                    colorPrimary: "#60A289",
                    colorText: "black",
                    colorBackground: '#E9EBE7'
                }
            }} />
        </div>
    )
}

export default SignUpPage