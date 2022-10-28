import React, { useContext, useEffect, useState } from 'react';
import { AddToCartContext } from '../../../Context/addToCartProvider';
import { updateProducto } from '../../../utils/firebase';
import ShowInCart from '../../Layout/ShowInCart/ShowInCart';
import FooterCart from '../FooterCart/FooterCart';
import "./Carrito.css"
const Carrito = () => {
  const [cartShow, setcartShow] = useState(
  <div className='init-state'>
    <h3 className='init-state-title'>
      Your cart is empty! 
    </h3>
  </div>
  )

  const {cart} = useContext(AddToCartContext);
  const cartAuX = cart
  const [total, setTotal] = useState(0);

  console.log(cart)
  let init = 0
  useEffect(() => {   
        if(cart.length !=0){
           const mapCart = cart.map((prod, index)=>{
            init +=prod.producto[1].precio * prod.cant
            let a = <ShowInCart
            key = {index}
            id = {prod.producto[0]}
            img = {prod.producto[1].imagen}
            title = {prod.producto[1].modelo}
            talle = {prod.talle.talle}
            cant = {prod.cant}
            marca = {prod.producto[1].marca}
            price = {prod.producto[1].precio}
            producto = {prod}
            />
           return a
       })
        setcartShow(mapCart)
        }else{
          setcartShow(
          <div className='init-state'>
            <h3 className='init-state-title'>
              Your cart is empty! 
            </h3>
          </div>
          )}
  },[cartAuX]);
  return (
    <>
      <section>
        <div className="cart-wrapper">
          <div className="cart">
            <div className="description-cart">
              <h4>Description</h4>
              <div className='sizeQuantity-wrapper'>
                <div className='size-cart'>Size</div>
                <div className="quantity-cart">Quantity</div>
              </div>
              <div className='removePrice-wrapper'>
                <span className="remove-cart">Remove</span>
                <span className="price-cart">Price</span>
              </div>
            </div>
            <div className="content-cart ">
              {cartShow}
            </div>
            {cart.length != 0 
            ? <FooterCart />
            : null}
          </div>
        </div>
      </section> 
    </>
  );
}

export default Carrito;
