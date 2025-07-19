import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 relative py-6 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-xl font-bold text-white">Jaikumar Dewangan</h1>
            <p className="text-sm text-gray-400">FullStack WebDeveloper</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://x.com/JAI_KUMAR_007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transform transition-transform duration-400 hover:scale-130  hover:text-cyan-500"
            >
              <svg
                className="w-8 h-8 inline mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/jaikumar-dewangan-274a59251/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transform transition-transform duration-400 hover:scale-130  hover:text-cyan-500"
            >
              <svg
                className="w-8 h-8 inline mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="mailto:jaikumardewangan88@gmail.com"
              className="text-gray-400 transform transition-transform duration-400 hover:scale-130  hover:text-cyan-500"
            >
              <svg
                className="w-8 h-8 inline mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
              </svg>
            </a>
          </div>

          <div className="text-center  md:text-right mt-4 md:mt-0 text-sm">
            <p className="justify-center text-center">
              All Rights Reserved. <br className=" " />{" "}
              <br className="lg:hidden" /> © 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
