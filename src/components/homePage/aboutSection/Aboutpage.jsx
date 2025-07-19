import React from "react";
import myprofile from "../../../../public/myprofile1.png";
const Aboutpage = () => {
  return (
    <>
      <section>
        <div class="py-10 px-4 mx-auto max-h-screen max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 ">
          <div className="py-10">
            <img
              src={myprofile}
              className="scale-110   hidden md:block "
              alt="image hai"
            />
          </div>
          <div class="flex flex-col justify-center">
            <h1 class="mb-4  font-extrabold tracking-tight leading-none text-gray-900  transform transition-transform duration-300 hover:scale-130 text-3xl lg:text-4xl dark:text-white">
              3rd Year CSE Student
            </h1>
            <p class="mb-8  text-justify  font-normal text-gray-700 lg:text-xl dark:text-gray-400">
              I enjoy problem-solving and learning new skills that help me grow
              as an engineer. I’ve built a strong foundation in web development
              and C++ . Created several web applications, and worked on data
              structure & algorithm challenges. I'm excited to apply my skills
              to real-world projects and am currently seeking opportunities to
              learn, grow, and contribute as a developer.
            </p>
            <div class="flex   flex-col space-y-4 sm:flex-row sm:space-y-0">
              <a href="https://docs.google.com/document/d/1SXx2gTZw1IOumGC1lb18513cEZAe9fohfjLTmvYqiZc/edit?usp=drivesdk">
                <button className="px-8 py-4  mt-2 bg-primary text-center  items-center font-semibold rounded-lg border-none transition-all duration-300 ease-in-out transform active:scale-95 bg-amber-300 hover:shadow-lg hover:shadow-cyan-500 focus:outline-none hover:scale-110">
                  <strong className="">RESUME</strong>
                </button>{" "}
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
