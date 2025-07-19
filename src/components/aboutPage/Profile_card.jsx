import React, { useRef, useEffect } from "react";
import myprofile from "../../../public/myprofile1.png";

const Profile_card = () => {
  const cardRef = useRef(null);
  const wrapperRef = useRef(null);
  const lightRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const wrapper = wrapperRef.current;
    const light = lightRef.current;

    if (!card || !wrapper) return;

    const handleMouseMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateY = (mouseX / (rect.width / 2)) * 25;
      const rotateX = -(mouseY / (rect.height / 2)) * 25;

      const lightX = (mouseX / (rect.width / 2)) * 50;
      const lightY = (mouseY / (rect.height / 2)) * 50;

      card.style.transform = `
        rotateY(${rotateY}deg)
        rotateX(${rotateX}deg)
        translateZ(30px)
      `;

      if (light) {
        light.style.transform = `translate(${lightX}px, ${lightY}px)`;
      }
    };

    const handleMouseLeave = () => {
      card.style.transform = "rotateY(0) rotateX(0) translateZ(0)";
      if (light) {
        light.style.transform = "translate(0, 0)";
      }
    };

    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex justify-center align-middle items-center min-h-screen ">
      <div
        ref={wrapperRef}
        className="relative w-[400px] h-[500px] group perspective-800"
      >
        {/* Main Card with Border Animation */}
        <div
          ref={cardRef}
          className="relative w-[100%] h-full rounded-xl transform-style-preserve-3d transition-transform duration-300"
        >
          {/* Border Animation (using pseudo-elements) */}
          <div
            className="
            absolute inset-0 rounded-xl
            before:content-[''] before:absolute before:left-[3%] before:w-[94%] before:h-[8px] 
            before:bg-[#212121] before:transition-all before:duration-500 before:origin-center 
            before:top-[-5px] before:z-10
            after:content-[''] after:absolute after:left-[3%] after:w-[94%] after:h-[8px] 
            after:bg-[#212121] after:transition-all after:duration-500 after:origin-center 
            after:bottom-[-5px] after:z-10
            group-hover:before:scale-x-0
            group-hover:after:scale-x-0
            group-hover:border-3 group-hover:border-[#149CEA]
            group-hover:shadow-[inset_0_0_25px_#1479EA]
          "
          >
            {/* Background Layers */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br blur-2xl " />
              <div className="absolute inset-0 bg-gradient-to-tr  blur-2xl" />
            </div>

            {/* Profile Image */}
            <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
              <img
                src={myprofile}
                alt="Profile"
                className="max-w-[170%] max-h-[120%] align-middle object-contain"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))",
                }}
              />
            </div>

            {/* Light Effect */}
            <div
              ref={lightRef}
              className="absolute w-64 h-64 bg-gradient-to-tr from-white/50 to-cyan-100/30 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_card;
