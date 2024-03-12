"use client"
import React, { useEffect } from 'react';

const Demopage = () => {
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
            <div className="tabs-container w-1/4 bg-gray-200 p-4">
                <div className="tab bg-gray-300 rounded px-2 py-1 mb-2 cursor-pointer">Buy</div>
                <div className="tab bg-gray-300 rounded px-2 py-1 mb-2 cursor-pointer">Sell</div>
                <div className="tab bg-gray-300 rounded px-2 py-1 mb-2 cursor-pointer">Convert</div>
            </div>
            <div className="flex-grow h-full">
                <div className="livecoinwatch-widget-1"></div>
            </div>
        </div>
    );
};

export default Demopage;



