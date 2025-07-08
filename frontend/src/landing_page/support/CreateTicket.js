import React from 'react';
import { Link } from 'react-router-dom';
function CreateTicket() {
    return ( 
       <div className='container'>
        <div className='row'>
            <h1>To create a ticket, select a relevant topic</h1>
            <div className='col-4 mt-4 mb-4'>
                <h4 className='fs-5'><i class="fa-solid fa-circle-plus mb-3"></i>Account Opening</h4>
                <Link to="" style={{lineHeight:"2.5"}}>online Account Opening</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>offline Account Opening</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Company, Partenership and HUF Account</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Opening </Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>NRI Account Oprning</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Charges at Zerodha</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Zerodha IDFC FIRST Bank 3-in-1 Account</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Getting Started</Link><br/>
            </div>
             <div className='col-4 mt-4 mb-4'>
                <h4 className='fs-5'><i class="fa-solid fa-user"></i>Your Zerodha Account </h4>
                <Link to="" style={{lineHeight:"2.5"}}>Login Credentials</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Account Modification and Segment Addition</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>DP ID and bank details</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Your Profile</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Transfer and conversion of shares</Link><br/>
            </div>
              <div className='col-4 mt-4 mb-3'>
                <h4 className='fs-5'><i class="fa-solid fa-chart-column"></i> Your Zerodha Account</h4>
                <Link to="" style={{lineHeight:"2.5"}}>Margin/leverage, Product and Order types</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Kite web and Mobils</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Trading FAQs</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Corport Actions </Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Sentinel</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Kite API</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Pi and other Platform</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Stckreports+</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>GTT</Link><br/>
            </div>
        </div>
        <div className='row'>
            <div className='col-4 mt-3 mb-4'>
                <h4 className='fs-5'><i class="fas fa-credit-card"></i> Funds</h4>
                <Link to="" style={{lineHeight:"2.5"}}>Adding Funds</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Fund Withdrawal</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}> eMandates</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Adding Bank Account</Link><br/>
            </div>
            <div className='col-4 mt-3 mb-4'>
                <h4 className='fs-5'><i class="far fa-dot-circle"></i> Console</h4>
                <Link to="" style={{lineHeight:"2.5"}}>Reports</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Ledger</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Portfolio</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>60 Day Challenge </Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>IPO</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Referral Program</Link><br/>
            </div>
            <div className='col-4 mt-3 mb-4'>
                <h4 className='fs-5'><i class="far fa-circle"></i> Coin</h4>
                <Link to="" style={{lineHeight:"2.5"}}>Understanding Mutual Funds</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>About Coin</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Buying and Selling through Coin</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Starting SIP </Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Managing your Portfolio</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Coin App</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Moving to Coin</Link><br/>
                <Link to="" style={{lineHeight:"2.5"}}>Government Securities</Link><br/>
            </div>
        </div>
       </div>
     );
}

export default CreateTicket;