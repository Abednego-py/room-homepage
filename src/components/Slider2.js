import React from 'react';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import angLeft from '../images/icon-angle-left.svg'
import angleRight from '../images/icon-angle-right.svg'
import arrow from '../images/icon-arrow.svg'
import '../App.css'

export default function Slider2() {
  return (
    <div>
    <div className="row">

    <div className="col-md-6 col-sm-12 home2">
      <Nav /> 
    </div>

    <div className="col-md-4 col-sm-12 aside">
      <h2>We are available all across the globe</h2>
      <p>With stores all over the world. It's easy for you to find furniture 
          for your home or place of business. Locally, we're in most major cities
          throughout the country. Find the branch nearest you using our store locator. Any questions? 
          Don't hesistate to contact us today.
      </p>
      <h4 style={{cursor : 'pointer'}}>SHOP NOW</h4> 
      <img src={arrow} alt="" className='arrow'/>
   
      <div className="slide">

<Link to={`/slider1`}>
  <div className="link-left">
   <img src={angLeft} alt="angleLeft" className='first-img'/> </div>
   </Link>

   <Link to={`/slider3`}>
     <div className="link-right">
   <img src={angleRight} alt="angleRight" className='sec-img'/></div>
   </Link>
</div>
    </div>

    </div>
    </div>
  );
}
