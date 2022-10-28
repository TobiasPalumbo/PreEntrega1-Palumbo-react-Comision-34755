import React, { useState } from 'react';
import { createContext } from 'react';

const TalleContex = createContext()

const TalleProvider = (props) => {
  
  const [talle, setTalle] = useState(0)

  const talleSelect =  (prodId, size) =>{ 
    let prod = {prodId, size}
    console.log(prod)
    setTalle(prod)
    console.log(talle)
  } 
  return (
    <TalleContex.Provider value={{talleSelect, setTalle, talle}}>
      {props.children}
    </TalleContex.Provider>
  );
}

export {TalleProvider, TalleContex};
