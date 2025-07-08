import React from "react";
function Hero() {
  return (
    <div className="container mt-5 ">
      <div className="row text-center ">
        <h1>Pricing</h1>
        <h3 className="mt-3 text-muted fs-5 ">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>
      <div className="row mt-5  border-top text-center">
        <div className="col-4 p-4 mt-5">
          <img src="media/images/pricing0.svg" alt="Pricing0" />
          <h1 className="mt-3 fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE),are absolutely free --₹ 0
            brokerage.
          </p>
        </div>
        <div className="col-4 mt-5 p-4">
          <img src="media/images/intradayTrades.svg" alt="intradayTrades" />
          <h1 className="mt-3 fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4 mt-5 p-4">
          <img src="media/images/pricing0.svg" alt="pricing0" />
          <h1 className="mt-3 fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
         <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5"> Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 instraday and
          F&O trades
        </p>
        <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup now
        </button>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Hero;
