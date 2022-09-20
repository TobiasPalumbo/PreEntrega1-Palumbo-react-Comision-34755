import React from 'react';
import Card from './Card';
import "../styles/ProductoContainer.css"
const ProductContainer = () => {
    return (
    <>
      <section>
        <div className='product-container'>
          <Card id = {0} />
          <Card id = {0} />
          <Card id = {0} />
          <Card id = {0} />
        </div>
     </section>
  </> 
);
}

export default ProductContainer;
