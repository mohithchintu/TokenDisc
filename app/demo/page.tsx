"use client";
import React, { useEffect, useState } from 'react';
import Coindata from '../components/coindata';

const Demopage = () => {
    const [coin, setCoin] = useState("BTC");
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.livecoinwatch.com/static/lcw-widget.js";
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="h-screen flex">
            <div className="w-full bg-gray-200 p-4">
                <div className="livecoinwatch-widget-1"
                    lcw-coin={coin}
                    lcw-base="INR"
                    lcw-secondary={coin}
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
                <input type="text" placeholder="Search" className="mb-4 p-2 rounded" onChange={(e) => setCoin(e.target.value)} />
                <button className='bg-[#60A289] text-white mb-4 p-2 rounded'>search</button>
                <button className="bg-[#60A289] text-white mb-4 p-2 rounded">Buy</button>
                <button className="bg-[#616262] text-white mb-4 p-2 rounded">Sell</button>
            </div>
        </div>
    );
};

export default Demopage;
