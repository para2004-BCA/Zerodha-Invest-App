import React from "react";
import { Link } from 'react-router-dom';

function Team() {
  return (
    <div className="container p-5 mt-5">
      <div className="row border-top  p-3">
        <h1 className="text-center ">People</h1>
      </div>
      <div className="row p-5  text-muted">
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="nithinKamath"
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h5>Founder, CEO</h5>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <Link to="">Homepage</Link> / <Link to="">TradingQnA</Link> /
            <Link to="">Twitter</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
