import React from 'react';
import styles from '../style';
import { cleaning } from "../assets";

const Services = () => {
  return (
    <section id="services" className="py-40 sm:mb-0 mb-20">
      <div className="text-white text-3xl md:text-4xl font-semibold text-center">Services We Offer</div>
      <hr className="my-4 border-white w-1/2 mx-auto" />
      <div className="text-white text-base md:text-lg px-4 md:px-0 leading-relaxed text-center">
        Swanky Home Services is proudly based in Orange County, CA specializing in window cleaning, gutter 
        cleaning, and holiday lighting. With a meticulous eye for detail and a commitment to outstanding customer 
        service, Swanky Home Services ensures that every job is done to perfection. 
      </div>

      <div className="flex flex-wrap justify-center mt-24">
        <div className="w-full md:w-1/3 p-3">
          <div className="bg-gray-700 rounded-3xl mb-5 p-7 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-400 cursor-pointer flex flex-col h-full">
            <div className="text-center font-semibold text-2xl mb-3 text-yellow-400">Window Cleaning</div>
            <div className="text-white text-md flex-grow">
              Transform your view with our exceptional window cleaning services. Our skilled team 
              employs advanced techniques to ensure your windows are 
              impeccably clean and streak-free. We take pride in making your home brighter, 
              allowing the beauty of the outdoors to seamlessly merge with your indoor space.
              Enjoy the clarity and brilliance of expertly cleaned windows that enhance the charm 
              of your entire home.
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-3">
          <div className="bg-gray-700 rounded-3xl mb-5 p-7 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-400 cursor-pointer flex flex-col h-full">
            <div className="text-center font-semibold text-2xl mb-3 text-yellow-400">Holiday Lighting</div>
            <div className="text-white text-md flex-grow">
              Make your home the star of the season with our Holiday Lights Service. We specialize in 
              creating enchanting displays that capture the magic and joy of the holidays, 
              transforming your property into a breathtaking wonderland. Let us illuminate your 
              home with festive cheer, ensuring a dazzling spectacle that will delight your neighbors 
              and bring holiday spirit to your entire community.
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-3">
          <div className="bg-gray-700 rounded-3xl mb-5 p-7 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-400 cursor-pointer flex flex-col h-full">
            <div className="text-center font-semibold text-2xl mb-3 text-yellow-400">Gutter Cleaning</div>
            <div className="text-white text-md flex-grow">
              Our comprehensive gutter clearing service does more than just remove debris. We 
              prioritize protecting your home from water damage by thoroughly cleaning clogged 
              gutters and downspouts. Our meticulous approach ensures proper water flow, helping to 
              prevent expensive structural issues and maintaining the integrity of your home.
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-14 -mb-60 sm:mb-0">
          <video className="w-[800px] h-[500px] rounded-xl shadow-2xl shadow-black" controls>
            <source src={cleaning} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    </section>
  );
};

export default Services;
