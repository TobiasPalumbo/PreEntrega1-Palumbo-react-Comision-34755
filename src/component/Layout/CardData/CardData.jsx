import React, { useContext, useEffect } from 'react';
import Talles from '../../Content/Talles/Talles';
import Counter from '../Counter/Counter';
import "./CardData.css";
import Button from '../Button/Button';
import useCounter from '../../../Hooks/Count';
import useCoulor from "../../../Hooks/Coulor"
import { TalleContex } from '../../../Context/TalleProvider';
import SizeGuid from '../SizeGuid/SizeGuid';
import Plus from '../../Icons/PlusSvg';
import Rectangulo from '../Rectangulo/Rectangulo';

const CardData = (props) => {
  const {handleClick, isActive} = useCoulor()
  const {talle, talleSelect, setTalle} = useContext(TalleContex);

  const {count, countAdd, countSubtract, setcount} = useCounter()
  
  useEffect(() => {
    if(talle.stock <= 0){
      setcount(0)
    }else{
      setcount(1)
    }
  }, [talle]);
  return (
    <>
     <section>
      <div className = 'conten-cardData'>
        <div className = "wrapper-cardData">
          <div className = "img-wrapper">
            <img 
            className = 'img-card-data' 
            src = {props.img} 
            alt = {props.alt} />
          </div>
      <div 
      className="info-wrapper">
        <div className = "wrapper-title-info">
          <h1
          className = "title-info">
          {props.title}
          </h1>
          <h3>{props.marca}</h3>
        </div>
          <div 
          className = "price-info">
            From ${props.price}
           <br />
              or ${ parseInt(props.price / 24) * 1.25 }/mo.per month for 24 mo.
          </div>
          <div 
          className = "size-info">
            <h4 className = 'title-size'>Size</h4>
            <div className = "size-wrapper">
             <Talles />
            </div>
          </div>
          <div className='wrapper-size-details'>
            <Rectangulo
            clas = "size-guide-text" 
            click = {() => handleClick() }
            src = {"https://topperio.vtexassets.com/assets/vtex/assets-builder/topperio.store/1.0.14/icons/rule-icon___24dd3b05a93bc33cb06c5f3a59a85817.svg"}
            text = "See size guide"
            alt = "guide" />
            {isActive 
            ? <SizeGuid>
                <div onClick = {() => handleClick() }>
                  <Plus class = "cross"  fill="#000" />
                </div>
              </SizeGuid> 
            : null}
          </div>
          <div className = 'text-stock'>
            <p>Available stock: 
              {talle.stock <= 0 
            ? <span className='out-stock'> out of stock</span>  
            : talle.stock }</p>
          </div>
          <div className = "wrapper-btn">
            <Counter
            count = {count}
            countAdd = {() => countAdd(talle.stock)}
            countSubtract = {countSubtract} />
            <Button 
            class = 'btn-cart' 
            producto = {props.producto} 
            cantidad = {count} 
            children = "Add to cart" />
          </div>
          <Rectangulo
          clas = "wrapeper-rect react-add" 
          src = {"https://topperio.vtexassets.com/assets/vtex/assets-builder/topperio.store/1.0.14/icons/truck-icon___72c371cbd1f9f7d80dba44bb7c5411cc.svg"}
          alt = "trunk"
          text = "Free Shipping" />
          <Rectangulo
          clas = "wrapeper-rect react-add" 
          src = {"https://topperio.vtexassets.com/assets/vtex/assets-builder/topperio.store/1.0.14/icons/card-icon___edbf37fb2a7922c5b6a7a60fb7083ad2.svg"}
          alt = "card"
          text = "Up to 24 months" />
          <Rectangulo
          clas = "wrapeper-rect react-add" 
          src = {"https://topperio.vtexassets.com/assets/vtex/assets-builder/topperio.store/1.0.14/icons/return-icon___4843baad96b4af5d6ee4ae91d31e391c.svg"}
          alt = "arrows"
          text= "Free first exchange or return" />
          </div>
        </div>
      </div>
     </section>
    </>
  );
}

export default CardData;
