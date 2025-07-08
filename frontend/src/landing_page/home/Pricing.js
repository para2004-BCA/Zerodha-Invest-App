import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
    return ( 
    <div className='container'>
        <div className='row'>
            <div className='col-4'>
                <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                <p>we poneerd the of discount broking and priced transpsrency in India. Flat fees and no hidden charges</p>
                <Link to="" style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
            </div>
            <div className='col-2'></div>
            <div className='col-6'>
                <div className='row text-center'>
                    <div className='col  p-3 border '>
                        <h1 className='mb-3'><i class="fa fa-inr" aria-hidden="true"></i>0</h1>
                        <p>free equity delivery <br/>and direct mutual funds</p>
                    </div>
                    <div className='col p-3 border '>
                        <h1 className='mb-3'><i class="fa fa-inr" aria-hidden="true"></i>20</h1>
                        <p>Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}

export default Pricing;