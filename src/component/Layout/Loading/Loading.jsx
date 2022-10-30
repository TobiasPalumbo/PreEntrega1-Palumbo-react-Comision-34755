import React from 'react';
import "./Loading.css"
import ReactLoading from 'react-loading'
const Loading = ({type, color }) => {
  return (
    <div className='loading-wrapper'>
      <h1>CARGANDO</h1>
     <ReactLoading className='loading' type={type} color={color} height={667} width={375} /> 
    </div>
  );
}

export default Loading;
