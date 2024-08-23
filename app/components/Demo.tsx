import React, { useEffect, useRef, memo } from "react";

interface TradingViewWidgetProps {
  theme: "light" | "dark";
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({ theme }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol:"COINBASE:BTCUSD",
      interval: "D",
      timezone: "Etc/UTC",
      theme,
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com",
    });

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(script);
      }
    };
  }, [theme]);

  return (
    containerRef === null ? (<div>
      loading...
    </div>):(
    <div className="tradingview-widget-container" ref={containerRef} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      <div className="tradingview-widget-copyright">
      </div>
    </div>
    )
  );
};

export default memo(TradingViewWidget);
