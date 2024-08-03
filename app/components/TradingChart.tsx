// components/TradingChart.tsx
import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const TradingChart = () => {
  useEffect(() => {
    const ctx = document.getElementById('tradingChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [], // Fill in with appropriate labels
        datasets: [
          {
            label: 'Price',
            data: [], // Fill in with appropriate data
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
    });
  }, []);

  return <canvas id="tradingChart" width="400" height="200"></canvas>;
};

export default TradingChart;
