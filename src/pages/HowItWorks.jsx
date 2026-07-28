import { motion } from "framer-motion";
import {
  Bell,
  Cpu,
  Plane,
  Monitor,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    icon: Bell,
    title: "Alert",
    text: "An incident is detected through a panic device, scheduled patrol or operator request.",
  },
  {
    icon: Cpu,
    title: "SafeGuardOS",
    text: "The platform receives the event and determines the appropriate autonomous response.",
  },
  {
    icon: Plane,
    title: "Drone Deployment",
    text: "An autonomous drone launches and travels to the incident location.",
  },
  {
    icon: Monitor,
    title: "Live Intelligence",
    text: "Operators receive live video, telemetry and aerial situational awareness.",
  },
  {
    icon: ShieldCheck,
    title: "Response",
    text: "Security personnel make informed decisions using verified real-time information.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-28">

      <div className="container-custom">

        <div className="max-w-3xl">

          <p className="section-label">
            WORKFLOW
          </p>

          <h2 className="mt-4">
            From detection to response.
          </h2>

          <p className="mt-6 text-lg">
            SafeGuard coordinates autonomous drones,
            intelligent software and security teams through
            one connected operational workflow.
          </p>

        </div>

        <div className="mt-20 grid lg:grid-cols-5 gap-10">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                }}
                className="relative"
              >

                <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center">

                  <Icon size={28} />

                </div>

                {index !== steps.length - 1 && (

                  <div className="hidden lg:block absolute top-8 left-20 h-[2px] w-full bg-slate-200" />

                )}

                <h3 className="mt-8">
                  {step.title}
                </h3>

                <p className="mt-4">
                  {step.text}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}