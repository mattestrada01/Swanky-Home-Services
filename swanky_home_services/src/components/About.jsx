import React from 'react';
import { home, lex } from "../assets";


const About = () => {
  return (
    <section id="about" className="flex justify-center items-center py-40 -mt-0 sm:mt-0 mb-28">
      <div className="container mx-auto px-2">
        <div className="flex flex-col md:flex-row items-center">
          
          <div className="lg:w-1/2 flex flex-col items-center justify-center relative min-h-[600px]">
            <img 
              src={lex} 
              alt="Lex" 
              className="w-[350px] h-auto rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-200 
              absolute xl:-bottom-20 xl:left-0 xl:transform xl:-translate-y-1/2 xl:translate-x-1/3 
              sm:bottom-60 sm:left-0 sm:transform sm:translate-y-0 sm:translate-x-0"
/>
            <img 
              src={home} 
              alt="Home" 
              className="w-[350px] h-auto rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-200 
                absolute xl:top-20 xl:right-0 xl:transform xl:translate-y-1/2 xl:-translate-x-1/3 
                sm:top-60 sm:right-20 sm:transform sm:translate-y-0 sm:translate-x-0"
/>
          </div>


          <div className="lg:w-1/2 flex flex-col items-center text-center md:text-left">
            <div className="text-white text-5xl font-semibold mb-6">
              About Our Company
            </div>

                <div className="text-white text-2xl space-y-4 mb-8">
                At Swanky Home Services, our team members are what truly set us apart from other 
                home services companies. Each team member is carefully selected for their 
                expertise, dedication, and commitment to customer satisfaction. Here's what makes 
                our team outstanding
                </div> 
                
                <div className="text-white text-xl mb-4">
                    1. Experienced Professionals: Our staff consists of 
                    seasoned professionals with years of experience in window cleaning, gutter 
                    cleaning, and holiday lighting. They bring a wealth of knowledge and technical 
                    skill to every project. 
                </div>
                
                <div className="text-white text-xl mb-4">
                    2. Attention to Detail: Our team is renowned for 
                    their meticulous attention to detail. Whether it's ensuring every window is 
                    streak-free, gutters are thoroughly cleared, or holiday lights are perfectly 
                    arranged, they take pride in delivering flawless results. 
                </div>

                <div className="text-white text-xl mb-4">
                    3. Customer-Centric Approach: Customer service is at the heart of everything we do. Our team 
                    members are friendly, approachable, and always ready to go the extra mile to 
                    ensure our clients are satisfied. 
                </div>

                <div className="text-white text-xl mb-4">
                    4. Continuous Training: We invest in 
                    continuous training and development for our team. This ensures they stay 
                    up-to-date with the latest techniques, safety standards, and innovations in the 
                    home services industry. 
                </div>
                
                
                <div className="text-white text-2xl mt-4">
                    By combining expertise, a customer-focused mindset, and 
                    a dedication to quality, our team at Swanky Home Services stands out as the 
                    premier choice for home services in Orange County.
                </div>
                
                </div>
            </div>
        </div>
      </section>
    
  )
}

export default About;