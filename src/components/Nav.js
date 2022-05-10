import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
export default function Nav() {
  const openDropdown = ()=> {
    let navMobile = document.getElementsByClassName('nav-mobile')[0]
  let header = document.getElementsByClassName('header')[0]
    navMobile.setAttribute('id', 'open')
    header.setAttribute('id', 'close')
    console.log('hj')
  }
  const closedropdown = ()=> {
    let navMobile = document.getElementsByClassName('nav-mobile')[0]
  let header = document.getElementsByClassName('header')[0]
    navMobile.setAttribute('id', 'close')
    header.setAttribute('id', 'open')
  }

  useEffect(()=> {

  })
  return (
    <>
    <div className='row d-flex desktop-nav'>
      <h3 style={{cursor : "pointer"}} className='m-4 mb-1 text-white col-4'>room</h3>

      <ul className='d-flex text-white col-8'>
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
      </ul>
    </div>

    <div className="mobile">
      <div className="header d-flex ">
        <img src={hamburger} alt="" className='col-4' onClick={openDropdown}/>
        <h3 className='text-white col-8'>room</h3>
      </div>
      <div className="nav-mobile">
        <img src={close} alt="close" onClick={closedropdown}/>
        <ul className='d-flex'>
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
      </ul>
      </div>
    </div>

</>
  );
}
