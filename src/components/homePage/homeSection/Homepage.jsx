// First, import the specific image directly
import React from "react";
import TextWriting from "./TextWriting";
import computer from "../../../../public/computer.gif";

import linkedin from "../../../../public/social_icons/linkedin.png";
import github from "../../../../public/social_icons/github.png";
import codolio from "../../../../public/social_icons/codolio.png";
import email from "../../../../public/social_icons/gmail.png";
const Homepage = () => {
  return (
    <>
      <div className="container py-20 sm:py-0 relative">
        <div className="grid grid-cols-12 lg:py-10  ">
          {/* Left Section (Text Content) */}
          <div className="col-span-12 mt-5 lg:col-span-6 text-center items-center lg:text-start flex flex-col justify-center order-2 lg:order-1">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold primary-text mb-4 sm:mb-1">
                JAIKUMAR
              </h2>
              <h2 className="text-4xl md:text-6xl font-bold secondary-text mb-4 sm:mb-10">
                DEWANGAN
              </h2>
              <h6 className="text-xl sm:text-2xl font-bold text-white mb-1">
                I Am a
              </h6>
              <h1 className="text-2xl sm:text-3xl md:text-4xl secondary-text mx-3.5">
                <TextWriting />
              </h1>
            </div>

            {/* Resume Button */}
            <div className="mt-10">
              <ul className="flex gap-4 mb-4">
                <li>
                  <a
                    href="https://www.linkedin.com/in/jaikumar-dewangan-274a59251/"
                    className="hover:opacity-80 block transform transition-transform duration-300 hover:scale-130"
                  >
                    <img src={linkedin} alt="LinkedIn" className="w-20 h-20" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/JAIKUMAR07"
                    className="hover:opacity-80 block transform transition-transform duration-300 hover:scale-130"
                  >
                    <img src={github} alt="GitHub" className="w-20 h-20" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://codolio.com/profile/JAIKUMAR007"
                    className="hover:opacity-80 block transform transition-transform duration-300 hover:scale-130"
                  >
                    <img src={codolio} alt="Codolio" className="w-20 h-20" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:opacity-80 block transform transition-transform duration-300 hover:scale-130"
                  >
                    <img src={email} alt="Email" className="w-20 h-20" />
                  </a>
                </li>
              </ul>
              {/* <a href="https://docs.google.com/document/d/1SXx2gTZw1IOumGC1lb18513cEZAe9fohfjLTmvYqiZc/edit?usp=drivesdk">
                <button className="px-8 py-4  mt-2 bg-primary text-center  items-center font-semibold rounded-lg border-none transition-all duration-300 ease-in-out transform active:scale-95 bg-amber-300 hover:shadow-lg hover:shadow-cyan-500 focus:outline-none hover:scale-110">
                  <strong className="">RESUME</strong>
                </button>{" "}
              </a> */}
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="col-span-12  lg:col-span-6 mt-0 lg:mt-0 flex justify-center items-center order-1 lg:order-2">
            <img
              src={computer}
              alt="computer gif"
              className="rounded-lg max-w-full h-auto "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
