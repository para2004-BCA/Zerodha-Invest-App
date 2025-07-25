import React from 'react';
import { Link } from 'react-router-dom';

function Stats() {
    return ( 
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'> Trust with Confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>that's why 1.3+ crore customers trust Zerodha with <i class="fa fa-inr" aria-hidden="true"></i>3.5+ lakh crores wroth of equituy investments</p>
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam,"gamification",or annoying push notification. high quality apps that you use at pace, the way you like</p>
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src="media/images/ecosystem.png" alt="ecosystem" style={{width:"75%"}}/>
                    <div className='text-center'>
                        < Link to="" className='mx-5' style={{textDecoration:"none"}}>Explore our Products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                        < Link to="" style={{textDecoration:"none"}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;