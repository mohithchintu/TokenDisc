"use client"
// import React, { useEffect } from 'react';

// const Marquee = () => {
//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = "https://www.livecoinwatch.com/static/lcw-widget.js";
//         script.defer = true;
//         document.body.appendChild(script);

//         return () => {
//             document.body.removeChild(script);
//         };
//     }, []);

//     return (
//         <div style={{ backgroundColor: '#E9EBE7' }} className="livecoinwatch-widget-5" lcw-base="USD" lcw-color-tx="#7bdcb5" lcw-marquee-1="coins" lcw-marquee-2="movers" lcw-marquee-items="30"></div>
//     );
// };

// export default Marquee;

import React, { useEffect } from 'react';

const Marquee: React.FC = () => {
  useEffect(() => {
    // Check if the script already exists
    if (!document.getElementById('tradingview-widget-script')) {
      const script = document.createElement('script');
      script.id = 'tradingview-widget-script'; // Assign an ID to the script
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.innerHTML = JSON.stringify({
        symbols: [
          { description: 'Bitcoin', proName: 'COINBASE:BTCUSD' },
          { description: 'Ethereum', proName: 'COINBASE:ETHUSD' },
          { description: 'Solana', proName: 'COINBASE:SOLUSD' },
          { description: 'Cardano', proName: 'COINBASE:ADAUSD' },
          { description: 'Binance Coin', proName: 'BINANCE:BNBUSDT' },
          { description: 'XRP', proName: 'COINBASE:XRPUSD' },
          { description: 'Dogecoin', proName: 'COINBASE:DOGEUSD' },
          { description: 'Polkadot', proName: 'COINBASE:DOTUSD' },
          { description: 'Litecoin', proName: 'COINBASE:LTCUSD' },
          { description: 'Chainlink', proName: 'COINBASE:LINKUSD' },
          { description: 'Bitcoin Cash', proName: 'COINBASE:BCHUSD' },
          { description: 'Stellar', proName: 'COINBASE:XLMUSD' },
          { description: 'Uniswap', proName: 'COINBASE:UNIUSD' },
          { description: 'Aave', proName: 'COINBASE:AAVEUSD' },
          { description: 'Cosmos', proName: 'COINBASE:ATOMUSD' },
          { description: 'Algorand', proName: 'COINBASE:ALGOUSD' },
          { description: 'Tezos', proName: 'COINBASE:XTZUSD' },
          { description: 'Filecoin', proName: 'COINBASE:FILUSD' },
          { description: 'VeChain', proName: 'BINANCE:VETUSDT' },
          { description: 'EOS', proName: 'COINBASE:EOSUSD' },
          { description: 'THETA', proName: 'BINANCE:THETAUSDT' },
          { description: 'TRON', proName: 'BINANCE:TRXUSDT' },
          { description: 'IOTA', proName: 'BINANCE:IOTAUSDT' },
          { description: 'Monero', proName: 'BINANCE:XMRUSDT' },
          { description: 'Neo', proName: 'COINBASE:NEOUSD' }
        ],
        showSymbolLogo: true,
        isTransparent: false,
        displayMode: 'adaptive',
        colorTheme: 'light',
        locale: 'en'
      });
      document.getElementById('tradingview-widget-container')?.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" id="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-container__copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
        </a>
      </div>
    </div>
  );
};

export default Marquee;

