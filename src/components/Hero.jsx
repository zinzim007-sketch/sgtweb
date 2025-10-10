import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background video (fixed stacking order) */}
      <video
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#03002E]/60 -z-10"></div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Autonomous Security. Instant Response.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Faster response. Increased safety. Stronger sense of security for all.
        </motion.p>

        {/* Book a Demo Button (now links to Contact page) */}
        <Link to="/contact">
          <motion.button
            className="relative bg-black text-white font-semibold py-3 px-8 rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.08 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#00BFFF] via-[#3399FF] to-[#00BFFF] opacity-50 blur-xl rounded-lg"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="relative z-10">Book a Demo</span>
          </motion.button>
        </Link>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 text-white text-2xl"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

