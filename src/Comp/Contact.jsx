import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cszhbl7",       // Your Service ID
        "template_6mish6v",      // Your Template ID
        form.current,            // form reference
        "QNfdMxDBsden-kj--"     // Your Public Key
      )
      .then(
        () => {
          alert("Message sent! ✅");
          form.current.reset();
        },
        (err) => {
          alert("Failed to send ❌");
          console.log(err);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="p-10 text-center bg-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto flex flex-col gap-4">
        <input type="text" name="name" placeholder="Your Name" required className="p-3 border rounded"/>
        <input type="email" name="email" placeholder="Your Email" required className="p-3 border rounded"/>
        <textarea name="message" placeholder="Your Message" required className="p-3 border rounded"></textarea>
        <button className="bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition font-semibold">
          Send Message
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;