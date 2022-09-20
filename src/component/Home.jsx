import React from 'react';
import HomeImg from "../image/imgHome.svg"
import "../styles/Home.css"
const Home = () => {
  return (
    <div className='home-container'>
      <div>
        <h2>Move your feet</h2>
        <p className='mb-1'><strong> Do your job</strong></p>
        <a href="" className='button'>Explore Products</a>
      </div>
      <img src={HomeImg} alt="" />
    </div>
  );
}

export default Home;
