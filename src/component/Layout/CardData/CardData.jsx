import React from 'react';
import Box from '../Box/Box';
import Talles from '../../Content/Talles';
import "./CardData.css";
const CardData = (props) => {
  return (
    <>
     <section>
      <div className='conten-cardData'>
        <div className="wrapper-cardData">
          <div className="img-wrapper">
            <img className='img-card-data' 
            src={props.img} 
            alt={props.alt} />
          </div>
      <div 
      className="info-wrapper">
        <div className="wrapper-title-info">
          <h1
          className="title-info">
          {props.title}
          </h1>
          <h3>{props.marca}</h3>
        </div>
        <div 
        className="price-info">
          {props.price}
        </div>
        <div 
        className="size-info">
          <h4 className='title-size'>Size</h4>
          <div className="size-wrapper">
            <Talles />
          </div>
        </div>
        <div>
          <p>Available stock: {props.cantidad}</p>
        </div>
        <div className="wrapper-btn">
          <button className='btn-cart'>Add to cart</button>
        </div>
        </div>
        </div>
      </div>
     </section>
    </>
  );
}

export default CardData;
