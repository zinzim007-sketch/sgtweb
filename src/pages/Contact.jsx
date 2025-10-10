import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  // Handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://sgtweb-rpfo.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div>
      <section className="py-24 bg-[#0A083A] text-white">
        <div className="container-custom max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold mb-4"
          >
            Get in Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-sgts-soft mb-6"
          >
            We’d love to hear from you. For demos, partnerships, or press inquiries, use the form below.
          </motion.p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white/10 text-white px-4 py-3 rounded outline-none focus:ring-2 focus:ring-sgts-blue"
              placeholder="Your name"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white/10 text-white px-4 py-3 rounded outline-none focus:ring-2 focus:ring-sgts-blue"
              placeholder="Your email"
              type="email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-white/10 text-white px-4 py-3 rounded outline-none focus:ring-2 focus:ring-sgts-blue"
              rows="6"
              placeholder="Message"
              required
            ></textarea>

            {/* Cool animated button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-sgts-blue text-[#03002E] px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
            >
              <span className="relative z-10">
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                  ? "Sent"
                  : status === "error"
                  ? "Error"
                  : "Send Message"}
              </span>
              <motion.div
                initial={{ x: "-100%" }}
                animate={
                  status === "sending"
                    ? { x: 0 }
                    : { x: "-100%" }
                }
                transition={{ repeat: Infinity, duration: 1 }}
                className="absolute inset-0 bg-white/30 blur-md"
              />
            </motion.button>
          </form>

          {/* Contact details */}
          <div className="mt-10 text-left text-sgts-soft">
            <p>Email: <span className="text-white font-medium">tumelomokoena050@gmail.com</span></p>
            <p>Phone number: <span className="text-white font-medium">+27 69 833 5696</span></p>
          </div>
        </div>
      </section>
    </div>
  );
}

