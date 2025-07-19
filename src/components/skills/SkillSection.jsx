import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillSection = ({ title, skillList }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
    hover: {
      y: -5,
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0, 255, 255, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="container px-5 py-10 mx-auto" ref={ref}>
      <motion.h1
        variants={titleVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center lg:text-left mx-3 mb-8 text-2xl md:text-3xl dark:text-gray-300 font-semibold"
      >
        {title}
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-wrap m-4"
      >
        {skillList.map(({ id, image, title, level }) => (
          <motion.div
            key={id}
            variants={skillVariants}
            whileHover="hover"
            className="p-4 w-1/2 md:w-1/6"
          >
            <motion.div className="h-full bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-md cursor-pointer flex flex-col items-center p-4 border border-gray-700 hover:border-cyan-400/30 transition-all duration-300">
              <motion.img
                className="w-20 h-20 object-contain mb-3"
                src={image}
                alt={title}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ rotate: [0, 10, -5, 0] }}
              />
              <div className="w-full text-center">
                <motion.h2
                  className="text-lg font-semibold text-gray-300 mb-1"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  {title.substring(0, 20)}
                </motion.h2>
                <motion.p
                  className="text-sm font-medium text-cyan-500"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  {level}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillSection;
