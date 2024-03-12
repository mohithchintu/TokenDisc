import React from 'react'
import Discord from '../assets/discord.svg'
import Image from 'next/image'


function Community() {
    return (
        <div className='space-y-8'>
            <div className='font-display space-y-2  '>
                <p className='text-[#60A289] font-extrabold text-lg ' >Community</p>
                <p className='text-black font-extrabold text-4xl'>Join the 2.5+ Baby Doge Army Members</p>
            </div>
            <div className=' grid  grid-cols-3  gap-3 space-x-2  '>

                <div className='border border-black   min-h-[50vh] rounded-3xl p-5 flex flex-col justify-end  bg-cover bg-center '>
                    <div>
                        <Image src={Discord} alt="" />
                    </div>
                    <div className=' flex flex-col items-center text-center space-y-6 py-3 '>
                        <div className='space-y-1 flex flex-col items-center bg-cover bg-center'>

                            <p className='font-semiboldtext-lg text-black '>Discord</p>

                        </div>
                        <button className='bg-[#60A289] text-white py-3 border rounded-lg px-6 mt-2'>
                            Join Now!
                        </button>
                    </div>

                </div>
                <div className='border border-black bg-[#28332E]  min-h-[50vh] rounded-3xl p-5 flex flex-col justify-end  ' >

                    <div className=' flex flex-col items-center text-center space-y-6 py-3 '>
                        <div className='space-y-1 flex flex-col items-center '>
                            <p className='font-semiboldtext-lg text-white '>Whatsapp</p>

                        </div>
                        <button className='bg-[#60A289] text-white py-3 border rounded-lg px-6 mt-2'>
                            Join Now!
                        </button>
                    </div>

                </div>
                <div className='border border-black bg-[#28332E]  min-h-[50vh] rounded-3xl p-5 flex flex-col justify-end  ' >
                    <div className=' flex flex-col items-center text-center space-y-6 py-3'>
                        <div className='space-y-1 flex flex-col items-center '>
                            <p className='font-semiboldtext-lg text-white '>Token Disc Community</p>

                        </div>
                        <button className='bg-[#60A289] text-white py-3 border rounded-lg px-6 mt-2'>
                            Join Now!
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Community