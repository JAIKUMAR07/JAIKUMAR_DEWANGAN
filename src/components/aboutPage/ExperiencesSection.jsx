import React from "react";

// experiences lis
const experiences = [
  {
    company: "Rays IT & Design World",

    roles: [
      {
        title: "Machine Learning Trainee",
        duration: "may  2025 - june 2025  ",
        skills: [
          "Numpy",
          "Pandas",
          "scikit-learn",
          "Matplotlib",
          "Flask",
          "Machine Learning",
        ],
        borderColor: "border-sky-400",
      },
    ],
  },
  {
    company: "Toastmasters International",
    // position: "Member",
    duration: "Nov 2022 - mar 2025  ",
    // location: "Raipur, India",
    roles: [
      {
        title: "Associate Vice President Education",
        duration: "Jul 2024 - Dec 2024   ",
        skills: ["Leadership", "Education Planning"],
        borderColor: "border-sky-400",
      },
      {
        title: "Club Secretary",
        duration: "Jan 2024 - Jun 2024  ",
        skills: ["Meeting Planning", "Documentation"],
        borderColor: "border-purple-400",
      },
      {
        title: "Sergeant At Arms",
        duration: "Jul 2023 - Dec 2023  ",
        skills: ["Logistics Management", "Event Coordination"],
        borderColor: "border-yellow-400",
        achievement: "Excellence in Logistics Award",
      },
      {
        title: "Member",
        duration: "Nov 2022 - Mar 2025  ",
        skills: ["Public Speaking", "Speech Writing"],
        achievement: "2nd place: HSC div Contest",
        borderColor: "border-green-400",
      },
    ],
  },
  {
    company: "Thought Applied Creations",

    roles: [
      {
        title: "Web Developer Trainee",
        duration: "Jul 2024 - Aug 2024  ",
        skills: ["Frontend Developer"],
        borderColor: "border-sky-400",
      },
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <div className="my-5 group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-5 hover:bg-gray-800/70 transition-all duration-300">
      <div className="relative z-10 text-white">
        <h3 className="text-2xl font-bold mb-2">{experience.company}</h3>
        <p>{experience.position}</p>
        <p>{experience.duration}</p>
        {experience.location && <p>{experience.location}</p>}

        {experience.roles && (
          <div className="space-y-4 mt-4">
            {experience.roles.map((role, index) => (
              <div
                key={index}
                className={`pl-4 border-l-4 ${
                  role.borderColor || "border-sky-400"
                }`}
              >
                <h3 className="text-lg font-semibold">{role.title}</h3>
                <p className="text-gray-300">{role.duration}</p>
                {role.skills && (
                  <p className="mt-1 text-gray-300">
                    <span className="font-bold"> Skills : </span>{" "}
                    {role.skills.join(", ")}
                  </p>
                )}
                {role.achievement && (
                  <div className="mt-2 p-2 bg-gray-700/50 rounded-lg">
                    <p className="text-yellow-300">🏆 {role.achievement}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ExperiencesSection = () => {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-10">
          <h2 className="text-4xl font-black text-center mb-12 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">
            Experience
          </h2>

          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ExperiencesSection;
