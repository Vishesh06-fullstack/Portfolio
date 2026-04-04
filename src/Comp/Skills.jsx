import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "Bootstrap",
  "API Integration",
  "Java",
  "SQL",
  "Firebase",
  "Git & GitHub",
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="p-10 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;