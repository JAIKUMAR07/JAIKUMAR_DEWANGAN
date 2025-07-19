import React from "react";
import myprofile from "../../../public/myprofile1.png";

const IntroSection = () => {
  return (
    <>
      <div className="pt-[90px]"></div>
      <section className=" ">
        <div className="px-4 mx-auto w-full max-w-screen-xl grid lg:grid-cols-2 gap-4 lg:gap-16">
          <div className="flex justify-center items-center">
            <img
              src={myprofile}
              className="scale-90 md:scale-110 max-h-[300px] md:max-h-none"
              alt="profile image"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="my-3 md:mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl dark:text-white">
              👋 Hello There!!
            </h1>
            <p className="my-4 md:mb-8 text-justify md:text-lg font-normal text-gray-700 dark:text-gray-400">
              I'm Jaikumar Dewangan, a passionate For engineering who loves
              problem-solving and continuous learning.
              <br />
              I’ve built a strong foundation in C++ and web development, and
              have developed several projects — some of which you’ll find in the
              Projects section.
              <br />
              Alongside building applications, I've solved 300+ DSA problems
              across platforms like LeetCode and CodeChef, and actively
              participate in coding contests to sharpen my skills.
              <br />
              Beyond tech, I was an active member of Toastmasters Club, where I
              worked on my communication, public speaking, and leadership
              skills.
              <br />
              I volunteered for various roles, delivered speeches, and even
              completed the Persuasive Influence Pathway, which includes five
              levels of growth and leadership development.
              <br />
              In my free time, I enjoy watching movies and playing chess.
              <br />
              As I continue my journey in engineering, I'm currently looking for
              opportunities where I can apply my skills, take on real-world
              challenges, and grow as a developer and an Engineer.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
              <a href="https://docs.google.com/document/d/1SXx2gTZw1IOumGC1lb18513cEZAe9fohfjLTmvYqiZc/edit?usp=drivesdk">
                <button class="bg-blue-950  w-[140%]   text-yellow-500 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                  <span class="bg-blue-400 font-extrabold shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSection;
