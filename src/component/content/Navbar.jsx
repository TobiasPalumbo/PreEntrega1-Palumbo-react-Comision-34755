import React from 'react';
import "../../styles/Navbar.css"
import Cartwidget from '../Cartwidget';
import logo from "../../image/logo1.svg"
const Navbar = () => {
  return (
  <header>
    <nav className='nav'>
      <div>
        <img className='logo' src={logo}  alt="" />
        </div>
      <ul className='nav-items'>
        <li>Home</li>
        <li>%Sale</li>
        <li><a href="#">Shop</a></li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <Cartwidget />
    </nav>
  </header>
  );
}  
export default Navbar;
