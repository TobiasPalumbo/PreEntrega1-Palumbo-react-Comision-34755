import React,{  createContext, useState } from 'react';
import useCounter from '../Hooks/Count';
import Plus from '../Component/Icons/PlusSvg';
import SubtractSvg from '../Component/Icons/SubtractSvg';
import Box from '../Component/Layout/Box/Box';

const CounterContext = createContext()
const CounterProvider = (props) => {

const {count, countAdd, countSubtract} = useCounter()
const [isActive, setisActive] = useState(false);
const isActiveChange = () => {
  setisActive(current => !current)
  
}
const Counter2 = () => {
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

  return (
    <CounterContext.Provider value={{Counter2, count,countAdd,countSubtract , isActive, isActiveChange, setisActive}}>
      {props.children}
    </CounterContext.Provider>
  );
}

export{CounterProvider,CounterContext};
