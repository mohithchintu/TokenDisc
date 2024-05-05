import React from 'react'
import Discord from '../assets/discord.svg'
import Image from 'next/image'


function Community() {
    return (
        <div className='space-y-8'>
            <div className='font-display space-y-2  '>
                <p className='text-[#60A289] font-extrabold text-lg ' >Community</p>
                <p className='text-black font-extrabold text-4xl'>Join the Token Disc Community</p>
            </div>
            <div className='flex justify-between items-center space-x-3'>
                <div className='border border-black rounded-3xl p-2 flex flex-row justify-center items-center '>
                    <div className='justify-center items-center'>
                        <Image src={Discord} alt="" className='max-h-[15vh]' />
                        <div className=' flex flex-col items-center text-center space-y-2'>
                            <p className='font-semiboldtext-lg text-black '>Discord</p>
                            <button className='bg-[#60A289] w-full text-white py-3 border rounded-lg px-6'>
                                Join Now!
                            </button>
                        </div>
                    </div>
                </div>
                <div className='border border-black rounded-3xl p-2 grid flex-row justify-center items-center '>
                    <div className='justify-center items-center'>
                        <Image src={Discord} alt="" className='max-h-[15vh]' />
                        <div className=' flex flex-col items-center text-center space-y-2'>
                            <p className='font-semiboldtext-lg text-black '>Telegram</p>
                            <button className='bg-[#60A289] w-full text-white py-3 border rounded-lg px-6'>
                                Join Now!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community