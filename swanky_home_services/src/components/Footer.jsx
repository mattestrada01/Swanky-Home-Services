import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section className={`${styles.flexCenter} mb-6 mt-2 flex-col`}>
      <div className={`${styles.flexStart} mb-4 w-full`}>
        <div className="flex-[1] flex flex-row justify-start mr-10">
          <a onClick={handleLogoClick}>
            <img
              src={logo}
              alt="logo"
              className="w-[266px] h-[72.14px] object-contain cursor-pointer"
            />
          </a>
          <p className={`text-gray-300 mt-6 ml-4 sm:ml-20 max-w-[312px] sm:whitespace-nowrap`}>
            Dedicating our craft to making your home spotless.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-xs leading-[27px] text-white">
          Copyright Ⓒ Swanky Home Services. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
