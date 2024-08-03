"use client";
import React, { useEffect, useState } from 'react';
import Coindata from '../components/coindata';
import TradingViewWidget from '../components/Demo';

const Demopage = () => {
    return (
        <div className="h-screen p-20">
            <TradingViewWidget theme='light'/>
        </div>
    );
};

export default Demopage;
