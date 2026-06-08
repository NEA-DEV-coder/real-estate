import { FaBars, FaPhone, FaTimes } from "react-icons/fa";
import { useState } from "react";
import useScrollToSection from "./useScrollToSection";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Properties", id: "properties" },
  { label: "Buy", id: "buy" },
  { label: "Sell", id: "sell" },
  { label: "Rent", id: "rent" },
  { label: "About Us", id: "about-us" },
  { label: "Contact", id: "contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollTo = useScrollToSection();

  const handleNav = (id) => {
    scrollTo(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed z-50 w-full bg-[#f5f6f7] shadow-md">
      <div className="flex items-center justify-between mx-4">
        <button onClick={() => handleNav("home")} className="text-left">
          <h2 className="text-2xl font-bold text-[#053a6b] font-heading">Neadev</h2>
          <span className="text-sm font-body">Real Estate</span>
        </button>

        <nav className="hidden lg:block">
          <ul className="flex items-center font-heading gap-4">
            {navLinks.map(({ label, id }) => (
              <li key={id} className={id === "home" ? "text-[#a6b5c2]" : ""}>
                <button onClick={() => handleNav(id)} className="hover:text-[#1774cc] transition">
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center font-heading gap-4">
          <h4 className="flex items-center gap-2 text-[#0F2A44]">
            <span className="rotate-90"><FaPhone /></span> +1(910) 6782 361
          </h4>
          <button
            onClick={() => handleNav("schedule")}
            className="bg-[#0F2A44] text-white py-1 px-2 md:text-sm rounded hover:bg-[#1774cc]"
          >
            Schedule a consultation
          </button>
        </div>

        <button
          className="lg:hidden text-[#0F2A44] hover:text-[#4594dd] transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`fixed top-0 right-0 h-screen w-72 bg-slate-500 py-6 px-4 text-white lg:hidden z-40
          transform transition-transform duration-500 ease-in-out
          ${isMenuOpen ? "-translate-x-0" : "translate-x-full"}`}
        >
          <nav>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-0 top-0 m-4 text-[#f5f6f7] text-xl hover:text-[#4594dd] transition duration-300"
            >
              <FaTimes />
            </button>
            <ul className="flex flex-col gap-6 mt-5 font-heading">
              {navLinks.map(({ label, id }) => (
                <li key={id} className={id === "home" ? "text-[#a6b5c2]" : ""}>
                  <button onClick={() => handleNav(id)} className="hover:text-[#4594dd] transition">
                    {label}
                  </button>
                </li>
              ))}
              <div className="flex flex-col gap-4 mt-6">
                <h4 className="text-[#d0dce8]">+1 910-678-2361</h4>
                <button
                  onClick={() => handleNav("schedule")}
                  className="bg-[#0F2A44] text-white py-2 px-4 rounded hover:bg-[#1C3D5A]"
                >
                  Schedule a consultation
                </button>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
