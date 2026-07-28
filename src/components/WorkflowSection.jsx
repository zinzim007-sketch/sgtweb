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
    description:
      "A panic device, scheduled patrol or operator request initiates a mission.",
  },
  {
    icon: Cpu,
    title: "Mission Planning",
    description:
      "SafeGuardOS evaluates the event and prepares the appropriate response.",
  },
  {
    icon: Plane,
    title: "Drone Deployment",
    description:
      "An autonomous drone launches and travels to the incident location.",
  },
  {
    icon: Monitor,
    title: "Live Intelligence",
    description:
      "Operators receive live video, telemetry and situational awareness.",
  },
  {
    icon: ShieldCheck,
    title: "Response",
    description:
      "Security personnel respond with verified information instead of assumptions.",
  },
];

export default function WorkflowSection() {
  return (
    <section className="bg-white py-28">

      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="section-label">
            HOW IT WORKS
          </p>

          <h2 className="mt-4">
            One connected operational workflow.
          </h2>

          <p className="mt-6 text-lg">
            From the moment an alert is raised, SafeGuard coordinates autonomous
            response, live monitoring and operator decision-making through one
            connected platform.
          </p>

        </motion.div>

        <div className="mt-20">

          <div className="hidden lg:grid lg:grid-cols-5 gap-6">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >

                  <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-white">

                    <Icon size={28} />

                  </div>

                  {index !== steps.length - 1 && (
                    <div className="absolute top-8 left-16 w-full h-px bg-slate-300" />
                  )}

                  <h3 className="mt-8 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-slate-600">
                    {step.description}
                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}