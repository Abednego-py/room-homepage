import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import angLeft from "../images/icon-angle-left.svg";
import angleRight from "../images/icon-angle-right.svg";
import arrow from "../images/icon-arrow.svg";
import "../App.css";
import CallToAction from "./CallToAction";

export default function Slider1() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6 col-sm-12 home">
          <Nav />
        </div>

        <div className="col-md-4 col-sm-12 aside">
          <h2>Discover innovative ways to decorate</h2>
          <p>
            We provide unmatched quality comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vsison to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love
          </p>
          <CallToAction />
          
          <div className="slide">
            <Link to={`/slider1`}>
              <div className="link-left">
                <img src={angLeft} alt="angleLeft" className="first-img" />{" "}
              </div>
            </Link>

            <Link to={`/slider2`}>
              <div className="link-right">
                <img src={angleRight} alt="angleRight" className="sec-img" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
