import React from 'react';
import ArrowSvg from "../../Icons/Arrow"
const TitleIncio = () => {
  return (
    <>
      <div className='title-container'>
            <div>
              <h4 className='title'>
                summer collection 2022
              </h4>
              <div className='button pa-center'>
                Show more
                <ArrowSvg className="arrow-svg" />
              </div>
            </div> 
          </div>
    </>
  );
}

export default TitleIncio;
