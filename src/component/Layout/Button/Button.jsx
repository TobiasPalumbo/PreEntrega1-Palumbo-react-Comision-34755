import React, { useContext } from 'react';
import { AddToCartContext } from '../../../Context/addToCartProvider';
import { CounterContext } from '../../../Context/CounterProvider';
import { TalleContex } from '../../../Context/TalleProvider';
import Plus from '../../Icons/PlusSvg';
const Button = (props) => {
  const {addToCart} = useContext(AddToCartContext);
  const {setTalle, talle} = useContext(TalleContex);
  
  return (
    <>
     <button className={props.class} onClick={() => addToCart(props.producto,props.cantidad,talle, setTalle)}>
            {props.children} 
            <Plus  className="svg-plus"/>
     </button> 
    </>
  );
}

export default Button;
