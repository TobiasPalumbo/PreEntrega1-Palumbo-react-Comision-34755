import React, { useContext, useEffect, useState } from 'react';
import Box from "../Box/Box"
import Counter from "../Counter/Counter"
import "./ShowInCart.css";
import Plus from '../../Icons/PlusSvg';
import { AddToCartContext } from '../../../Context/addToCartProvider';
import { TalleContex } from '../../../Context/TalleProvider';
import useCounter from '../../../Hooks/Count';



const ShowInCart = (props) => 
{
  const {talle} = useContext(TalleContex);
  const {deleteToCart, cart, setCart, settotalDeProductos} = useContext(AddToCartContext);
  const {count, countAdd, countSubtract,setcount} = useCounter()
  const setCountAdd = (id, cantidadMax) => {
    const cartAux = cart
    countAdd(cantidadMax)
    let index = cart.findIndex(prod => prod.producto[0] === id)
    let newCount = count + 1
    cartAux[index].cant = newCount
    setCart(cartAux)
    let totalCart = cart.reduce((acc, prod) => acc +  prod.cant, 0)
    settotalDeProductos(totalCart)
  }
  const setCountSubtract = (id) => {
    const cartAux = cart
    countSubtract()
    let index = cart.findIndex(prod => prod.producto[0] === id)
    let newCount 
    newCount = count - 1 
    cartAux[index].cant = newCount === 0 ? count : newCount
    setCart(cartAux)
    let totalCart = cart.reduce((acc, prod) => acc +  prod.cant, 0)
    settotalDeProductos(totalCart)
  }
  useEffect(() => {
    setcount(props.cant)
  }, []);
  
  return (
    <div className='showCart-wrapper'>
      <div className='description-wrapper'>
        <img src={props.img} alt="" />
        <div>
          <h4>{props.title}</h4>
          <p>{props.marca}</p>
        </div>
      </div>
      <Box 
      input = {props.talle}   />
      <div>
      <Counter 
      countAdd = {() => setCountAdd(props.id, talle.stock)}
      countSubtract = {() => setCountSubtract(props.id)}
      count = {count} />
      </div>
      <Box 
      click = {()=> deleteToCart(props.producto)} 
      class = "remove-box btn" 
      input = {<Plus className="deleteSvg"/>} />
      <span>${props.price * count}</span>
    </div>
  );
}

export default ShowInCart;
