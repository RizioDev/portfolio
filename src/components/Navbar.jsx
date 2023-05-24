import React, { useState } from "react";
import es from "../assets/flags/spain.png";
import en from "../assets/flags/uk.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [t, i18n] = useTranslation("global");

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "200px" }} />
      </div>

      {/* menu */}
      <div className="ml-4 mr-4 sm:ml-10 sm:mr-2 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 items-center">
        <button
          onClick={() => i18n.changeLanguage("en")}
          className="hover:scale-105 transition-transform"
        >
          <img src={en} alt="Inglés" className="w-8 h-6" />
        </button>
        <button
          onClick={() => i18n.changeLanguage("es")}
          className="hover:scale-105 transition-transform"
        >
          <img src={es} alt="Español" className="w-8 h-6" />
        </button>
      </div>

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            {t("navbar.home")}
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            {t("navbar.about")}
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            {t("navbar.skills")}
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            {t("navbar.work")}
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            {t("navbar.contact")}
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/fabrizio-alderete/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.github.com/RizioDev"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:fabrizioalderete23@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#207323]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://walink.co/b7fc81"
            >
              Whatsapp <FaWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
