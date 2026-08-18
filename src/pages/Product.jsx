import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import dashboard from "../assets/dashboard.png";
import drone from "../assets/drone.png";
import CTASection from "../components/CTASection";

export default function Product() {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}

      <section className="pt-40 pb-28">

        <div className="container-custom">

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label"
          >
            THE PLATFORM
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-5 max-w-4xl text-6xl lg:text-7xl font-bold leading-[0.95] tracking-[-0.04em]"
          >
            Autonomous security,
            <br />
            built as one system.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-600"
          >
            SafeGuard combines autonomous aerial systems,
            intelligent software and operational intelligence
            into one connected platform designed for modern
            security operations.
          </motion.p>

          <div className="flex flex-wrap gap-4 mt-10">

            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Book a Demo
            </Link>

            <Link
              to="/"
              className="btn btn-secondary flex items-center gap-2"
            >
              Back Home

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </section>

      {/* ================= PLATFORM ================= */}

      <section className="py-28 bg-slate-50">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="section-label">
              THE PLATFORM
            </p>

            <h2 className="mt-4">
              Everything connected.
              <br />
              One platform.
            </h2>

            <p className="mt-8 text-lg text-slate-600 leading-8 max-w-2xl">
              SafeGuard brings together autonomous aerial response,
              mission planning and operational intelligence through
              one unified operating platform designed for modern
              security teams.
            </p>

          </div>

          <div className="mt-20">

            <img
              src={dashboard}
              alt="SafeGuardOS Dashboard"
              className="rounded-[28px] shadow-2xl border border-slate-200"
            />

          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-20">

            <div>

              <h3>ARGUS</h3>

              <p className="mt-4 text-slate-600">
                Autonomous aerial response for rapid deployment,
                patrol missions and live incident awareness.
              </p>

            </div>

            <div>

              <h3>SafeGuardOS</h3>

              <p className="mt-4 text-slate-600">
                A unified operating system that coordinates
                missions, operators and autonomous assets. It is customisable to the clients needs, and integratable to existing systems.
              </p>

            </div>

            <div>

              <h3>Operational Intelligence</h3>

              <p className="mt-4 text-slate-600">
                Mission outcomes and operator feedback create
                an operational knowledge base that supports
                continuous improvement.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SAFEGUARD OS */}

      <section className="bg-slate-900 text-white py-32">

        <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="section-label text-blue-400">
              SAFEGUARD OS
            </p>

            <h2 className="mt-4 text-white">
              The operating system for autonomous security.
            </h2>

            <p className="mt-8 text-slate-300 text-lg leading-8">
              SafeGuardOS connects missions, operators,
              telemetry and live incident management through
              one unified operational platform.
            </p>

          </div>

          <div>

            <img
              src={dashboard}
              alt="SafeGuardOS Dashboard"
              className="rounded-[24px] shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* ================= ARGUS ================= */}

      <section className="bg-white py-32">

        <div className="container-custom">

          <div className="grid lg:grid-cols-2 gap-24 items-center">

            {/* Drone */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <img
                src={drone}
                alt="ARGUS Autonomous Drone"
                className="w-full max-w-2xl mx-auto"
              />

            </motion.div>

            {/* Text */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <p className="section-label">
                ARGUS
              </p>

              <h2 className="mt-4">
                Autonomous aerial response,
                designed for modern security.
              </h2>

              <p className="mt-8 text-lg text-slate-600 leading-8 max-w-lg">
                ARGUS extends security teams beyond fixed infrastructure,
                providing rapid deployment, aerial visibility and live
                operational awareness when incidents occur.
              </p>

              <div className="mt-12 border-t border-slate-200">

                {[
                  "Autonomous mission execution",
                  "Rapid aerial deployment",
                  "Live HD video streaming",
                  "Mission integration with SafeGuardOS",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex justify-between items-center py-5 border-b border-slate-200"
                  >

                    <span className="text-lg">

                      {item}

                    </span>

                    <ArrowRight
                      size={18}
                      className="text-slate-400"
                    />

                  </div>

                ))}

              </div>

            </motion.div>

          </div>

        </div>

      </section>



      {/* ================= INTELLIGENCE ================= */}

      <section className="bg-slate-50 py-32">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="section-label">
              OPERATIONAL INTELLIGENCE
            </p>

            <h2 className="mt-4">
              Every mission contributes to the next.
            </h2>

            <p className="mt-8 text-lg text-slate-600 leading-8">
              SafeGuard is designed around the idea that operational data should
              continuously improve future operations. Mission outcomes, detection
              events and operator feedback create an intelligence layer that grows
              more valuable over time.
            </p>

          </div>

          <div className="mt-24 grid md:grid-cols-4 gap-10 text-center">

            <div>

              <div className="text-5xl font-bold text-slate-300">

                01

              </div>

              <h3 className="mt-5">
                Detect
              </h3>

            </div>

            <div>

              <div className="text-5xl font-bold text-slate-300">

                02

              </div>

              <h3 className="mt-5">
                Verify
              </h3>

            </div>

            <div>

              <div className="text-5xl font-bold text-slate-300">

                03

              </div>

              <h3 className="mt-5">
                Learn
              </h3>

            </div>

            <div>

              <div className="text-5xl font-bold text-slate-300">

                04

              </div>

              <h3 className="mt-5">
                Improve
              </h3>

            </div>

          </div>

        </div>

      </section>
      <CTASection />

    </div>
  );
}