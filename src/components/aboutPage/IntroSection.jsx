import React from "react";
import myprofile from "../../../public/myprofile1.png";
const IntroSection = () => {
  return (
    <>
      <section className="py-6 md:py-10 mb-0">
        <div className="px-4 mx-auto w-full max-w-screen-xl grid lg:grid-cols-2 gap-4 lg:gap-16">
          <div className="flex justify-center items-center">
            <img
              src={myprofile}
              className="scale-90 md:scale-110 max-h-[300px] md:max-h-none"
              alt="profile image"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="mb-3 md:mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl dark:text-white">
              3rd Year CSE Student
            </h1>
            <p className="mb-4 md:mb-8 text-base md:text-lg font-normal text-gray-700 dark:text-gray-400">
              I'm a passionate problem-solver and full-stack developer with a
              solid foundation in C++, data structures, and algorithms.{" "}
              <br className="hidden md:block" />
              I've built several web applications by applying my learning and
              have solved over 200 DSA problems across GFG & LeetCode platforms.{" "}
              <br className="hidden md:block" />I enjoy transforming ideas into
              functional solutions and am eager to apply my technical skills to
              real-world challenges. I'm driven to contribute to innovative and
              impactful projects.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
              <a href="https://docs.google.com/document/d/1SXx2gTZw1IOumGC1lb18513cEZAe9fohfjLTmvYqiZc/edit?usp=drivesdk">
                <button className="px-8 py-4  mt-2 bg-primary text-center  items-center font-semibold rounded-lg border-none transition-all duration-300 ease-in-out transform active:scale-95 bg-amber-300 hover:shadow-lg hover:shadow-cyan-500 focus:outline-none hover:scale-110">
                  <strong className="">RESUME</strong>
                </button>{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSection;
