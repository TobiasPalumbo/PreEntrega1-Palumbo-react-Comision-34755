import React from 'react';
import ArrowSvg from './Arrow';
const Inicio = () => {
    return (
      <div>
        <div className='container-head'>
          <img className='w-100' src={ require("../image/back.jpg") } alt="" />
          <div className='title'>
          summer collection 2022
          </div>
          <div className='button'>
            Show more
            <ArrowSvg className="arrow-svg" />
          </div>
          </div>
      </div>
    );
}

export default Inicio;
