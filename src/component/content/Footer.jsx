import React from 'react';
import "../../styles/Footer.css"
const Footer = () => {
  return (
    <>
     <footer>
      <div className='Footer-son'>
        <h2>
          WeWill
        </h2>
        <div>
          <h4>Links</h4>
          <ul>
            <li>Home</li>
            <li>%Sale</li>
            <li><a href="#">Shop</a></li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h4>Contactos</h4>
          <p>0800-000-0800</p>
          <p>infoWW@gmail.com</p>
        </div>
      </div>
      <div>
      </div>
     </footer>
    </>
  );
}

export default Footer;
