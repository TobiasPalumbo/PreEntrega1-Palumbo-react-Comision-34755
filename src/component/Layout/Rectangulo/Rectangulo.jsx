import React from 'react';
import "./Rectangulo.css"
const Rectangulo = ({src, text, alt, clas, click}) => {
  return (
    <>
     <div className = {clas} onClick = {click}>
      <img src = {src} alt={alt} />
      <span>{text}</span>
     </div> 
    </>
  );
}

export default Rectangulo;
 