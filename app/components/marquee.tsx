"use client"
import React, { useEffect } from 'react';

const Marquee = () => {
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
        <div className="livecoinwatch-widget-5 bg-[#E9EBE7]" lcw-base="USD" lcw-color-tx="#7bdcb5" lcw-marquee-1="coins" lcw-marquee-2="movers" lcw-marquee-items="30"></div>
    );
};

export default Marquee;

