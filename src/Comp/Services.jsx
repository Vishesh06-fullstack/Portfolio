import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaBug, FaServer , FaMagnifyingGlass } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const services = [
  {
    title: "Website Development",
    desc: "Modern, responsive websites with React & Node.js.",
    icon: <FaLaptopCode size={30} />,
  },
  {
    title: "Landing Pages",
    desc: "High-converting landing pages for businesses & startups.",
    icon: <FaMobileAlt size={30} />,
  },
  {
    title: "Bug Fixing",
    desc: "Fix errors and improve website performance.",
    icon: <FaBug size={30} />,
  },
  {
    title: "API Integration",
    desc: "Connect frontend with APIs & dynamic data handling.",
    icon: <FaServer size={30} />,
  },
  {
    title : "SEO optimization",
    desc : "Improve website visibility and search engine ranking",
    icon : <FaMagnifyingGlass size={30} />
  }
];

const Services = () => {
  return (
    <motion.section
      id="services"
      className="p-10 bg-gray-100 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Services</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-2xl transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4 text-blue-500">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;