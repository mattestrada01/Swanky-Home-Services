import React from 'react';
import { people01, people02, people03, stars } from "../assets";

const Reviews = () => {
  const reviewLinks = [
    "https://www.google.com/maps/place/Swanky+Home+Services/@33.6409484,-118.1100381,10z/data=!3m1!4b1!4m6!3m5!1s0x832a2f7bdee52541:0xcee1b4e07f3237be!8m2!3d33.640814!4d-117.7803964!16s%2Fg%2F11y3m7wrb7?entry=ttu",
    "https://www.google.com/maps/place/Swanky+Home+Services/@33.6409484,-118.1100381,10z/data=!3m1!4b1!4m6!3m5!1s0x832a2f7bdee52541:0xcee1b4e07f3237be!8m2!3d33.640814!4d-117.7803964!16s%2Fg%2F11y3m7wrb7?entry=ttu",
    "https://www.google.com/maps/place/Swanky+Home+Services/@33.6409484,-118.1100381,10z/data=!3m1!4b1!4m6!3m5!1s0x832a2f7bdee52541:0xcee1b4e07f3237be!8m2!3d33.640814!4d-117.7803964!16s%2Fg%2F11y3m7wrb7?entry=ttu",
  ];

  return (
    <section id="reviews" className="testimonial py-12 mb-20">
      <h1 className="text-3xl md:text-4xl font-semibold mb-2 text-blue-800 text-center">
        <span className="underline">What Our Clients Have to Say</span>
      </h1>
      <div className="text-lg md:text-xl mb-10 text-white text-center mt-8 mb-20">
        We prioritize our clients' needs and satisfaction above all else. Our commitment goes beyond business; we strive to 
        build lasting relationships and ensure every client feels valued and cared for.
      </div>

      <div className="flex flex-wrap justify-center mb-10">
        <a href={reviewLinks[0]} target="_blank" rel="noopener noreferrer" className="sm:w-full md:w-[44%] bg-red-200 transition-transform duration-800 hover:shadow-xl hover:shadow-gray-500 rounded-lg mb-5 p-10 mx-5 flex cursor-pointer">
          <img src={people01} alt="User 1" className="h-20 w-20 ml-1 mr-6 rounded-full" />
          <div>
            <p className="text-left text-gray-600">
              I work too much and neglected my home for a bit, but Mike helped me transform it 
              into a sanctuary again. They tackled every corner of my home with precision and care. They left the windows spotless 
              and even helped me take down some leftover holiday lights.
              They were on time and they're super affordable, making the whole process smooth 
              and stress-free. Highly recommend them to anyone :) 
            </p>
            <h3 className="text-left font-bold text-xl mr-2">- Mathew E. </h3>
            <img src={stars} alt="stars" className="h-[24px] w-auto" />
          </div>
        </a>

        <a href={reviewLinks[1]} target="_blank" rel="noopener noreferrer" className="sm:w-full md:w-[44%] bg-red-200 transition-transform duration-800 hover:shadow-xl hover:shadow-gray-500 rounded-lg mb-5 p-10 mx-5 flex cursor-pointer">
          <img src={people02} alt="User 2" className="h-20 w-20 ml-1 mr-6 rounded-full" />
          <div>
            <p className="text-left text-gray-600">
              Michael was super friendly and his whole team was on time, the job was done very fast and 
              I love having my whole house clean! It was a great experience and I loved working with them.
               I highly recommend them for any of your house needs. I was really nervous to do the windows 
               myself due to height, but Swanky Home Services helped reassure me and did an amazing job!
            </p>
            <h3 className="text-left font-bold text-xl mr-2">- Emulen B.</h3>
            <img src={stars} alt="stars" className="h-[24px] w-auto" />
          </div>
        </a>
      </div>

      <div className="flex flex-wrap justify-center">
        <a href={reviewLinks[2]} target="_blank" rel="noopener noreferrer" className="md:w-[45%] bg-red-200 rounded-lg transition-transform duration-800 hover:shadow-xl hover:shadow-gray-500 mb-5 p-10 mx-4 flex cursor-pointer hidden md:flex">
          <img src={people03} alt="User 3" className="h-20 w-20 ml-1 mr-6 rounded-full" />
          <div>
            <p className="text-left text-gray-600">
              We have a 2-story home, so our windows are so hard to reach and we've been ignoring it
              because of the spiders too. SO SCARY, but I found Mike and Lex who were perfect for this job.
              They got it done like it was nothing! Definitely will have them back
            </p>
            <div className="flex items-center mt-4">
              <h3 className="text-left font-bold text-xl mr-2">- Patricia V.</h3>
              <img src={stars} alt="stars" className="h-[24px] w-auto" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Reviews;
