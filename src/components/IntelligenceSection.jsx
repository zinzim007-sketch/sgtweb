import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Detection",
    text: "Autonomous patrols continuously monitor environments and identify events that require attention.",
  },
  {
    number: "02",
    title: "Verification",
    text: "Operators review live telemetry and video feeds to verify incidents with greater situational awareness.",
  },
  {
    number: "03",
    title: "Learning",
    text: "Operational data, alert outcomes and operator feedback contribute to improving future system performance.",
  },
];

export default function IntelligenceSection() {
  return (
    <section className="bg-slate-900 text-white py-32">
    

      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >

          <p className="section-label">
            CONTINUOUS IMPROVEMENT
          </p>

          <h2 className="mt-4 text-white">
            Every patrol makes the system smarter.
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            Every mission contributes valuable operational data. Detection events,
            operator feedback and mission outcomes create a growing knowledge base
            that supports continuous improvement over time.
          </p>

        </motion.div>

        <div className="mt-20 space-y-12">

          {steps.map((step) => (

            <div
              key={step.number}
              className="flex gap-10 border-b border-slate-700 pb-10"
            >

              <div className="text-5xl font-bold text-slate-600 w-24">

                {step.number}

              </div>

              <div>

                
                <h3 className="text-white">{step.title}</h3>

                <p className="mt-4 max-w-2xl text-slate-300">

                  {step.text}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}