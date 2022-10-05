import React,{ useState } from 'react';

const Coulor = () => {
  const [isActive, setisActive] = useState(false);
  const handleClick = () => setisActive(current => !current)
  return (
    handleClick()
  );
}

export default Coulor;
