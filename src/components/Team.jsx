import { motion } from "framer-motion";

import tumelo from "../assets/tumelo.jpg";
import eesa from "../assets/eesa.jpg";
import alexander from "../assets/alexander.jpg";
import zinzi from "../assets/zinzi.jpg";
import hangandiiwe from "../assets/hangandiiwe.jpg";

const members = [
  {
    name: "Tumelo Mokoena",
    role: "Chief Executive Officer",
    image: tumelo,
  },
  {
    name: "Eesa Sulaiman",
    role: "Chief Technology Officer",
    image: eesa,
  },
  {
    name: "Alexander Warrington",
    role: "Systems & Mechanical Developer",
    image: alexander,
  },
  {
    name: "Zinzi Mdhluli",
    role: "Software & Backend Developer",
    image: zinzi,
  },
  {
    name: "Hangandiiwe Mamphaga",
    role: "Finance & Operations Lead",
    image: hangandiiwe,
  },
];

export default function Team() {
  return (
    <section className="py-20 bg-white">

      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="section-label eyebrow">
            OUR TEAM
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight">
            Meet the people behind SafeGuard.
          </h2>

          <p className="hero-text mt-6">
            A multidisciplinary team bringing together expertise in
            autonomous systems, software engineering, finance and
            business strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">

          {members.map((member, index) => (

            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >

              <div className="overflow-hidden rounded-xl bg-slate-100 aspect-[4/5]">

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                />

              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-900 leading-snug">

                {member.name}

              </h3>

              <p className="mt-1 text-sm text-slate-500 leading-relaxed">

                {member.role}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}