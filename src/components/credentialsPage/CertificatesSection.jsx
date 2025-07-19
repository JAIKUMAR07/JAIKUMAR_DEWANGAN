import React from "react";

import Persuasive_Influence from "../../../public/certificates/Persuasive_Influence_path.png";

const certificates = [
  {
    title: "Introduction to Cybersecurity Fundamentals",
    issuer: "Coursera",
    description: "Fundamentals of cybersecurity and cyber threats ",
    image:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~6I9DUWATWO62/CERTIFICATE_LANDING_PAGE~6I9DUWATWO62.jpeg",
    path: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~6I9DUWATWO62/CERTIFICATE_LANDING_PAGE~6I9DUWATWO62.jpeg",
  },
  {
    title: " Generative AI by Microsoft and LinkedIn",
    issuer: "Microsoft and LinkedIn",
    description: " foundational   Generative AI & Prompt Engienering ",
    image:
      "https://media.licdn.com/dms/image/v2/D4D22AQH5ghPIebWOpA/feedshare-shrink_1280/feedshare-shrink_1280/0/1711365454846?e=2147483647&v=beta&t=Xsai9s9u7sxqRfbI1xXLjg7C7h2wWuJPa-fYs_Y76d0",
    path: "https://www.linkedin.com/learning/certificates/db27627f83272e5e0924071a5e99c478b20740662fdfc92bee097e0387e64638",
  },
  {
    title: "Persuasive Influence Path Completion",
    issuer: "Toatmasters International",
    description: "Public Speaking , Leadership , Team work , Completed 5 level",
    image: Persuasive_Influence,
    path: "https://basecamp.toastmasters.org/ti/certificates/eea133f8-7857-47a9-bac1-ef7adea07c6e/",
  },
];
const CertificatesSection = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl  mx-auto">
        <h2 className="text-4xl font-black text-center mb-12 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">
          My Certifications
        </h2>

        {/* Adjust card width by modifying max-w-sm class value below */}
        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <a href={cert.path}>
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 backdrop-blur-sm h-full max-w-xs mx-auto"
              >
                <div className="relative h-40">
                  <img
                    className="w-full h-full object-cover brightness-95"
                    src={cert.image}
                    alt={cert.title}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-white mb-2">
                    {cert.title}
                  </h2>
                  <p className="text-gray-300 mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm">{cert.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesSection;
