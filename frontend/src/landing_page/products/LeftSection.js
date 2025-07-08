import React from "react";
import { Link } from 'react-router-dom';

function LeftSection({
  imageURL,
  productName,
  productDesription,
  TryDemo,
  learnMore,
  googlePlay,
  appStore,
})
 {
  return (
  <div className="container">
    <div className="row ">
        <div className="col-6 p-5">
            <img src={imageURL} alt="IMG_URL"/>
        </div>
        <div className="col-6 p-5 mt-5">
            <h1>{productName}</h1>
            <p>{productDesription}</p>
            <div>
            <Link to={TryDemo}>Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
            <Link to={learnMore} style={{marginLeft:"100px"}}>learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
            </div>
            <div className="mt-4">
            <Link to={googlePlay}><img src="media/images/googlePlayBadge.svg"/></Link>
            <Link to={appStore}><img src="media/images/appstoreBadge.svg" style={{marginLeft:"50px"}}/></Link>
        </div>
        </div>

    </div>
  </div>
  );
}

export default LeftSection;
