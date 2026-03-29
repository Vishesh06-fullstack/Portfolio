import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="p-10 md:p-20 text-center bg-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
      <p className="max-w-2xl mx-auto text-gray-700 text-lg md:text-xl">
        I am a Full Stack Developer passionate about building modern, responsive,
        and user-friendly web applications. I create projects that help businesses
        grow and improve online presence.
      </p>
    </motion.section>
  );
};

export default About;