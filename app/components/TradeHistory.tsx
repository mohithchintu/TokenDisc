// import React, { useEffect, useState } from 'react';
// import { fetchTradeHistory } from '../services/binanceService';

// const TradeHistory: React.FC<{ symbol: string }> = ({ symbol }) => {
//   const [trades, setTrades] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchTradeHistory(symbol);
//       setTrades(data);
//     };
//     fetchData();
//   }, [symbol]);

//   return (
//     <div className="bg-white p-4 rounded shadow">
//       <h2 className="text-xl font-semibold mb-4">Trade History</h2>
//       {trades.length ? (
//         <div className="space-y-2">
//           <div className="flex justify-between">
//             <span>Time</span>
//             <span>Price</span>
//             <span>Amount</span>
//           </div>
//           {trades.map((trade: any, index: number) => (
//             <div key={index} className="flex justify-between">
//               <span>{new Date(trade.time).toLocaleTimeString()}</span>
//               <span>{trade.price}</span>
//               <span>{trade.qty}</span>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// };

// export default TradeHistory;


// components/TradeHistory.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Trade = {
  price: number;
  amount: number;
  timestamp: number;
};

const TradeHistory = () => {
  const [tradeHistory, setTradeHistory] = useState<Trade[] | null>(null);

  useEffect(() => {
    const fetchTradeHistory = async () => {
      const response = await axios.get('/api/trade-history');
      setTradeHistory(response.data);
    };
    fetchTradeHistory();
  }, []);

  return (
    <div>
      <h2>Trade History</h2>
      {tradeHistory && (
        <ul>
          {tradeHistory.map((trade, index) => (
            <li key={index}>
              {trade.price} - {trade.amount} - {new Date(trade.timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TradeHistory;
