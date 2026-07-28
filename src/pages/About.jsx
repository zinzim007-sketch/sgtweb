import { motion } from "framer-motion";
import Team from "../components/Team";
import LogoStrip from "../components/LogoStrip";
import CTASection from "../components/CTASection";

import teamPhoto from "../assets/team.jpg";

export default function About() {
  return (
    <>
      {/* =======================================================
          HERO
      ======================================================= */}

      <section className="pt-24 pb-14 bg-white">

        <div className="container-custom">

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label eyebrow"
          >
            ABOUT SAFEGUARD
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-5 font-bold tracking-tight text-slate-900 leading-none"
            style={{
              fontSize: "clamp(3.4rem, 6vw, 5.6rem)",
            }}
          >
            Building the future
            <br />
            of autonomous security.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero-text mt-8"
          >
            SafeGuard Technologies is building an integrated autonomous
            security platform that combines aerial systems,
            intelligent software and operational intelligence
            into one connected ecosystem.
          </motion.p>

        </div>

      </section>

      {/* =======================================================
          OUR STORY
      ======================================================= */}

      <section className="py-20 bg-slate-50">

        <div className="container-custom">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="section-label eyebrow">
                OUR STORY
              </p>

              <h2 className="mt-4 text-5xl font-bold tracking-tight">
                From an idea to a platform.
              </h2>

              <p className="mt-8 text-lg leading-8 text-slate-600">
                Founded in Stellenbosch, South Africa, SafeGuard began with
                a simple belief: everyone deserves to feel safe.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Traditional security systems often react only after an
                incident has already unfolded. We saw an opportunity to
                rethink that approach by combining autonomous aerial
                systems with intelligent software that gives operators
                greater awareness and faster response capabilities.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Today, SafeGuard is developing an integrated platform
                where ARGUS, SafeGuardOS and operational intelligence
                work together to support modern security operations.
              </p>

            </div>

            <div>

              <img
                src={teamPhoto}
                alt="SafeGuard Team"
                className="w-full rounded-xl border border-slate-200"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =======================================================
          RECOGNITION
      ======================================================= */}

      <section className="py-20 bg-white">

        <div className="container-custom">

          <p className="section-label eyebrow">
            RECOGNITION
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight">
            Recognised for innovation.
          </h2>

          <p className="hero-text mt-6">
            SafeGuard has been recognised through leading innovation
            programmes supporting the next generation of technology ventures.
          </p>

          <div className="grid md:grid-cols-3 gap-12 mt-16 border-t border-slate-200 pt-12">

            <div>

              <p className="text-sm uppercase tracking-[0.25em] text-blue-600">
                2024
              </p>

              <h3 className="mt-4">
                Ideas for Change
              </h3>

              <p className="mt-2 text-slate-500">
                Winner
              </p>

            </div>

            <div>

              <p className="text-sm uppercase tracking-[0.25em] text-blue-600">
                2024
              </p>

              <h3 className="mt-4">
                Nedbank YouthX
              </h3>

              <p className="mt-2 text-slate-500">
                Top 10 Finalist
              </p>

            </div>

            <div>

              <p className="text-sm uppercase tracking-[0.25em] text-blue-600">
                2025
              </p>

              <h3 className="mt-4">
                RISP Regional Innovation Challenge
              </h3>

              <p className="mt-2 text-slate-500">
                Winner
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* =======================================================
          TEAM
      ======================================================= */}

      <Team />

      {/* =======================================================
          PARTNERS
      ======================================================= */}

      <section className="py-20 bg-slate-50">

        <div className="container-custom text-center">

          <p className="section-label eyebrow justify-center">
            SUPPORTED BY
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight">
            Backed by leading organisations.
          </h2>

          <p className="hero-text mt-6 mx-auto">
            SafeGuard has been supported through leading innovation,
            entrepreneurship and research initiatives.
          </p>

          <div className="mt-16">
            <LogoStrip />
          </div>

        </div>

      </section>

      {/* =======================================================
          CTA
      ======================================================= */}

      <section className="bg-white">
        <CTASection />
      </section>

    </>
  );
}