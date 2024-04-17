"use client"
import React, { useEffect } from 'react';

const Coindata: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.defer = true;
        script.src = 'https://www.livecoinwatch.com/static/lcw-widget.js';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="livecoinwatch-widget-3 overflow-scroll"
            lcw-base="INR"
            lcw-d-head="true"
            lcw-d-name="true"
            lcw-d-code="true"
            lcw-d-icon="true"
            lcw-color-tx="#60A289"
            lcw-color-bg="#ffffff"
            lcw-border-w="1">
        </div>
    );
};

export default Coindata;
