import React from 'react';
function Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your and trading investment expericen even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/smallcaseLogo.png" alt='SmallCaseLogo'/>
                    <p className='text-small text-muted mt-2'>Thematic investment platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/streakLogo.png" alt="StreakLogo" style={{width:"50%"}}/>
                    <p className='text-small text-muted mt-2'>Algo & strategy platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/sensibullLogo.svg" alt='SensibullLogo' style={{width:"50%"}}/>
                    <p className='text-small text-muted mt-3'>Options trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/zerodhaFundhouse.png" alt='ZerodhaFundhouse' style={{width:"50%"}}/>
                    <p className='text-small text-muted mt-2'>Asset management</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/goldenpiLogo.png" alt="goldenpiLogo" style={{width:"50%"}}/>
                    <p className='text-small text-muted mt-2'>bonds trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/dittoLogo.png" alt="Dittologo" style={{width:"40%"}}/>
                    <p className='text-small text-muted mt-2'>Insurance</p>
                </div>
                <button className='p-2 btn btn-primary fs-6' style={{width:"15%",margin:"0 auto",}}>Signup now</button>
            </div>
        </div>
     );
}

export default Universe;