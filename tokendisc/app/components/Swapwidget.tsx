"use client"
import React, { useState } from 'react'
import { FaBitcoin } from 'react-icons/fa';

const Swapwidget = () => {
    const [profile, setProfile] = useState(false);

    const toggleProfile = () => {
        setProfile(!profile);
    }

    return (
        <>
            <div className="fixed bottom-1 right-1 mb-4 mr-4">
                <button onClick={toggleProfile}><FaBitcoin size={45} /></button>
            </div>
            {profile && (
                <div className='flex absolute min-h-[80vh] z-50 invert-0 outline-none focus:outline-none bottom-0'>
                    <iframe className='border border-green-800 overflow-hidden min-w-96 rounded-2xl'
                        src="https://widget.babydogeswap.com/api/widget?darktheme=true&inputCurrency=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c&highLight=60a289&backgroundColor=e9ebe7&inputColor=ffffff&textColor=000000"
                        style={{ bottom: '0' }} />
                </div>
            )}
        </>


    )
}

export default Swapwidget;
