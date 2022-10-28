import React,{ useContext, useState } from 'react';
import Plus from '../../Icons/PlusSvg';
import SubtractSvg from '../../Icons/SubtractSvg';
import "./Counter.css"
import Box from '../Box/Box';
import { TalleContex } from '../../../Context/TalleProvider';

const Counter = ({count, countAdd, countSubtract}) => {
 
  return (
    <>
     <div className="counter-wrapper">
      <Box click={countSubtract} class='subtract-counter btn' input={<SubtractSvg className="svg-counter" />} />
      <Box className='input-counter' input={count} />
      <Box click={countAdd} class='add-counter btn' input={<Plus className="svg-counter" />}  />
     </div> 
    </>
  );
}

export default Counter;
