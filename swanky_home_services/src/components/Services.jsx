import React from 'react';
import styles from '../style';
import { window, gutter, bulb } from "../assets";


const Services = () => {
  return (
    <section className="py-20">
      <div className="text-white text-3xl md:text-4xl font-semibold text-center">Services We Offer</div>
      <hr className="my-4 border-white w-1/2 mx-auto" />
      <div className="text-white text-base md:text-lg px-4 md:px-0 leading-relaxed text-center">
        Swanky Home Services is proudly based in Orange County, CA specializing in window cleaning, gutter 
        cleaning, and holiday lighting. With a meticulous eye for detail and a commitment to outstanding customer 
        service, Swanky Home Services ensures that every job is done to perfection. 
      </div>

      <div className="row flex flex-wrap justify-between mt-14">
        <div className="flex-basis-31 bg-gray-700 rounded-lg mb-5 p-7 transition-all duration-500 hover:shadow-lg">
          <div className="text-center font-semibold text-xl mb-3 text-yellow-400">Window Cleaning</div>
          <img src={window} alt="window" className="w-[32px] h-auto mb-4" />
          <div className="text-white text-sm">
          Transform your view with our exceptional window cleaning services. Our skilled team 
          employs advanced techniques and green cleaning solutions to ensure your windows are 
          impeccably clean and streak-free. We take pride in making your home brighter and more 
          inviting, allowing the beauty of the outdoors to seamlessly merge with your indoor space.
          Enjoy the clarity and brilliance of expertly cleaned windows that enhance the charm of 
          your entire home.
          </div>
        </div>

        <div className="flex-basis-31 bg-gray-700 rounded-lg mb-5 p-7 transition-all duration-500 hover:shadow-lg">
          <div className="text-center font-semibold text-xl mb-3 text-yellow-400">Holiday Lighting</div>
          <img src={bulb} alt="bulb" className="w-[32px] h-auto mb-4" />
          <div className="text-white text-sm">
          Make your home the star of the season with our Holiday Lights Service. We specialize in 
          creating enchanting displays that capture the magic and joy of the holidays, 
          transforming your property into a breathtaking wonderland. Let us illuminate your 
          home with festive cheer, ensuring a dazzling spectacle that will delight your neighbors 
          and bring holiday spirit to your entire community.
          </div>
        </div>

        <div className="flex-basis-31 bg-gray-700 rounded-lg mb-5 p-7 transition-all duration-500 hover:shadow-lg">
          <div className="text-center font-semibold text-xl mb-3 text-yellow-400">Gutter Cleaning</div>
          <img src={gutter} alt="gutter" className="w-[32px] h-auto mb-4" />
          <div className="text-white text-sm">
          Our comprehensive gutter clearing service does more than just remove debris. We 
          prioritize protecting your home from water damage by thoroughly cleaning clogged 
          gutters and downspouts. Our meticulous approach ensures proper water flow, helping to 
          prevent expensive structural issues and maintaining the integrity of your home.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;