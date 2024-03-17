import React from 'react'
import Community from '../assets/Community.svg'
import Demotrading from '../assets/Demotrading.svg'
import Academy from '../assets/Academy.jpg'
import Image from 'next/image'
import Link from 'next/link'

function Ourvalues() {
    return (
        <div className='space-y-8'>
            <div className='space-y-8'>
                <div className='font-display space-y-2  '>
                    <p className='text-[#60A289] font-extrabold text-lg ' >Our Values</p>
                    <p className='text-black font-extrabold text-4xl'>The Pillars of Baby Doge</p>
                </div>

            </div>

            <div className=' grid  grid-cols-2 gap-3  space-y-2'>
                <div className='col-span-2 border border-black bg-[#28332E]  min-h-[60vh] rounded-3xl p-5 flex flex-row-reverse justify-end bg-cover bg-center'>
                    <div>
                        <Image src={Academy} alt="" />
                    </div>
                    <div className=' flex flex-col items-start  space-y-6 p-8 '>
                        <div className=' flex flex-col items-start space-y-3 '>
                            <p className='font-extrabold text-xl  text-white text-start '>Academy</p>
                            <p className='text-white  w-4/5 text-justify  '> An institute exclusively designed for Cryptocurrency and  block-chain technology</p>
                        </div>
                        <button className='bg-[#60A289] text-white py-3 border rounded-lg px-6 mt-2'>
                            <Link href='/learn'>Join community</Link>
                        </button>
                    </div>



                </div>
                <div className=' border border-black bg-[#28332E]  min-h-[40vh] rounded-3xl p-5 flex flex-col justify-end  bg-center'

                >
                    <div className='min-h-[40vh] bg-center bg-cover'>
                        <div>
                            <Image src={Community} alt="" />
                        </div>

                    </div>
                    <div className=' flex flex-col items-start  space-y-6 p-8  '

                    >
                        <div className=' flex flex-col items-start space-y-3 bg-cover  '>
                            <p className='font-extrabold text-xl text-white text-start '>Community</p>
                            <p className='text-white  w-4/5 text-justify  '> Be a significant part of fastest growing crypto Community in the world </p>
                        </div>
                        <button className='bg-[#60A289] text-white py-3 border rounded-lg px-6 mt-2'>
                            <Link href="/community">Join community</Link>
                        </button>
                    </div>
                </div>
                <div className='border border-black bg-[#28332E]  min-h-[60vh] rounded-3xl p-5 flex flex-col justify-end  bg-center '>
                    <div>
                        <Image src={Demotrading} alt="" />
                    </div>
                    <div className=' flex flex-col items-start  space-y-6 p-8  '
                    >
                        <div className=' flex flex-col items-start space-y-3 
                      '>
                            <p className='font-extrabold text-xl text-white text-start 
                      '>Demo trading</p>
                            <p className='text-white w-4/5 text-justify  '> Take your First steps towards Crypto trading</p>
                        </div>
                        <button className='bg-[#28332E] text-white py-3 border rounded-lg px-6 mt-2'>
                            <Link href='/demo'>Start Demo Trading</Link>
                        </button>
                    </div>

                </div>




            </div>
        </div>
    )
}

export default Ourvalues