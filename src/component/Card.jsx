import React from 'react';
import "../styles/CardProduct.css"
import Plus from './PlusSvg';



const Card = (props) => {
  return (
    <div className='card-container'>
        <div className='card'>
          <img  
          className='img-product' 
          src={ require("../image/airforce1.webp") } 
          alt="" />
          <p className='title-product'>

          </p>
          <p className='marca-product'>
          
          </p>
          <span className='price-product'>
            <span>stock</span>
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
