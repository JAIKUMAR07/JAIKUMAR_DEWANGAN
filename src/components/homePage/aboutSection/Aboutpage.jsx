import React from "react";
import myprofile from "../../../../public/myprofile1.png";
import Profile_card from "../../aboutPage/Profile_card";
const Aboutpage = () => {
  return (
    <>
      <section>
        <div className="py-10 px-4 mx-auto max-h-screen max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 ">
          <div className="py-10 hidden md:block">
            <Profile_card />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 font-extrabold tracking-tight leading-none text-gray-900 transform transition-transform duration-300 text-3xl lg:text-4xl dark:text-white">
              3rd Year CSE Student
            </h1>
            <p className="mb-8 text-justify font-normal text-gray-700 lg:text-xl dark:text-gray-400">
              I enjoy problem-solving and learning new skills that help me grow
              as an engineer. I've built a strong foundation in web development
              and C++ . Created several web applications, and worked on data
              structure & algorithm challenges. I'm excited to apply my skills
              to real-world projects and am currently seeking opportunities to
              learn, grow, and contribute as a developer.
            </p>
            <div className="flex flex-col items-center sm:items-start space-y-4 sm:flex-row sm:space-y-0">
              <a href="https://docs.google.com/document/d/1SXx2gTZw1IOumGC1lb18513cEZAe9fohfjLTmvYqiZc/edit?usp=drivesdk">
                <button className="bg-blue-950 w-[140%] text-yellow-500 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                  <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Resume
                </button>
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Aboutpage;
