import React from 'react';
import "../styles/Navbar.css"
import Cartwidget from './Cartwidget';
const Navbar = () => {
  return (
  <>
  <header>
    <nav className='nav'>
      <h1>WeWill</h1>
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
  </>
  );
}  
export default Navbar;
