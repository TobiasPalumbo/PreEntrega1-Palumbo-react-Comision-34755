import React from 'react';
import ProductContainer from '../../Content/ProductContainer/ProductContainer';
import TitleIncio from '../../Layout/TitleIncio/TitleIncio';
const Inicio = () => {
    return (
      <>
        <div className='container-head'>
          <img className='w-100' src="./image/back.jpg" alt="home-sneakers" />
          <TitleIncio />
        </div>
        <ProductContainer />
      </>
    );
}

export default Inicio;
