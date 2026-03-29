import { motion } from "framer-motion";
import ModernWeb from "../assets/ModernWeb.png"
import wander from "../assets/wander.png"
import rakshTap from "../assets/rakshTap.png"

const projects = [
  {
    name: "Portfolio Website",
    image: ModernWeb,
    link: "#",
  },
  {
    name: "WanderLust Travel-Full Stack",
    image: wander,
    link: "https://major-project-9iei.onrender.com/listings",
  },
  {
    name: "Raksh Taps - Women Safety Web App",
    image: rakshTap,
    link: "https://raksha-tap.netlify.app/",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="p-10 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.name} className="w-full h-64 object-cover"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-white text-xl font-bold">{project.name}</h3>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;