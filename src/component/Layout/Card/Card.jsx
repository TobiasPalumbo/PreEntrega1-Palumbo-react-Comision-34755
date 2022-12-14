import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./CardProduct.css"
import HeartSvg from '../../Icons/HeartSvg';
import useCoulor from '../../../Hooks/Coulor';
import { TalleContex } from '../../../Context/TalleProvider';
import { FavoriteCotext } from '../../../Context/favoriteProvider';
const Card = (props) => {
  const {isActive, setisActive}= useCoulor()
  const {setTalle} = useContext(TalleContex);
  const {addTofavorites} = useContext(FavoriteCotext)
  const {favorites} = useContext(FavoriteCotext)
  const favAux = favorites

  const handleClickHeart = (producto) =>{
    const indFav = favAux.findIndex(prod => prod[0] === props.producto[0])
    if(indFav === -1){
      setisActive(true)
    }else{
      setisActive(false)
    }
   
    addTofavorites(producto)
  }

  return (
    <div className={`card-container ${props.class}`} >
        <div className={`card ${props.classCard}`}>
          <HeartSvg
          width = "30px"
          producto = {props.producto}
          click = {() => handleClickHeart(props.producto)}
          clase = {`heart-svg ${isActive || favAux.findIndex(prod => prod[0] === props.producto[0]) != -1   ? "bg-active" : ""}`}
          />
          <div className='img-container'>
            <img  
              className='img-product' 
              src={props.imagen} 
              alt="" />
              <div className='see-more-card' onClick={() => setTalle({})}>
                <Link to={`/producto/${props.idLink}`}><p>See more</p></Link>
              </div>
          </div>
          <div className='text-container'>
            <p className='title-product'>
            {props.modelo}
          </p>
          <div className='marca-product'>
          {props.marca} 
          <img 
          className='logo-card' 
          src={props.logo}
          alt="logo" />
          </div>
          <span className='price-product'>
            ${props.precio}  
            <span> on stock</span>
          </span>
          </div>
        </div>
    </div>
);
}

export default Card;
