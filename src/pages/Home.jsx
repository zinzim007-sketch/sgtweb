
import Hero from "../components/Hero";
import dashboard from "../assets/dashboard.png";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Company Introduction */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-4xl mx-auto text-center">

          <p className="section-label">
            ABOUT SAFEGUARD TECHNOLOGIES
          </p>

          <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Advancing security through autonomous technology.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            SafeGuard Technologies develops autonomous security
            solutions that integrate aerial systems, intelligent
            software and real-time situational awareness to help
            protect people, infrastructure and assets.
          </p>

        </div>
      </section>

      {/* SafeGuardOS Showcase */}
      <section className="bg-slate-50 py-20">
        <div className="container-custom">

          <div className="max-w-3xl mx-auto text-center">

            <p className="section-label">
              OUR SOFTWARE PLATFORM
            </p>

            <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Introducing SafeGuardOS.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              SafeGuardOS brings security operations together
              through a connected platform for monitoring,
              situational awareness and operational intelligence.
            </p>

          </div>

          <div className="mt-14 max-w-5xl mx-auto">
            <img
              src={dashboard}
              alt="SafeGuardOS operational dashboard"
              className="w-full h-auto rounded-2xl shadow-xl border border-slate-200"
            />
          </div>

        </div>
      </section>
    </>
  );
}
