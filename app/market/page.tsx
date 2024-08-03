"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

interface MarketData {
  symbol: string;
  lastPrice: string;
  volume: string;
}

interface Order {
  id: number;
  symbol: string;
  price: number;
  quantity: number;
  type: 'buy' | 'sell';
  market: 'spot' | 'futures';
}

const Futures = () => {
  const [data, setData] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [spotBalance, setSpotBalance] = useState(10000);
  const [futureValue, setFutureValue] = useState(10000);
  const [futuresBalance, setFuturesBalance] = useState(10000);
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderId, setOrderId] = useState(0);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get('https://fapi.binance.com/fapi/v1/ticker/24hr');
        setData(response.data);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchMarketData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFutureValue(spotBalance * Math.floor(Math.random() * 201.78)/10 - 100.90);
    }, 3000); 

    return () => clearInterval(interval);
  }, [spotBalance]);

  const handleTrade = (market: 'spot' | 'futures', symbol: string, price: number, quantity: number, type: 'buy' | 'sell') => {
    const totalCost = price * quantity;
    const newOrderId = orderId + 1;
    setOrderId(newOrderId);

    if (market === 'spot') {
      if (type === 'buy' && spotBalance >= totalCost) {
        setSpotBalance(spotBalance - totalCost);
        setOrders([...orders, { id: newOrderId, symbol, price, quantity, type, market }]);
      } else if (type === 'sell') {
        setSpotBalance(spotBalance + totalCost);
        setOrders([...orders, { id: newOrderId, symbol, price, quantity, type, market }]);
      } else {
        alert('Insufficient spot balance');
      }
    } else if (market === 'futures') {
      if (type === 'buy' && futuresBalance >= totalCost) {
        setFuturesBalance(futuresBalance - totalCost);
        setOrders([...orders, { id: newOrderId, symbol, price, quantity, type, market }]);
      } else if (type === 'sell') {
        setFuturesBalance(futuresBalance + totalCost);
        setOrders([...orders, { id: newOrderId, symbol, price, quantity, type, market }]);
      } else {
        alert('Insufficient futures balance');
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen bg-[#E9EBE7] p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Crypto Demo Trading</h1>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Spot Trading</h2>
          <p className="mb-4">Balance: ${spotBalance.toFixed(2)}</p>
          <p className="mb-4">Future Value: ${futureValue}</p>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2">Symbol</th>
                <th className="py-2 px-4 border-b-2">Last Price</th>
                <th className="py-2 px-4 border-b-2">Volume</th>
                <th className="py-2 px-4 border-b-2">Input</th>
                <th className="py-2 px-4 border-b-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((market) => (
                <tr key={market.symbol}>
                  <td className="py-2 px-4 border-b">{market.symbol}</td>
                  <td className="py-2 px-4 border-b">${parseFloat(market.lastPrice).toFixed(2)}</td>
                  <td className="py-2 px-4 border-b">{market.volume}</td>
                  <td className="py-2 px-4 border-b"><input className="p-2 border border-black rounded-lg" type="number"  /></td>
                  <td className="py-2 px-4 border-b justify-center">
                    <button
                      onClick={() => handleTrade('spot', market.symbol, parseFloat(market.lastPrice), 1, 'buy')}
                      className="bg-green-500 text-white py-1 px-3 rounded mr-2 mb-1"
                    >
                      Buy 1
                    </button>
                    <button
                      onClick={() => handleTrade('spot', market.symbol, parseFloat(market.lastPrice), 1, 'sell')}
                      className="bg-red-500 text-white py-1 px-3 rounded"
                    >
                      Sell 1
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Futures Trading</h2>
          <p className="mb-4">Balance: ${futuresBalance.toFixed(2)}</p>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2">Symbol</th>
                <th className="py-2 px-4 border-b-2">Last Price</th>
                <th className="py-2 px-4 border-b-2">Volume</th>
                <th className="py-2 px-4 border-b-2">Input</th>
                <th className="py-2 px-4 border-b-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((market) => (
                <tr key={market.symbol}>
                  <td className="py-2 px-4 border-b">{market.symbol}</td>
                  <td className="py-2 px-4 border-b">${parseFloat(market.lastPrice).toFixed(2)}</td>
                  <td className="py-2 px-4 border-b">{market.volume}</td>
                  <td className="py-2 px-4 border-b"><input className="p-2 border border-black rounded-lg" type="number"  /></td>
                  <td className="py-2 px-4 border-b justify-center">
                    <button
                      onClick={() => handleTrade('futures', market.symbol, parseFloat(market.lastPrice), 1, 'buy')}
                      className="bg-green-500 text-white py-1 px-3 rounded mr-2 mb-1"
                    >
                      Buy 1
                    </button>
                    <button
                      onClick={() => handleTrade('futures', market.symbol, parseFloat(market.lastPrice), 1, 'sell')}
                      className="bg-red-500 text-white py-1 px-3 rounded"
                    >
                      Sell 1
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold mb-2">Order History</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2">ID</th>
              <th className="py-2 px-4 border-b-2">Market</th>
              <th className="py-2 px-4 border-b-2">Symbol</th>
              <th className="py-2 px-4 border-b-2">Price</th>
              <th className="py-2 px-4 border-b-2">Quantity</th>
              <th className="py-2 px-4 border-b-2">Type</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="py-2 px-4 border-b">{order.id}</td>
                <td className="py-2 px-4 border-b">{order.market}</td>
                <td className="py-2 px-4 border-b">{order.symbol}</td>
                <td className="py-2 px-4 border-b">${order.price.toFixed(2)}</td>
                <td className="py-2 px-4 border-b">{order.quantity}</td>
                <td className="py-2 px-4 border-b">{order.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Futures;


