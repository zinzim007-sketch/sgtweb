
import Hero from "../components/Hero";
import dashboard from "../assets/dashboard.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Company Introduction */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-custom">

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            <div>
              <p className="section-label">
                ABOUT SAFEGUARD TECHNOLOGIES
              </p>

              <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-slate-900">
                A connected approach to autonomous security.
              </h2>
            </div>

            <div className="md:border-l md:border-slate-200 md:pl-10">
              <p className="text-lg leading-8 text-slate-600">
                SafeGuard Technologies is a South African technology company developing next-generation security solutions.
                We bring together engineering, autonomous systems and software development to
                rethink how security operations are conducted.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our technology is designed to support the monitoring
                and protection of people, infrastructure and assets.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SafeGuardOS Showcase */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container-custom">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">

            <div>
              <p className="section-label">
                OUR SOFTWARE PLATFORM
              </p>

              <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Introducing SafeGuardOS.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                SafeGuardOS brings security operations together through
                a connected platform for monitoring, situational awareness
                and operational intelligence.
              </p>
            </div>

            <div>
              <img
                src={dashboard}
                alt="SafeGuardOS operational dashboard"
                className="w-full h-auto rounded-2xl shadow-xl border border-slate-200"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Contact Invitation */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-custom">

          <div className="bg-slate-50 rounded-2xl px-6 py-10 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Interested in learning more?
              </h2>

              <p className="mt-3 text-slate-600 leading-7">
                Get in touch with SafeGuard Technologies to discuss
                our autonomous security solutions.
              </p>
            </div>

            <Link
              to="/contact"
              className="btn btn-primary shrink-0"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>

    </>
  );
}
