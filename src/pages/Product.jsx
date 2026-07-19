import React from "react";
import { motion } from "framer-motion";

export default function Product() {
  return (
    <div className="bg-[#03002E] text-white">
      {/* Section: Overview */}
      <section className="pt-36 pb-20 container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-6"
        >
          Our Technology
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-sgts-soft max-w-3xl leading-relaxed"
        >
          SafeGuard Technologies is building a connected aerial security
          ecosystem for Africa — wearable and mounted{" "}
          <span className="text-white font-medium">panic buttons</span> that
          instantly trigger{" "}
          <span className="text-white font-medium">autonomous drone response</span>,
          commanded by our proprietary platform,{" "}
          <span className="text-white font-medium">SafeGuard OS</span>. The
          result: faster response, real-time situational awareness, and a
          stronger sense of safety for people and infrastructure alike.
        </motion.p>
      </section>

      {/* Section: Argus + SafeGuard OS */}
      <section className="py-20 bg-gradient-to-b from-[#03002E] to-[#01011E]">
        <div className="container-custom">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold mb-10 text-center"
          >
            Hardware-agnostic today. Software-defined tomorrow.
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-white/5 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white/10 transition"
            >
              <h4 className="text-xl font-semibold mb-2 text-sgts-blue">Argus</h4>
              <p className="text-sgts-soft">
                Our autonomous drone fleet, purpose-built for security
                response. We're moving beyond off-the-shelf hardware to
                custom aerial nodes designed for rapid deployment and
                persistent patrol — while running proven hardware like the
                DJI Phantom 4 Pro in active operation today.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-white/5 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white/10 transition"
            >
              <h4 className="text-xl font-semibold mb-2 text-sgts-blue">SafeGuard OS</h4>
              <p className="text-sgts-soft">
                The command layer that makes any aerial node intelligent,
                connected, and responsive — threat detection, predictive
                patrol routing, real-time alert management, and a live
                client monitoring dashboard, all in one platform.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: How It Works */}
      <section className="py-24 container-custom">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-10"
        >
          How It Works
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-white/5 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white/10 transition"
          >
            <h4 className="text-xl font-semibold mb-2">1. Panic Button Triggered</h4>
            <p className="text-sgts-soft">
              A user presses a wearable or mounted panic button. The system
              immediately communicates the GPS location to the SafeGuard
              network.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-white/5 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white/10 transition"
          >
            <h4 className="text-xl font-semibold mb-2">2. Argus Deploys</h4>
            <p className="text-sgts-soft">
              The nearest Argus drone launches autonomously and navigates
              directly to the scene — all within seconds, coordinated by
              SafeGuard OS.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-white/5 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white/10 transition"
          >
            <h4 className="text-xl font-semibold mb-2">3. Real-Time Response</h4>
            <p className="text-sgts-soft">
              Live footage and alerts are sent instantly to response teams,
              empowering faster, more effective decision-making.
            </p>
          </motion.div>
        </div>

        {/* Demo Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <div className="w-full md:w-3/4 rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <video
              src="/demo.mp4"
              className="w-full aspect-video"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
        </motion.div>
      </section>
    </div>
  );
}