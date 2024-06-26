"use client";
import React, { useEffect, useState } from 'react';
import Coindata from '../components/coindata';

const Demopage = () => {
    const [ inbox, setInbox ] = useState('ETH')
    const [selectedCoin, setSelectedCoin] = useState("ETH");

    const handlebutton = () => {
        setSelectedCoin(inbox)
    }

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.livecoinwatch.com/static/lcw-widget.js";
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [selectedCoin]);


    return (
        <div className="h-screen flex">
            <div className="w-full bg-gray-200 p-4">
                <div className="livecoinwatch-widget-1"
                    lcw-coin={selectedCoin}
                    lcw-base="INR"
                    lcw-secondary={selectedCoin}
                    lcw-period="d"
                    lcw-color-tx="#60A289"
                    lcw-color-pr="#00d084"
                    lcw-color-bg="#ffffff"
                    lcw-border-w="10"></div>
            </div>
            <div className="w-1/3 flex flex-col bg-[#E9EBE7] p-4">
                <Coindata />
            </div>
            <div className="w-1/3 flex flex-col bg-[#E9EBE7] p-4">
                <input type="text" placeholder="Search" className="mb-4 p-2 rounded" onChange={(e) => setInbox(e.target.value)} />
                <button className='bg-[#60A289] text-white mb-4 p-2 rounded' onClick={handlebutton}>search</button>
                <button className="bg-[#60A289] text-white mb-4 p-2 rounded">Buy</button>
                <button className="bg-[#616262] text-white mb-4 p-2 rounded">Sell</button>
            </div>
        </div>
    );
};

export default Demopage;
