import React, { useState } from 'react';
import { phone } from "../assets";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z58a3nk', 'template_niodenk', e.target, 'wLEYks8rNw6-BI8OS')
      .then((result) => {
        console.log(result.text);
        setIsSent(true); 
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <section id="contact" className="flex flex-col items-center py-6 mt-10 mb-20">
      <div className="w-full max-w-6xl flex flex-wrap">
        <div className="w-full md:w-1/2 p-6">
          <h1 className="rounded-xl text-4xl font-semibold text-white mb-4 text-center">Contact Us</h1>
          <hr className="mb-6 border-white w-1/2 mx-auto" />
          <div className="bg-gray-700 rounded-lg p-10 shadow-xl">
            <form  onSubmit={sendEmail}>

                

                <div className="mb-4">
                  <label htmlFor="name" className="block text-white">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full p-2 mt-2 rounded bg-gray-900 text-white"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-white">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    required
                    className="w-full p-2 mt-2 rounded bg-gray-900 text-white"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-white">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter your subject"
                    required
                    className="w-full p-2 mt-2 rounded bg-gray-900 text-white"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-white">Message</label>
                  <textarea
                    name="message"
                    placeholder="Please Leave a Return Phone Number"
                    rows="8"
                    required
                    className="w-full p-2 mt-2 rounded bg-gray-900 text-white"
                  ></textarea>
                </div>

                <input
                  type="submit"
                  value="Free Estimate!"
                  className="w-full py-2 bg-transparent text-yellow-400 cursor-pointer 
                  font-semibold rounded border-2 hover:bg-yellow-400 hover:text-black 
                  hover:border-white transition duration-300 transform hover:scale-105"
                >
                </input>

            </form>
            {isSent && <div className="text-green-500 mt-4">Message sent successfully!</div>}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6">
          <div className="text-2xl md:text-4xl font-semibold text-white mb-4">
            We can't wait to hear from you!
          </div>
          <div className="text-white text-center text-xl mb-4">
            Fill out our contact form, and we will get back to you promptly or reach out
            through the methods below:
          </div>
          <a href="tel:714-330-3702" className="flex items-center justify-between w-3/4 max-w-xs cursor-pointer mb-2 mr-8">
            <img src={phone} alt="phone" className="w-30 h-20 mt-4" />
            <div className="text-gray-700 underline font-bold text-left text-3xl">
              714-330-3702
            </div>
          </a>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106060.41676840428!2d-118.10128335463185!3d33.828102621097045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc925c54d5f7cf%3A0xdea6c3618ff0d607!2sOrange%20County%2C%20CA!5e0!3m2!1sen!2sus!4v1717633372722!5m2!1sen!2sus"              width="80%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-10 rounded-lg shadow-xl"
            ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
