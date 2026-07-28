import { motion } from "framer-motion";
 // Replace later with proper dashboard screenshot
import dashboard from "../assets/dashboard.png";

export default function PlatformSection() {
  return (
    <section className="bg-slate-50 py-28">

      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <p className="section-label">
              PLATFORM
            </p>

            <h2 className="mt-4">
              One connected platform.
            </h2>

            <p className="mt-8 text-lg">
              SafeGuard combines autonomous drones,
              intelligent software and real-time
              situational awareness into one operating
              platform for modern security teams.
            </p>

            <div className="space-y-8 mt-12">

              <div>
                <h3>Autonomous Response</h3>

                <p className="mt-2">
                  Deploy aerial assets rapidly during
                  incidents without relying solely on
                  fixed infrastructure.
                </p>
              </div>

              <div>
                <h3>Real-Time Monitoring</h3>

                <p className="mt-2">
                  Live telemetry and video feeds provide
                  operators with immediate situational
                  awareness.
                </p>
              </div>

              <div>
                <h3>SafeGuardOS</h3>

                <p className="mt-2">
                  Connect drones, operators and security
                  infrastructure through one platform.
                </p>
              </div>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <img
              src={dashboard}
              alt="SafeGuard Platform"
              className="rounded-[28px] border border-slate-200 shadow-2xl"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}