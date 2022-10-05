import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"
import Cartwidget from '../../Icons/Cartwidget';
const Navbar = () => {
  return (
  <header>
    <nav className='nav'>
      <div>
        <img className='logo' src="./image/logo1.svg"  alt="" />
        </div>
      <ul className='nav-items'>
        <li>
          <NavLink  
            to="/">
              Home
          </NavLink>
        </li>
        <li>
          <Link to="/sale">%Sale</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <Link 
        to="/carrito">
          <Cartwidget />
      </Link>
    </nav>
  </header>
  );
}  
export default Navbar;
