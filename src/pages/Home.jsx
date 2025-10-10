import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import { Shield, Zap, Eye } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: <Shield className="w-10 h-10 text-sgts-blue mb-4" />,
      title: 'Autonomous Drone Response',
      desc: 'Deploys drones instantly to incident locations for live visual coverage.',
    },
    {
      icon: <Eye className="w-10 h-10 text-sgts-blue mb-4" />,
      title: 'Real-Time Monitoring',
      desc: 'Operators receive instant visual feedback and system alerts through our integrated platform.',
    },
    {
      icon: <Zap className="w-10 h-10 text-sgts-blue mb-4" />,
      title: 'Seamless Integration',
      desc: 'Works with existing security infrastructure for smooth adoption and minimal disruption.',
    },
  ]

  return (
    <div>
      <Hero />

      {/* Features / Overview Section */}
      <section className="container-custom py-24 text-center text-white">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Reimagining safety.
        </motion.h2>

        <motion.p
          className="text-sgts-soft max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          SafeGuard Technologies integrates intelligent drones and connected devices
          to transform how security teams respond to emergencies - faster, safer, smarter.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 bg-[#03002E]/60 rounded-2xl shadow-lg hover:bg-[#040045]/70 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-sgts-soft text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
