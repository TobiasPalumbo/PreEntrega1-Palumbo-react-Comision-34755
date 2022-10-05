import React from 'react';
import HomeProducts from './HomeProducts';
import "../styles/ProductoContainer.css"
const ProductContainer = () => {
    return (
    <>
      <section>
        <div className='product-container'>
          <HomeProducts />
        </div>
     </section>
  </> 
);
}

export default ProductContainer;
