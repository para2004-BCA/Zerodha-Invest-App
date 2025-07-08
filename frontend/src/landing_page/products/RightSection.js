import React from "react";
import { Link } from 'react-router-dom';

function RightSection({ imgURL, ProductName, ProdictDescription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mt-5 p-5">
          <div>
            <h1 className="mt-5">{ProductName}</h1>
            <p>{ProdictDescription}</p>
          </div>
          <div>
            <div>
              <Link to={learnMore}>
                learn More{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-6 ">
          <div>
            <img src={imgURL}  alt="IMG_URL"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
