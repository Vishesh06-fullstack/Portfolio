import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-900 to-purple-900 text-white"
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4 font-poppins"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Vishesh
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-6 max-w-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Full Stack Web Developer | React, Node.js & Modern Web Applications
      </motion.p>
      <motion.a
        href="#contact"
        className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold"
        whileHover={{ scale: 1.1 }}
      >
        Hire Me
      </motion.a>
    </section>
  );
};

export default Hero;