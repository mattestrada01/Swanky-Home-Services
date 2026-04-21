import styles from "../style";
import { logo } from "../assets";
import { socialMedia } from "../constants";

const Footer = () => {
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section className={`${styles.flexCenter} mb-10 mt-8 flex-col w-full`}>
      <div className={`${styles.flexStart} mb-4 w-full`}>
        <div className="flex-[1] flex flex-row justify-start mr-10">
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleLogoClick(); }}>
            <img
              src={logo}
              alt="logo"
              width={266}
              height={72}
              className="w-[266px] h-[72.14px] object-contain cursor-pointer"
            />
          </a>
          <p className={`text-gray-300 mt-6 ml-4 sm:ml-20 max-w-[312px] sm:whitespace-nowrap font-poppins`}>
            Dedicating our craft to making your home spotless.
          </p>
        </div>
      </div>

      <div className="w-full pt-6 border-t-[1px] border-t-[#3F3E45] flex flex-col"> 
        <div className="w-full flex justify-between items-center md:flex-row flex-col">
          <p className="font-poppins font-normal text-center text-xs leading-[27px] text-white">
            Copyright Ⓒ Swanky Home Services. All Rights Reserved.
          </p>

          <div className="flex flex-row md:mt-0 mt-6">
            {socialMedia.map((social, index) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3"
              >
                <img
                  src={social.icon}
                  alt={social.id}
                  width={21}
                  height={21}
                  className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                    index !== socialMedia.length - 1 ? "mr-0" : "mr-0"
                  }`}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full mt-8">
          <p className="font-poppins font-normal text-xs text-gray-400 leading-[22px] text-justify md:text-left">
            <span className="text-white block mb-2">Privacy Policy</span>
            SMS Policy: By signing up via text, you agree to receive recurring automated marketing messages, including cart reminders, at the phone number provided. Consent is not a condition of purchase. Reply STOP to unsubscribe. Message frequency varies. Msg & data rates may apply. If you wish to join again, you can sign up as you did the first time, and we will start sending SMS messages to you again. For help or more information, reply "HELP" to any of our messages. Your information will not be shared. By submitting, you agree to our Privacy Policy seen and reviewable on this page. By providing your mobile phone number, you agree to receive SMS (short message service) communication. Our website or any websites associated with our website, we consider the privacy of our visitors to be extremely important. If you require any more information or have any questions about our privacy policy, please feel free to contact us. Our website or any websites associated with our website, we consider the privacy of our visitors to be extremely important. This privacy policy document describes in detail the types of personal information is collected and recorded by our website, or any websites associated with it and how we use it.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default Footer;