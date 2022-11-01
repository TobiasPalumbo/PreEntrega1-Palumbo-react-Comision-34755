import React, { useContext, useEffect, useState } from 'react';
import "./Favoritos.css"
import { Link } from 'react-router-dom';
import { FavoriteCotext } from '../../../Context/favoriteProvider';
import { TalleContex } from '../../../Context/TalleProvider';
import HeartSvg from '../../Icons/HeartSvg';

const Favoritos = () => {
  const [favShow, setfavShow] = useState(<div className="firsState-fav-wrapper" ><h4 className='firsState-fav'>You dont have favorites!</h4></div>);
  const {favorites, addTofavorites } = useContext(FavoriteCotext);
  const {setTalle} = useContext(TalleContex);
  const favoritesAux  = favorites

  useEffect(() => {
    if(favorites.length !== 0){
      const mapFav = favoritesAux.map((producto, index) => {
      let card = <div className='fav-card' key={index}>
          <span><HeartSvg clase = {"corazon-fav"} click = {() => addTofavorites(producto)} /></span>
          <span><img className='logo-card' src={producto[1].logo} alt="" srcset="" /></span>
          
          <div className='favImg-container'>
            <img className='favImg-card' src={producto[1].imagen} alt="" />
            <div className='see-more-cardfav' onClick={() => setTalle({})}>
                <Link to={`/producto/${producto[0]}`}><p>See more</p></Link>
          </div>
          </div>
          <p className='favMarc-card'>{producto[1].modelo}</p>
          
          <p className='favPrice-card'>${producto[1].precio}</p>
        </div>
        return card
        }) 
        setfavShow(mapFav)
    }else{
      setfavShow(<div className="firsState-fav-wrapper" ><h4 className='firsState-fav'>You dont have favorites!</h4></div>)
    }
  }, [favoritesAux]);
  
  return (
    <>
      <section>
        <h1 className='fav-tittle'>Your Favorites</h1>
        <div className='favorite-wrapper'>
          {favShow}
        </div>
      </section>
    </>
  );
}

export default Favoritos;
