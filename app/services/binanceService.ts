import axios from 'axios';

const BINANCE_API_URL = 'https://api.binance.com/api/v3';

export const fetchOrderBook = async (symbol: string) => {
  const response = await axios.get(`${BINANCE_API_URL}/depth`, {
    params: {
      symbol,
      limit: 10
    }
  });
  return response.data;
};

export const fetchTradeHistory = async (symbol: string) => {
  const response = await axios.get(`${BINANCE_API_URL}/trades`, {
    params: {
      symbol,
      limit: 10
    }
  });
  return response.data;
};
