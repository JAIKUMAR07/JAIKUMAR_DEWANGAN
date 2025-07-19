import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const badgesData = [
  {
    id: 1,
    name: "Toastmasters International",
    description: "Persuasive Influence Path Completion",
    image:
      "https://toastmaster-prod-edx-storage.s3.amazonaws.com/badges/pathways-badge-persuasive-influence-proficient.svg",
    path: "https://basecamp.toastmasters.org/public/social/1eaabd80-ab90-4df3-af36-c67ee76d5357/",
    color: "bg-gradient-to-br from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    name: "HackerRank",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.04oGvilaqzyDwqlhHrF8bAHaHa?pid=Api&P=0&h=180",
    description: "4-Star in C Language",
    path: "https://www.hackerrank.com/profile/jaikumar007",
    color: "bg-gradient-to-br from-emerald-500 to-green-400",
  },
  {
    id: 3,
    name: "Toastmasters International",
    description: "Level 5 Completion",
    image:
      "https://toastmaster-prod-edx-storage.s3.amazonaws.com/badges/pathways-badge-persuasive-influence-level-5.svg",
    path: "https://basecamp.toastmasters.org/public/social/0c831874-032f-4f95-83cc-ecf9106ba3e1/",
    color: "bg-gradient-to-br from-purple-500 to-indigo-400",
  },
];

const BadgeItem = ({ badge, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateY: 180 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
        delay: index * 0.15,
        duration: 0.8,
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.05,
      rotateY: 10,
      boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: index * 0.15 + 0.3,
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      rotate: [0, 15, -10, 0],
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover="hover"
      variants={cardVariants}
      className="h-full"
    >
      <motion.a
        href={badge.path}
        target="_blank"
        rel="noopener noreferrer"
        variants={hoverVariants}
        className="block bg-gray-800/50 rounded-xl p-5 flex flex-col items-center h-full text-center shadow-lg hover:shadow-cyan-500/20 transition-all border border-gray-700 hover:border-cyan-400/50"
      >
        <motion.div
          className={`w-24 h-24 rounded-full ${badge.color} flex items-center justify-center mb-4 overflow-hidden shadow-inner`}
          variants={imageVariants}
          whileHover="hover"
        >
          <motion.img
            src={badge.image}
            alt={badge.name}
            className="w-16 h-16 object-contain"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.5, type: "spring" }}
          />
        </motion.div>

        <motion.h4
          className="text-white font-semibold text-lg mb-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.6 }}
        >
          {badge.name}
        </motion.h4>

        <motion.p
          className="text-gray-300 text-sm"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.7 }}
        >
          {badge.description}
        </motion.p>

        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cyan-400/30 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.4 }}
        />
      </motion.a>
    </motion.div>
  );
};

const BadgesSection = () => {
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
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text"
        >
          Badges & Achievements
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {badgesData.map((badge, index) => (
            <BadgeItem key={badge.id} badge={badge} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BadgesSection;
