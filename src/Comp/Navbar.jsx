import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="fixed w-full z-50 bg-gradient-to-r from-blue-900 to-purple-900 text-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold font-poppins cursor-pointer">Vishesh.dev</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          {["About", "Skills", "Projects", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-blue-300 transition">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.ul
          className="md:hidden bg-purple-800 text-white flex flex-col items-center py-6 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {["About", "Skills", "Projects", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;