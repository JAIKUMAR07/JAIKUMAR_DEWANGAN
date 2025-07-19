import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/credentials", label: "Credentials" },
    { path: "/projects", label: "Projects" },
  ];

  return (
    <nav className="z-20 py-[5px] bg-[#ffffff12] fixed top-0 w-full backdrop-blur-md cursor-pointer">
      <div className="max-md:px-10 px-28">
        <div className="flex h-[80px] items-center justify-between">
          <div className="hero-container">
            <Link
              data-text="JAIKUMAR"
              className="font-bold text-2xl text-white hero glitch layers cursor-pointer"
              to="/"
            >
              JAIKUMAR
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="right flex justify-center mb-4 lg:mb-0">
            <ul className="space-x-4 hidden lg:flex">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <Link
                    className="px-6 text-[17px] font-[500] text-white border-[#fff] py-2 bg-[#f8f8f815] rounded-md hover:rounded-md hover:bg-[#f8f8f833] transition-all duration-300 cursor-pointer"
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger Button */}
          <div className="lg:hidden scale-50 sm:scale-75 md:scale-100">
            <button
              className="hamburger-menu relative w-10 h-8 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={`absolute h-1 w-full bg-white rounded-lg transform transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-3.5" : "-translate-y-3"
                }`}
              ></span>
              <span
                className={`absolute h-1 w-full bg-white rounded-lg transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute h-1 w-full bg-white rounded-lg transform transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-3.5" : "translate-y-3"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden duration-300 ease-in-out ${
          isOpen ? "translate-x-0 h-screen" : "translate-x-full h-0"
        } transition-all`}
      >
        <div className="lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-10">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                className="block px-3 py-2 text-5xl sm:text-7xl border-b border-white text-end md:text-center font-bold cursor-pointer text-[#ffffff6f] hover:text-white"
                to={item.path}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
