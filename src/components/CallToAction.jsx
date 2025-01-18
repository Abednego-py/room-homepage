import React from 'react'
import arrow from "../images/icon-arrow.svg";

function CallToAction() {
  return (
    <div className="d-flex align-items-center justify-content-around w-50" style={{ cursor: "pointer" }}>
      <h4 className='mt-2'>SHOP NOW</h4>
      <img src={arrow} alt="arrow" className='ml-4 pl-4'/>
    </div>
  );
}

export default CallToAction