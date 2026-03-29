// import { FaGithub, FaLinkedin, FaFiverr } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si"; // Fiverr icon

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white text-center py-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-lg font-semibold mb-2">Vishesh Pratap Singh</h2>
      <p className="text-gray-400 mb-4">Full Stack Developer | Modern Web Experiences</p>
      <div className="flex justify-center gap-4 mb-4 text-xl">
        <a href="https://github.com/Vishesh06-fullstack" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/vishesh-pratap-singh-43ba27211/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaLinkedin /></a>
        {/* <a href="https://fiverr.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
  <SiFiverr />
</a> */}
      </div>
      <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Vishesh. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;