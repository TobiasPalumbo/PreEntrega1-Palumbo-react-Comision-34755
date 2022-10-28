import React, { useContext, useEffect, useState } from 'react';
import { AddToCartContext } from '../../Context/addToCartProvider';
import CartSvg from './CartSvg';
const Cartwidget = () => {
  const {cart , totalDeProductos} = useContext(AddToCartContext);
  return (
    <>
     <span>
      <img 
      className='img-logo' 
      src="https://firebasestorage.googleapis.com/v0/b/react-34755-tobiaspalumbo.appspot.com/o/imagenes%2Flogo.svg?alt=media&token=32b0bb14-3892-4e38-af36-960fe6724fbc" 
      alt="carrito" />  
      <span>{totalDeProductos}</span>
     </span> 
    </>
    );
}

export default Cartwidget;
