import React,{ useState } from 'react';

const useCoulor = () => {
  const [isActive, setisActive] = useState(false);
  const handleClick = () => setisActive(current => !current)
  return ({
    handleClick,
    isActive
  });
}

export default useCoulor;
