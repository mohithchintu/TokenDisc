import React from 'react'
import Marquee from '../components/marquee'
import Coindata from '../components/coindata'

const MarketPage = () => {
    return (
        <div className='bg-[#E9EBE7]'>
            <h1>
                MarketPage
                <div className="flex flex-col bg-[#E9EBE7] p-4">
                    <Coindata />
                </div>
            </h1>
            Details
        </div>
    )
}

export default MarketPage