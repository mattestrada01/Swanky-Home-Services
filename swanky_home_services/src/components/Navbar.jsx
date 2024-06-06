import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import styles from '../style';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav id="home" className="w-full flex py-4 justify-between items-center" >
      <a href="#home" className="cursor-pointer" onClick={() => setActive("Home")}>
        <img src={logo} className="w-[200px] h-[100px] transition-transform duration-300 hover:scale-105" />
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins cursor-pointer text-[16px] ${styles.navLink} ${styles.navLinkHover} ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mr-0" : "mr-12"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
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
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
