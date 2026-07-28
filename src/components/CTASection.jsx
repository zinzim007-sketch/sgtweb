import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-white py-32">

      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >

          <p className="section-label">
            NEXT STEP
          </p>

          <h2 className="mt-4">
            Ready to see SafeGuard in action?
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Discover how autonomous aerial security and SafeGuardOS can improve
            situational awareness, accelerate response times and support modern
            security operations.
          </p>

          <Link
            to="/contact"
            className="btn btn-primary mt-10 inline-flex items-center gap-2"
          >
            Book a Demo

            <ArrowRight size={18} />
          </Link>

        </motion.div>

      </div>

    </section>
  );
}