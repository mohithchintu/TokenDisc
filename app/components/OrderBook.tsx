// import React, { useEffect, useState } from 'react';
// import { fetchOrderBook } from '../services/binanceService';

// const OrderBook: React.FC<{ symbol: string }> = ({ symbol }) => {
//   const [orderBook, setOrderBook] = useState<any>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchOrderBook(symbol);
//       setOrderBook(data);
//     };
//     fetchData();
//   }, [symbol]);

//   return (
//     <div className="bg-white p-4 rounded shadow">
//       <h2 className="text-xl font-semibold mb-4">Order Book</h2>
//       {orderBook ? (
//         <div className="space-y-2">
//           <div className="flex justify-between">
//             <span>Price</span>
//             <span>Amount</span>
//           </div>
//           {orderBook.asks.map((ask: any, index: number) => (
//             <div key={index} className="flex justify-between text-red-500">
//               <span>{ask[0]}</span>
//               <span>{ask[1]}</span>
//             </div>
//           ))}
//           {orderBook.bids.map((bid: any, index: number) => (
//             <div key={index} className="flex justify-between text-green-500">
//               <span>{bid[0]}</span>
//               <span>{bid[1]}</span>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// };

// export default OrderBook;


// components/OrderBook.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Order = [number, number];

type OrderBook = {
  bids: Order[];
  asks: Order[];
};

const OrderBook = () => {
  const [orderBook, setOrderBook] = useState<OrderBook | null>(null);

  useEffect(() => {
    const fetchOrderBook = async () => {
      const response = await axios.get('/api/order-book');
      setOrderBook(response.data);
    };
    fetchOrderBook();
  }, []);

  return (
    <div>
      <h2>Order Book</h2>
      {orderBook && (
        <div>
          <div>
            <h3>Bids</h3>
            <ul>
              {orderBook.bids.map((order, index) => (
                <li key={index}>
                  {order[0]} - {order[1]}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Asks</h3>
            <ul>
              {orderBook.asks.map((order, index) => (
                <li key={index}>
                  {order[0]} - {order[1]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderBook;
