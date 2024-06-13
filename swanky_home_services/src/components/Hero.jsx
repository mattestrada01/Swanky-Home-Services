import React from 'react';
import { landing } from "../assets";
import styles from '../style';

const Hero = () => {

  const estimateLink = [
    "https://clienthub.getjobber.com/client_hubs/0825649d-9dfd-42b9-9e74-3daabadcd37f/public/work_request/new?source=social_media"
  ];


  return (
    <section id="hero" style={{ position: 'relative' }}>
      <img src={landing} alt="Landing" style={{ width: '100%', height: 'auto' }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div className="flex flex-col items-center justify-center relative text-center p-6 z-10 ss:mb-10 md:mb-30">
          <h1 className="text-white text-lg ss:text-4xl md:text-6xl font-bold md:mb-12 mb-2">Swanky Home Services</h1>
          <h2 className="text-white text-md ss:text-2xl md:text-4xl font-semibold mb-1 sm:mb-4">Elevate Your Home’s Appeal</h2>
          <p className="text-white text-sm ss:text-xl md:text-2xl sm:mb-4 mb-2">
            Transform your living space with our top-rated window cleaning, gutter maintenance, and holiday decorating services.
          </p>
          <a href={estimateLink} target="_blank" rel="noopener noreferrer" className="bg-yellow-500 text-black font-semibold py-1 sm:py-2 px-1 sm:px-4 rounded md:text-xl sm:text-md text-xs border-2 border-transparent hover:bg-yellow-400 hover:border-white transition duration-300">
            Free Estimate
          </a>

        </div>
      </div>
    </section>
  );
}

export default Hero;
