import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import styles from '../style';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const offsets = {
    hero: 100,
    services: -40,
    about: window.innerWidth >= 768 ? 0 : -650, 
    reviews: -30,
    contact: window.innerWidth >= 768 ? 0 : -32,
  };

  const handleNavClick = (id) => {
    setActive(id);
    setToggle(false); // close the menu on mobile

    const element = document.getElementById(id);
    const offset = offsets[id] || 0; 
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return (
    <nav id="home" className="w-full flex py-2 justify-between items-center">
      <a className="cursor-pointer" onClick={() => handleNavClick("hero")}>
        <img src={logo} className="w-[120px] h-[60px] sm:w-[170px] sm:h-[85px] transition-transform duration-300 hover:scale-105" />
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins cursor-pointer text-[16px] ${styles.navLink} ${styles.navLinkHover} ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mr-0" : "mr-12"}`}
            onClick={() => handleNavClick(nav.id)}
          >
            <a>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${styles.navLink} ${styles.navLinkHover} ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => handleNavClick(nav.id)}
              >
                <a>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
