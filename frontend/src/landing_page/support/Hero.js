import React from "react";
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <section className="container-fluid mb-5 " id="supportHero">
      <div className="p-3" id="supportWarpper">
        <h4 className="">Support Portal</h4>
        
    <Link to=""
          className=""
          style={{ color: "white", textDecoration: "underline" }}
        >
          Track Ticket
        </Link>
      </div>
      <div className="row p-5 mx-5">
        <div className="col-6 p-5">
          <h3>Search an answer or browse help topics to create a ticket</h3>
          <input placeholder="Eg: how do I activate F&Q, why is my order getting rejected.." />
          <br />
          <Link to="">Track account opening</Link>
          <Link to="">Track Segment activation</Link>
          <Link to="">Intraday margins</Link>
          <Link to="">Kite user manual</Link>
        </div>
        <div className="col-6 p-5">
          <h3>Featured</h3>
          <ol>
            <li>
              <Link to="">Current Takeovers and Delisting - January 2004</Link>
            </li>
            <li>
              <Link to="">Latest Intraday leverages - MIS & CO</Link>
            </li>
          </ol>
          <br />
        </div>
      </div>
    </section>
  );
}

export default Hero;
