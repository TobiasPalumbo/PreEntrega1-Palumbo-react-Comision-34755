import React,{ useState } from 'react';
import useCounter from "../Hooks/Count"
import Coulor from '../Hooks/Coulor';
import Plus from '../Icons/PlusSvg';
import SubtractSvg from '../Icons/SubtractSvg';
import "./Counter.css"
import Box from '../Box/Box';

const Counter = () => {

  const {count, countAdd, countSubtract} = useCounter()
  
  const [colorButtom, setcolorButtom] = useState(false);
  

  return (
    <>
     <div className="counter-wrapper">
      <Box click={countAdd} class='add-counter btn' input={<Plus className="svg-counter" />}  />
      <Box className='input-counter' input={count} />
      <Box click={countSubtract} class='subtract-counter btn' input={<SubtractSvg className="svg-counter" />} />
     </div> 
    </>
  );
}

export default Counter;
