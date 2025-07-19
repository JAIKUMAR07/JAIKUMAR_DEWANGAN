import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const educations = [
  {
    institution:
      "Shri Shankaracharya Institute of Professional Management and Technology",
    degrees: [
      {
        degree: "Bachelor of Technology in Computer Science & Engineering",
        duration: "2022 - 2026",
        score: "CGPA: 7.2",
        borderColor: "border-sky-400",
        skills: [
          "Computer Science Fundamentals",
          "Programming",
          "Algorithms",
          "Data Structures",
        ],
      },
    ],
  },
  {
    institution: "MAA Banjari Gurukul Higher Secondary School",
    degrees: [
      {
        degree: "12th Class in PCM",
        duration: "2021 - 2022",
        score: "Percentage: 80.8%",
        skills: ["Physics", "Chemistry", "Mathematics"],
        borderColor: "border-green-400",
      },
      {
        degree: "10th Class",
        duration: "2019 - 2020",
        score: "Percentage: 87.8%",
        borderColor: "border-yellow-400",
      },
    ],
  },
];

const EducationCard = ({ education, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Changed to false for repeatable animations
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: index * 0.15,
        duration: 0.8,
      },
    },
  };

  const degreeVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
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
      className="my-5 group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-6  transition-all duration-300 border border-gray-700 hover:border-cyan-400/30"
    >
      <div className="relative z-10 text-white">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text"
        >
          {education.institution}
        </motion.h3>

        {education.degrees ? (
          <>
            {education.degrees.map((deg, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={degreeVariants}
                className={`mb-4 pl-4 border-l-4 ${
                  deg.borderColor || "border-sky-400"
                }`}
              >
                <motion.p
                  animate={inView ? { x: [0, 5, 0] } : {}}
                  transition={{ delay: idx * 0.1 + 0.5 }}
                  className="text-base md:text-lg font-semibold text-yellow-200   "
                >
                  {deg.degree} <span className="mx-2"></span>[{deg.duration}]
                </motion.p>
                <motion.p
                  animate={inView ? { opacity: [0, 1] } : {}}
                  transition={{ delay: idx * 0.1 + 0.6 }}
                  className="text-base"
                >
                  {deg.score}
                </motion.p>
                {deg.skills && (
                  <motion.p
                    animate={inView ? { opacity: [0, 1] } : {}}
                    transition={{ delay: idx * 0.1 + 0.7 }}
                    className="mt-1 text-gray-300"
                  >
                    <span className="font-bold">Skills:</span>{" "}
                    {deg.skills.join(", ")}
                  </motion.p>
                )}
                {deg.achievement && (
                  <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={achievementVariants}
                    transition={{ delay: idx * 0.1 + 0.8 }}
                    className="mt-2 p-2 bg-gray-700/50 rounded-lg"
                  >
                    <p className="text-yellow-300 flex items-center">
                      <motion.span
                        animate={inView ? { rotate: [0, 20, -10, 0] } : {}}
                        transition={{ delay: idx * 0.1 + 0.9 }}
                        className="inline-block mr-2"
                      >
                        🏆
                      </motion.span>
                      {deg.achievement}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </>
        ) : (
          <div
            className={`pl-4 border-l-4 ${
              education.borderColor || "border-sky-400"
            }`}
          >
            {/* Single degree fallback (unchanged) */}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const EducationSection = () => {
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
    <section className="py-12 md:py-20" ref={ref}>
      <div className="container mx-auto px-4 md:px-10">
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-3xl md:text-4xl font-black text-center mb-8 md:mb-12 bg-gradient-to-r from-green-400 to-cyan-200 text-transparent bg-clip-text"
        >
          Education
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6 md:space-y-8"
        >
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
