import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Persuasive_Influence from "../../../public/certificates/Persuasive_Influence_path.png";

const certificates = [
  {
    title: "Introduction to Cybersecurity Fundamentals",
    issuer: "Coursera",
    description: "Fundamentals of cybersecurity and cyber threats",
    image:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~6I9DUWATWO62/CERTIFICATE_LANDING_PAGE~6I9DUWATWO62.jpeg",
    path: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~6I9DUWATWO62/CERTIFICATE_LANDING_PAGE~6I9DUWATWO62.jpeg",
  },
  {
    title: "Generative AI by Microsoft and LinkedIn",
    issuer: "Microsoft and LinkedIn",
    description: "Foundational Generative AI & Prompt Engineering",
    image:
      "https://media.licdn.com/dms/image/v2/D4D22AQH5ghPIebWOpA/feedshare-shrink_1280/feedshare-shrink_1280/0/1711365454846?e=2147483647&v=beta&t=Xsai9s9u7sxqRfbI1xXLjg7C7h2wWuJPa-fYs_Y76d0",
    path: "https://www.linkedin.com/learning/certificates/db27627f83272e5e0924071a5e99c478b20740662fdfc92bee097e0387e64638",
  },
  {
    title: "Persuasive Influence Path Completion",
    issuer: "Toastmasters International",
    description: "Public Speaking, Leadership, Team work, Completed 5 level",
    image: Persuasive_Influence,
    path: "https://basecamp.toastmasters.org/ti/certificates/eea133f8-7857-47a9-bac1-ef7adea07c6e/",
  },
];

const CertificateCard = ({ cert, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -45, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        delay: index * 0.2,
        duration: 1,
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -15,
      scale: 1.05,
      rotateY: 5,
      boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.3)",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: index * 0.2 + 0.4,
        type: "spring",
        stiffness: 120,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2 + 0.6,
        duration: 0.6,
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
      className="h-full max-w-sm mx-auto perspective-1000"
    >
      <motion.a
        href={cert.path}
        target="_blank"
        rel="noopener noreferrer"
        variants={hoverVariants}
        className={`block bg-gradient-to-br ${cert.color} rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm h-full border-2 border-transparent hover:border-white/20 relative group`}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0 } : {}}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="relative h-48 overflow-hidden"
          variants={imageVariants}
        >
          <motion.img
            className="w-full h-full object-cover"
            src={cert.image}
            alt={cert.title}
            initial={{ scale: 0.9, opacity: 1 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
          />
        </motion.div>

        <motion.div
          className="p-5 bg-gray-900/80 backdrop-blur-sm"
          variants={contentVariants}
        >
          <motion.h2
            className="text-xl font-bold text-green-300 mb-2"
            animate={inView ? { x: [0, 5, -2, 0] } : {}}
            transition={{ delay: index * 0.2 + 0.7, duration: 0.6 }}
          >
            {cert.title}
          </motion.h2>

          <motion.div
            className="flex items-center mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.8 }}
          >
            <motion.span
              className="block w-2 h-2 rounded-full bg-cyan-400 mr-2"
              animate={inView ? { scale: [1, 1.5, 1] } : {}}
              transition={{ delay: index * 0.2 + 0.85, duration: 0.6 }}
            />
            <motion.p className="text-cyan-200 font-medium">
              {cert.issuer}
            </motion.p>
          </motion.div>

          <motion.p
            className="text-gray-200 text-sm"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.9 }}
          >
            {cert.description}
          </motion.p>
        </motion.div>
      </motion.a>
    </motion.div>
  );
};

const CertificatesSection = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 1,
      },
    },
  };

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-cyan-400 blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full bg-blue-400 blur-3xl opacity-20"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text"
        >
          My Certifications
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, index) => (
            <CertificateCard key={index} cert={cert} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
