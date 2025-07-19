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
    <nav className="z-1 my bg-[#ffffff12] fixed top-0 w-full backdrop-blur-md cursor-pointer">
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
                  <div className="bg-gradient-to-b from-gray-800/40 to-transparent p-[2px] rounded-[16px]">
                    <Link
                      to={item.path}
                      className="group p-[2px] rounded-[12px] bg-gradient-to-b from-gray-700 to-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] hover:scale-105 active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200 block"
                    >
                      <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-[8px] px-3 py-2">
                        <div className="flex gap-1 items-center">
                          <span className="font-semibold text-white">
                            {item.label}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
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
          <div className="space-y-6 px-2 pb-3 pt-10 flex flex-col items-center">
            {navigationItems.map((item) => (
              <div
                key={item.path}
                className="bg-gradient-to-b from-gray-800/40 to-transparent p-[3px] rounded-[16px] w-64"
              >
                <Link
                  to={item.path}
                  className="group p-[3px] rounded-[12px] bg-gradient-to-b from-gray-700 to-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] hover:scale-1 active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200 block w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-[8px] px-4 py-3 text-center">
                    <span className="font-semibold text-white text-2xl">
                      {item.label}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
