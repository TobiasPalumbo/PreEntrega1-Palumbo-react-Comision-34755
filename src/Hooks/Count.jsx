import React,{ useState } from 'react';



 const useCounter = () =>{


  const [count, setcount] = useState(1);
  const countAdd = (cantidadMax) => {
    if(cantidadMax === undefined){
      return count <= 19 ? setcount(cont => cont + 1 ) : null
    }else{
      return count <= cantidadMax - 1 ? setcount(cont => cont + 1 ) : null
    }
  }

  const countSubtract = () => count > 1 ? setcount(cont => cont - 1) : null 

  return({
    count,
    setcount,
    countAdd,
    countSubtract
  })

 }

export default useCounter;
