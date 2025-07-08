import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5'>
               <h1>Techonolgy</h1>
               <h4 className='text-muted mt-3 fs-4'>Sleek, modern and intuitive trading platform</h4>
               <p className='mt-3'>Check out our {" "} <Link to="#">investment offerings <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></p> 
            </div>
        </div>
     );
}

export default Hero;