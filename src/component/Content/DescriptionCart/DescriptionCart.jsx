import React from 'react';

const DescriptionCart = ({cartShow}) => {
  return (
    <>
    <section>
      <div className="cart-wrapper">
        <div className="cart">
          <div className="description-cart">
            <h4>Description</h4>
            <div className='sizeQuantity-wrapper'>
              <div className='size-cart'>Size</div>
              <div className="quantity-cart">Quantity</div>
            </div>
            <div className='removePrice-wrapper'>
              <span className="remove-cart">Remove</span>
              <span className="price-cart">Price</span>
            </div>
          </div>
          <div className="content-cart ">
            {cartShow}
          </div>
          <button>HOLAAAAAAAAAAAAAA</button>
        </div>
      </div>
    </section> 
  </>
  );
}

export default DescriptionCart;
