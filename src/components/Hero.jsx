import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import drone from "../assets/argus.png";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background glow */}
      

      <div className="container-custom min-h-[90vh] flex items-center pt-28 pb-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">
              SAFEGUARD TECHNOLOGIES.
            </p>

            <h1 className="mt-5 font-bold leading-[0.95] tracking-[-0.04em] text-slate-900">
              AUTONOMOUS
              <br />
              AERIAL
              <br />
              SECURITY.
            </h1>
            
            <h2 className="mt-2 text-4xl font-light tracking-tight text-slate-500">
              for Africa.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              SafeGuard combines autonomous drones, intelligent detection and real-time situational awareness to
              protect people, infrastructure and critical assets.
              
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/contact"
                className="btn btn-primary"
              >
                Book a Demo
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/product"
                className="btn btn-secondary"
              >
                Learn More
              </Link>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative flex justify-center"
          >

            <motion.img
              src={drone}
              alt="SafeGuard autonomous drone"
              className="w-full max-w-[800px] drop-shadow-2xl select-none"
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              draggable={false}
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}