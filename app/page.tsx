import About from "./components/About";
import Community from "./components/Community";
import Newsletter from "./components/Newsletter";
import Ourvalues from "./components/Ourvalues";
import Link from "next/link";
import Marquee from "./components/marquee";
import Hero from './assets/hero.png'
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Marquee />
      <div className='py-3 px-32 space-y-8 bg-[#E9EBE7] '>
        <div
          className="relative space-y-16 flex flex-col justify-end items-start font-display bg-[#28332E] min-h-[80vh] border border-black rounded-[2rem] p-14 text-white bg-cover bg-center bg-fixed"
        >
          {/* <Image className="h-full w-full rounded-[2rem]" src={Hero} alt="Image" /> */}
          <div className="absolute inset-0 rounded-[2rem] bg-cover">
            <video loop autoPlay muted className="w-full h-full object-cover rounded-[2rem]">
              <source src='./tokenvideo.mp4' type="video/mp4" />
            </video>
            </div>


          <div className='w-1/2 space-y-6 relative z-10'>
            <h1 className='text-5xl font-bold text-white    '>
              Your Personal Crypto Counsellor
            </h1>
          </div>

          <div className='flex space-x-6 relative z-10'>
            <button className='bg-[#60A289] py-[0.5em] px-6 rounded-lg text-white '>
              <Link href='/demo'>Get started!</Link>
            </button>
            <button className='bg-[#616262] py-[0.5em] px-6 rounded-lg'>
              <Link href='/market'>Explore</Link>
            </button>
          </div>
        </div>
        <Ourvalues />
        <About />
        <Community />
        <Newsletter />
      </div>
    </div>
  )
}