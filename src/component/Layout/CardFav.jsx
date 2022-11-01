import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteCotext } from '../../Context/favoriteProvider';
import { TalleContex } from '../../Context/TalleProvider';
import HeartSvg from '../Icons/HeartSvg';
  
const CardFav = ({props}) => {
  const {favorites, addTofavorites } = useContext(FavoriteCotext);
  const {setTalle} = useContext(TalleContex);
  const favoritesAux  = favorites
  return (
    <>
      <div className='fav-card'>
          <HeartSvg clase = {"corazon-fav"} click = {() => addTofavorites(props.producto)} />
          <img className='logo-card' src={props.logo} alt="" />
          <div className='contain-favImg'>
            <img 
            className='favImg-card' 
            src={props.imagen} 
            alt="" />
            <div className='see-more-cardfav' onClick={() => setTalle({})}>
                <Link to={`/producto/${props.producto[0]}`}><p>See more</p></Link>
            </div>
          </div>               
          <p className='favMarc-card'>{props.modelo}</p>
          
          <p className='favPrice-card'>${props.precio}</p>
        </div>
    </>
  );
}

export default CardFav;
