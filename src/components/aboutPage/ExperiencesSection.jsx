import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    company: "Rays IT & Design World",
    roles: [
      {
        title: "Machine Learning Trainee",
        duration: "May 2025 - June 2025",
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
    roles: [
      {
        title: "Associate Vice President Education",
        duration: "Jul 2024 - Dec 2024",
        skills: ["Leadership", "Education Planning"],
        borderColor: "border-sky-400",
      },
      {
        title: "Club Secretary",
        duration: "Jan 2024 - Jun 2024",
        skills: ["Meeting Planning", "Documentation"],
        borderColor: "border-purple-400",
      },
      {
        title: "Sergeant At Arms",
        duration: "Jul 2023 - Dec 2023",
        skills: ["Logistics Management", "Event Coordination"],
        borderColor: "border-yellow-400",
        achievement: "Excellence in Logistics Award",
      },
      {
        title: "Member",
        duration: "Nov 2022 - Mar 2025",
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
        duration: "Jul 2024 - Aug 2024",
        skills: ["Frontend Developer"],
        borderColor: "border-sky-400",
      },
    ],
  },
];

const ExperienceCard = ({ experience, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Changed to false for repeatable animations
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const roleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.6,
        ease: "backOut",
      },
    }),
  };

  const achievementVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      whileHover={{ y: -5 }}
      className="my-5 group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-6 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-cyan-400/30"
    >
      <div className="relative z-10 text-white">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold mb-3 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text"
        >
          {experience.company}
        </motion.h3>

        {experience.roles && (
          <div className="space-y-4 mt-4">
            {experience.roles.map((role, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={roleVariants}
                className={`pl-4 border-l-4 ${
                  role.borderColor || "border-sky-400"
                }`}
              >
                <motion.h3
                  animate={inView ? { x: [0, 5, 0] } : {}}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className="text-lg font-semibold"
                >
                  {role.title}
                </motion.h3>
                <motion.p
                  animate={inView ? { opacity: [0, 1] } : {}}
                  transition={{ delay: i * 0.1 + 0.6 }}
                  className="text-gray-300"
                >
                  {role.duration}
                </motion.p>
                {role.skills && (
                  <motion.p
                    animate={inView ? { opacity: [0, 1] } : {}}
                    transition={{ delay: i * 0.1 + 0.7 }}
                    className="mt-1 text-gray-300"
                  >
                    <span className="font-bold">Skills:</span>{" "}
                    {role.skills.join(", ")}
                  </motion.p>
                )}
                {role.achievement && (
                  <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={achievementVariants}
                    transition={{ delay: i * 0.1 + 0.8 }}
                    className="mt-2 p-2 bg-gray-700/50 rounded-lg"
                  >
                    <p className="text-yellow-300 flex items-center">
                      <motion.span
                        animate={inView ? { rotate: [0, 20, -10, 0] } : {}}
                        transition={{ delay: i * 0.1 + 0.9 }}
                        className="inline-block mr-2"
                      >
                        🏆
                      </motion.span>
                      {role.achievement}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ExperiencesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Changed to false for repeatable animations
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4 md:px-10">
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-3xl md:text-4xl font-black text-center mb-8 md:mb-12 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6 md:space-y-8 pep"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
