import React from 'react';
import bannerImg from "../assets/banner.png";
import About from '../componets/About';
import Hero from '../componets/Hero';
import Properties from '../componets/Properties';

const Home = () => {
  return (
    <main>
      <Hero/>
      <About/>
      <Properties/>
      <div className='max-padd-container py-16 overflow-x-hidden'>
        <img src={bannerImg} alt="" />
      </div>
    </main>
  )
}

export default Home
