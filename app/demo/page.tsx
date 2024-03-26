"use client";
import React, { useEffect, useState } from 'react';

const Demopage = () => {
    const [coin, setCoin] = useState("BTC");
    const [bquantity, setBquantity] = useState(1);
    const [squantity, setSquantity] = useState(1);

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
        <div className="flex">
            <div className="w-2/3 flex flex-col bg-gray-200 p-4">
                <div className="livecoinwatch-widget-1 min-h-fit"
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
                <input type="text" placeholder="Search" className="mb-4 p-2 rounded" onChange={(e) => setCoin(e.target.value)} />
                <button className='bg-[#616262] text-white mb-4 p-2 rounded'>search</button>
                <div className="flex items-center py-4">
                    <button className="bg-[#343a40] text-white py-1 px-2 rounded mr-2" onClick={() => setBquantity(prevQuantity => Math.max(1, prevQuantity - 1))}>-</button>
                    <div className="bg-white text-gray-800 p-1 rounded w-8 text-center">{bquantity}</div>
                    <button className="bg-[#343a40] text-white py-1 px-2 rounded" onClick={() => setBquantity(prevQuantity => Math.max(1, prevQuantity + 1))}>+</button>
                </div>
                <button className="bg-[#60A289] text-white p-2 rounded">Buy</button>
                <div className="flex items-center py-4">
                    <button className="bg-[#343a40] text-white py-1 px-2 rounded mr-2" onClick={() => setSquantity(prevQuantity => Math.max(1, prevQuantity - 1))}>-</button>
                    <div className="bg-white text-gray-800 p-1 rounded w-8 text-center">{squantity}</div>
                    <button className="bg-[#343a40] text-white py-1 px-2 rounded ml-2" onClick={() => setSquantity(prevQuantity => Math.max(1, prevQuantity + 1))}>+</button>
                </div>
                <button className="bg-[#60A289] text-white p-2 rounded">Sell</button>
            </div>
        </div>
    );
};

export default Demopage;
