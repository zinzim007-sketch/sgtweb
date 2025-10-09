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
          SafeGuard Technologies is developing a connected safety ecosystem —
          wearable and mounted <span className="text-white font-medium">panic buttons</span> that
          instantly trigger <span className="text-white font-medium">autonomous drone deployment</span> via the{" "}
          <span className="text-white font-medium">DJI Dock 3</span>.  
          The result: faster response, real-time situational awareness, and a stronger sense of safety for all.
        </motion.p>
      </section>

      {/* Section: Product Video */}
      <section className="py-20 bg-gradient-to-b from-[#03002E] to-[#01011E]">
        <div className="container-custom text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold mb-6"
          >
            DJI Dock 3 Integration
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-sgts-soft max-w-2xl mx-auto mb-10"
          >
            The DJI Dock 3 is a fully autonomous drone station - enabling precision
            takeoffs, landings, and real-time data collection with minimal human input.
            SafeGuard leverages this technology to deliver immediate aerial response
            when emergencies occur.
          </motion.p>

          {/* Clean YouTube Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-full md:w-3/4 rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube-nocookie.com/embed/OwUwgpqgcMA?autoplay=0&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0"
                title="DJI Dock 3"
                allow="autoplay; fullscreen"
                style={{ border: "none" }}
              ></iframe>
            </div>
          </motion.div>
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
              A user presses a wearable or mounted panic button. The system immediately
              communicates the GPS location to the SafeGuard network.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-white/5 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white/10 transition"
          >
            <h4 className="text-xl font-semibold mb-2">2. Drone Deploys from Dock</h4>
            <p className="text-sgts-soft">
              The nearest DJI Dock 3 launches an autonomous drone, which navigates
              directly to the scene — all within seconds.
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
              src="/src/assets/demo.mp4"
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
