import React from "react";
import { FaBars, FaPhone, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      <div className="flex items-center justify-between mx-4">
        <div>
          <h2 className="text-2xl font-bold text-[#053a6b] font-heading">
            Neadev
          </h2>
          <span className="text-sm font-body">Real Estate</span>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex items-center font-heading gap-4">
            <li className="text-[#a6b5c2]">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#properties">Properties</a>
            </li>
            <li>
              <a href="#buy">Buy</a>
            </li>
            <li>
              <a href="#sell">Sell</a>
            </li>
            <li>
              <a href="#rent">Rent</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:flex items-center font-heading gap-4">
          <h4 className="flex items-center gap-2 text-[#0F2A44]">
            <span className="rotate-90">
              <FaPhone />
            </span>{" "}
            +1(910) 6782 361
          </h4>
          <button
            className="bg-[#0F2A44] text-white py-2 px-4
           rounded hover:bg-[#1C3D5A]"
          >
            Schedule a consultation
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-[#053a6b]"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="bg-slate-500 py-2 text-white lg:hidden">
          <nav className="mx-4">
            <ul className="flex flex-col items-end font-heading gap-4">
              <li className="text-[#a6b5c2]">
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#properties">Properties</a>
              </li>
              <li>
                <a href="#buy">Buy</a>
              </li>
              <li>
                <a href="#sell">Sell</a>
              </li>
              <li>
                <a href="#rent">Rent</a>
              </li>
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <div className="flex flex-col items-end font-heading gap-4">
                <h4 className="text-[#0F2A44]">+1 910-678-2361</h4>
                <button
                  className="bg-[#0F2A44] text-white 
              py-2 px-4 rounded hover:bg-[#1C3D5A]"
                >
                  Schedule a consultation
                </button>
              </div>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
