import { motion } from "framer-motion";

import csir from "../assets/csir-logo.png";
import launchlab from "../assets/launchlab-logo.png";
import risp from "../assets/RISP-logo.png";
import stellies from "../assets/stelliesnetwork-logo.png";
import threebo from "../assets/3bo-logo.png";

const logos = [
  { src: csir, alt: "CSIR" },
  { src: launchlab, alt: "LaunchLab" },
  { src: risp, alt: "RISP" },
  { src: stellies, alt: "Stellenbosch Network" },
  { src: threebo, alt: "3BO" },
];

export default function LogoStrip() {
  return (
    <section className="bg-white border-t border-slate-100">
      <div className="container-custom py-10">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm uppercase tracking-[0.25em] text-slate-400 font-semibold"
        >
          Supported by
        </motion.p>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-x-14 gap-y-8">

          {logos.map((logo) => (
            <motion.img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto opacity-60 grayscale transition duration-300 hover:grayscale-0 hover:opacity-100"
              whileHover={{ scale: 1.05 }}
            />
          ))}

        </div>

      </div>
    </section>
  );
}