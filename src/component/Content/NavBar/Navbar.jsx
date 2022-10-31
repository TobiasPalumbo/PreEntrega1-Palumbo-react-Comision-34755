import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"
import Cartwidget from '../../Icons/Cartwidget';
import HeartSvg from '../../Icons/HeartSvg';
import { FavoriteCotext } from '../../../Context/favoriteProvider';
const Navbar = () => {
  const {favorites} = useContext(FavoriteCotext);
  return (
  <header>
    <nav className='nav'>
      <div>
        <img className='logo' src="https://firebasestorage.googleapis.com/v0/b/react-34755-tobiaspalumbo.appspot.com/o/imagenes%2Flogo1.svg?alt=media&token=c3925b60-da69-4147-a304-588845d117cb"  alt="" />
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
      <ul className='nav-icons'>
        <li>
          <Link 
          to ="/favoritos">
            <span>
              <HeartSvg
              clase = {"heart-nav img-logo"}
              click = {() => null} />
              <span>{favorites.length}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link 
          to="/carrito">
            <Cartwidget />
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  );
}  
export default Navbar;
