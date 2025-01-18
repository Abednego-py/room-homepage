import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import angLeft from "../images/icon-angle-left.svg";
import angleRight from "../images/icon-angle-right.svg";
import arrow from "../images/icon-arrow.svg";
import "../App.css";
import CallToAction from "./CallToAction";

export default function Slider3() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6 col-sm-12 home3">
          <Nav />
        </div>

        <div className="col-md-4 col-sm-12 aside">
          <h2 className="mt-2">Manufactured with the best materials</h2>
          <p>
            Our modern furniture provide a high level of quality. Our company
            has invested in advanced technology to ensure that every product is
            made as perfect and as consistent as possible. With three decades of
            experience in this industry, we understand what customers want for
            their home and office
          </p>
          <CallToAction />

          <div className="slide">
            <Link to={`/slider2`}>
              <div className="link-left">
                <img src={angLeft} alt="angleLeft" className="first-img" />{" "}
              </div>
            </Link>

            <Link to={`/slider3`}>
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
