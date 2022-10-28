import React, { useContext, useEffect, useState } from 'react';
import Box from '../../Layout/Box/Box';
import { Link, redirect } from 'react-router-dom';
import { AddToCartContext } from '../../../Context/addToCartProvider';
const FooterCart = () => {
  let init = 0
  const {emptyCart, cart} = useContext(AddToCartContext)
    const total = cart.reduce((acc, prod) => acc + prod.producto[1].precio * prod.cant, 0 ) 

  return (
    <div className='footer-cart'>
      <div  className='wrapper-left'>
        <Box
        click = {() => emptyCart(cart)}
        input = "Empty cart"
        class = "empty-box" />
      </div>
      <div className='wrapper-right'>
      <Box
      class = "box-total"
      input = {`Total: $${total} `} />
      <Link to = "/checkout">
       <Box  
        input = "Checkout" 
        class = "checkout" />
      </Link>
      <Box
      click = {() => redirect("/shop")}
      input = {"Continue Shopping"} 
      class = "continue-shopping" />
      </div>
    </div>
  );
}

export default FooterCart;
