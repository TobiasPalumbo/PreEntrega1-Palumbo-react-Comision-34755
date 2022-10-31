import React, { useState } from 'react';
import { createContext } from 'react';
const FavoriteCotext = createContext()
const FavoriteProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const addTofavorites = (producto) => {
    const favoritesAux = favorites
    const indexFav = favoritesAux.findIndex(prod => prod[0] === producto[0])
    console.log(producto)
    if(indexFav === -1){
      favoritesAux.push(producto)
    }
    else if(indexFav !== -1){
      favoritesAux.splice(indexFav, 1)
    }
    setFavorites(structuredClone(favoritesAux))

  }

  return (
    <FavoriteCotext.Provider value={{addTofavorites, favorites}}>
      {props.children}
    </FavoriteCotext.Provider>
  );
}

export {FavoriteProvider, FavoriteCotext}
