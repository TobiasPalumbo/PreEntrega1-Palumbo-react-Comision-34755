import React from 'react';
import { Link } from 'react-router-dom';
import "./CardProduct.css"
import Plus from '../../Icons/PlusSvg';
import HeartSvg from '../../Icons/HeartSvg';
const Card = (props) => {
  return (
    <div className={`card-container ${props.class}`} >
        <div className={`card ${props.classCard}`}>
          <HeartSvg
          width="30px"
          />
          <div className='img-container'>
            <img  
              className='img-product' 
              src={props.imagen} 
              alt="" />
              <div className='see-more-card'>
                <Link to={`/producto/${props.idLink}`}><p>See more</p></Link>
              </div>
          </div>
          <div className='text-container'>
            <p className='title-product'>
            {props.modelo}
          </p>
          <div className='marca-product'>
          {props.marca} 
          <img className='logo-card' src={props.logo}
          alt="logo" />
          </div>
          <span className='price-product'>
            ${props.precio} <span>on stock</span> <span className='cantidad-card'>({props.cantidad})</span>
          </span>
          <button className='add-btn'>
            Add to cart  
            <Plus  className="svg-plus"/>
          </button>
          </div>
        </div>
    </div>
);
}

export default Card;
