import React, { useEffect, useState } from "react";

const GlitchText = ({
  text = "  JAIKUMAR  ",
  size = "text-3xl",
  fontWeight = "font-bold",
  uppercase = true,
  hoverBlur = true,
}) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Set up periodic glitching
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);

      // Turn off glitch effect after 0.6 seconds (duration of effect)
      setTimeout(() => {
        setIsGlitching(false);
      }, 600);
    }, 2000); // Every 2 seconds

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="relative inline-block w">
      <label
        className={`${size} ${fontWeight} ${
          uppercase ? "uppercase" : " "
        } cursor-pointer relative w-[50%] h-[50%]`}
        data-content={text}
      >
        <span
          className={`relative z-10 text-white ${
            hoverBlur ? "hover:filter hover:blur-[1px]" : ""
          }`}
        >
          {text}
        </span>
      </label>

      {/* Glitch effect styles */}
      <style jsx>{`
        /* Rest of the styles remain the same */
        label::before,
        label::after {
          position: absolute;
          content: attr(data-content);
          top: 0;
          left: 0;
          visibility: hidden;
          pointer-events: none;
        }

        label::before,
        label::after {
          visibility: ${isGlitching ? "visible" : "hidden"};
        }

        label::before {
          color: rgba(255, 0, 188, 0.8);
          animation: ${isGlitching
            ? "glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite"
            : "none"};
        }

        label::after {
          color: rgba(0, 255, 255, 0.8);
          animation: ${isGlitching
            ? "glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite"
            : "none"};
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-3px, 3px);
          }
          40% {
            transform: translate(-3px, -3px);
          }
          60% {
            transform: translate(3px, 3px);
          }
          80% {
            transform: translate(3px, -3px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  );
};

export default GlitchText;
