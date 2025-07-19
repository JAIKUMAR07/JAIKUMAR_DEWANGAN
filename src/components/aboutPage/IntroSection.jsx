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
