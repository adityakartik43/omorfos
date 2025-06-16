import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { PhoneIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const navItems = [
    "HOME",
    "ABOUT US",
    "PROJECTS",
    "FLOOR PLAN",
    "GALLERY",
    "FOUNDERS",
    "CONTACT US",
  ];

  const phoneNumber = "+91 9749937222";
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <nav className="flex items-center justify-between px-6 py-1 md:p-0 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center md:px-8">
        <img src={logo} alt="Omorfos Logo" className="h-15 md:h-18" />
      </div>

      <div className="flex items-center gap-4 justify-end md:gap-6">
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-semibold text-gray-600 text-sm">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-red-500 duration-300 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Call Button */}
        <div
          className="hidden select-none md:flex items-center bg-red-600 text-white px-4 py-7 cursor-pointer hover:bg-blue-800 transition-colors duration-500"
          onClick={handleCall}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>
          +91 9749937222
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleNav}>
          {navOpen ? (
            <X size={24} className="duration-300" />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu with transition */}
      <div
        className={`
                absolute top-16 left-0 w-full bg-white shadow-md z-50 md:hidden
                transition-all duration-300
                ${
                  navOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }
            `}
        style={{ willChange: "opacity, transform" }}
      >
        <ul className="flex flex-col px-6 gap-4 py-6">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={toggleNav}
              className="text-gray-600 hover:text-red-500"
            >
              {item}
            </li>
          ))}
          <li
            className="bg-red-600 flex flex-col items-center text-white px-4 py-2 rounded mt-2"
            onClick={handleCall}
          >
            <div className="flex flex-row items-center select-none">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>
            +91 9749937222
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
