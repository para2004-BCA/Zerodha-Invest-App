import React from "react";
import { Link } from 'react-router-dom';

function Brokerage() {
  return (
    <div className="container border-top p-5 ">
      <div className="row p-5">
        <div className="col-8">
         <Link to=""> <h3 className="text-center mb-3 fs-3">
            Brokerage calculator
          </h3>
          </Link>
          <ul className="mt-4 text-muted" style={{textAlign:"lift", lineHeight:"2.5",fontSize:"12.5px" }}>
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4">
            <Link to=""><h3 className="" >List of charges</h3></Link>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
