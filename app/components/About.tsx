import React from 'react'
import Rewards from '../assets/Rewards.svg'
import TDx from '../assets/TDx.svg'
import Marketing from '../assets/Marketing.svg'
import Image from 'next/image'


function About() {
    return (
        <div className='space-y-8'>
            <div className='font-display space-y-2  '>
                <p className='text-[#60A289] font-extrabold text-lg ' >About</p>
                <p className='text-black font-extrabold text-4xl'>The Baby Doge Ecosystem</p>
            </div>
            <div className=' grid  grid-cols-3  gap-3 space-x-2  '>

                <div className='border border-black bg-[#28332E]  min-h-[50vh] rounded-3xl p-5 flex flex-col justify-end bg-cover bg-center   ' >
                    <div>
                        <Image src={TDx} alt="" />
                    </div>
                    <div className=' flex flex-col items-center text-center space-y-6 '>
                        <div className='space-y-1 flex flex-col items-center '>
                            <p className='font-semibold text-lg text-white '>TDx</p>
                            <p className='text-white text-wrap w-4/5 '>Get a slice of our Native &apos;Token-Disc&apos; tokens</p>
                        </div>
                        <button className='bg-[#28332E] text-white py-3 border rounded-lg px-6 mt-2'>
                            Create Now!
                        </button>
                    </div>

                </div>
                <div className='border border-black bg-[#28332E]  min-h-[50vh] rounded-3xl p-5 flex flex-col justify-end  bg-center '>
                    <div>
                        <Image src={Rewards} alt="" />
                    </div>

                    <div className=' flex flex-col items-center text-center space-y-6 '
                    >
                        <div className='space-y-1 flex flex-col items-center '>
                            <p className='font-semibold text-lg text-white '>Rewards</p>
                            <p className='text-white text-wrap w-4/5 '> Get rewarded for your Contribution</p>
                        </div>
                        <button className='bg-[#60A289] text-white py-3 border rounded-lg px-6 mt-2'>
                            Create Now!
                        </button>
                    </div>

                </div>
                <div className='border border-black bg-[#28332E]  min-h-[50vh] rounded-3xl p-5 flex flex-col justify-end  bg-cover bg-center' >
                    <div>
                        <Image src={Marketing} alt="" />
                    </div>
                    <div className=' flex flex-col items-center text-center space-y-6 '>
                        <div className='space-y-1 flex flex-col items-center '>
                            <p className='font-semibold text-lg text-white '>Market updates</p>
                            <p className='text-white text-wrap w-4/5 '> Latest news and updates in the crypto System</p>
                        </div>
                        <button className='bg-[#60A289] text-white py-3 border rounded-lg px-6 mt-2'>
                            Create Now!
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About