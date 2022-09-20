import React from 'react';
import stock from './Product';
import "../styles/CardProduct.css"
import Plus from './PlusSvg';
const Card = (props) => {
  return (
    <div className='card-container'>
        <div className='card'>
          <img  
          className='img-product' 
          src={ require("../image/airforce1.webp") } 
          alt={ stock[props.id].modelo } />
          <p className='title-product'>
            { stock[props.id].modelo }
          </p>
          <p className='marca-product'>
            { stock[props.id].marca }
          </p>
          <span className='price-product'>
            ${ stock[props.id].precio } { stock[props.id].cantidad === 0 ? "out of " : "on" } <span>stock</span>
          </span>
          <button className='add-btn'>
            Add to cart  
            <Plus  className="svg-plus"/>
          </button>
        </div>
    </div>
);
console.log(stock[props.id].imagen)
}

export default Card;
