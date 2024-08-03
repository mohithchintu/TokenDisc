// components/TradingForm.tsx
import React, { useState } from 'react';

const TradingForm = () => {
  const [quantity, setQuantity] = useState<string>('');

  const handleBuy = () => {
    // Implement buy functionality
  };

  const handleSell = () => {
    // Implement sell functionality
  };

  return (
    <div>
      <h2>Trading Form</h2>
      <div>
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <button onClick={handleBuy}>Buy/Long</button>
      <button onClick={handleSell}>Sell/Short</button>
    </div>
  );
};

export default TradingForm;
