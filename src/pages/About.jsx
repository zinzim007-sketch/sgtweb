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
            aerial platform serving security and agriculture,
            combining intelligent software,
            aerial systems and operational intelligence
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
          HOW YOU CAN WORK WITH SAFEGUARD
      ======================================================= */}

      <section className="py-24 bg-white">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="section-label eyebrow">
              HOW YOU CAN WORK WITH SAFEGUARD
            </p>

            <h2 className="mt-4 text-5xl font-bold tracking-tight text-slate-900">
              Everything you need to operate with confidence.
            </h2>

            <p className="hero-text mt-6">
              From autonomous aerial systems to the software and support
              behind them, SafeGuard gives you a flexible way to build
              the capabilities your operation needs.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            {/* ARGUS */}

            <div className="border border-slate-200 rounded-2xl p-8 bg-white">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                ARGUS
              </p>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Autonomous aerial system
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                Acquire the ARGUS autonomous aerial system for your
                security or agricultural operation.
              </p>

              <div className="mt-8 pt-6 border-t border-slate-200">

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Once-off purchase
                </p>

              </div>

            </div>

            {/* SAFEGUARD OS */}

            <div className="border border-slate-200 rounded-2xl p-8 bg-white">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                SAFEGUARD OS
              </p>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Operational platform
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                Manage your aerial systems and operations through
                one connected software platform.
              </p>

              <div className="mt-8 pt-6 border-t border-slate-200">

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Monthly subscription
                </p>

              </div>

            </div>

            {/* DEPLOYMENT */}

            <div className="border border-slate-200 rounded-2xl p-8 bg-white">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                DEPLOYMENT
              </p>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Built around your operation
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                We configure and integrate SafeGuard into your
                existing operational environment.
              </p>

              <div className="mt-8 pt-6 border-t border-slate-200">

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Project-based
                </p>

              </div>

            </div>

            {/* MAINTENANCE */}

            <div className="border border-slate-200 rounded-2xl p-8 bg-white">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                SUPPORT
              </p>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Ongoing support
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                Keep your system operational with maintenance,
                technical support and future upgrades.
              </p>

              <div className="mt-8 pt-6 border-t border-slate-200">

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Ongoing service
                </p>

              </div>

            </div>

          </div>

          <div className="mt-12 text-center">

            <p className="text-slate-500">
              Choose the combination of hardware, software and services
              that best fits your operation.
            </p>

          </div>

        </div>

      </section>

      {/* =======================================================
          RECOGNITION
      ======================================================= */}

      <section className="py-20 bg-slate-50">

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