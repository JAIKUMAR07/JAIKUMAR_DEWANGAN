import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const achievementsData = {
  awards: [
    {
      id: 1,
      title: "Secured 2nd Place in Humorous Speech Contest at Div Contest",
    },
    {
      id: 2,
      title: "Secured 1st Place in Humorous Speech Contest at Area Contest",
    },
    {
      id: 3,
      title:
        "Completed Persuasive Influence Pathway In Toastmasters International",
      link: "https://basecamp.toastmasters.org/ti/certificates/eea133f8-7857-47a9-bac1-ef7adea07c6e/",
    },
  ],
  participation: [
    {
      id: 1,
      description:
        "Solved more than 250 coding problems across GeeksforGeeks & LeetCode platform",
      link: "https://codolio.com/profile/JAIKUMAR007",
    },
    {
      id: 2,
      description: "Participated in Odoo Hackathon",
    },
    {
      id: 3,
      description:
        "Actively participated in speech delivery & Contest at Toastmasters during college",
    },
  ],
};

const AchievementItem = ({ achievement, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center mb-3"
    >
      <motion.div
        animate={inView ? { rotate: [0, 15, -5, 0] } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      >
        <svg
          className="w-4 h-4 me-2 text-cyan-500 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <circle cx="10" cy="10" r="8" />
        </svg>
      </motion.div>
      <span>
        <p className="text-sm text-gray-400">
          {" "}
          {achievement.title}
          {achievement.link && (
            <a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline ml-2"
            >
              link
            </a>
          )}
        </p>
      </span>
    </motion.li>
  );
};

const ParticipationItem = ({ item, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center mb-3"
    >
      <motion.div
        animate={inView ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
      >
        <svg
          className="w-4 h-4 me-2 text-yellow-400 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <rect x="4" y="4" width="12" height="12" rx="3" />
        </svg>
      </motion.div>
      <span>
        <p className="text-sm text-gray-400">
          {item.description}{" "}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline ml-2"
            >
              link
            </a>
          )}
        </p>
      </span>
    </motion.li>
  );
};

const AchievementsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-3xl md:text-4xl font-black text-center mb-8 md:mb-12 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text"
        >
          Achievements
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Awards Card */}
          <motion.div
            variants={cardVariants}
            className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-cyan-400/30"
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mb-4 text-xl md:text-2xl font-semibold text-white"
            >
              Recognition & Awards
            </motion.h3>
            <ul className="space-y-3 list-inside">
              {achievementsData.awards.map((award, index) => (
                <AchievementItem
                  key={award.id}
                  achievement={award}
                  index={index}
                />
              ))}
            </ul>
          </motion.div>

          {/* Participation Card */}
          <motion.div
            variants={cardVariants}
            className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-yellow-400/30"
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mb-4 text-xl md:text-2xl font-semibold text-white"
            >
              Extra curricular participation
            </motion.h3>
            <ul className="space-y-3 list-inside">
              {achievementsData.participation.map((item, index) => (
                <ParticipationItem key={item.id} item={item} index={index} />
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
