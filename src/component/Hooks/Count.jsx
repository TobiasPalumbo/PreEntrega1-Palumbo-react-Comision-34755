import React,{ useState } from 'react';

 const useCounter = () =>{
  const [count, setcount] = useState(1);
  const countAdd = () => setcount(cont => cont + 1 )
  const countSubtract = () => count > 1 ? setcount(cont => cont - 1) : null 

  return{
    count,
    countAdd,
    countSubtract
  }
 }

export default useCounter;
