import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Team from '../components/Team'

// Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: 0.12 * i, duration: 0.6, ease: 'easeOut' }})
}

export default function About() {
  // intersection hook for triggering animations
  const [refRoadmap, inViewRoadmap] = useInView({ triggerOnce: true, rootMargin: '-100px' })
  const [refAchieve, inViewAchieve] = useInView({ triggerOnce: true, rootMargin: '-120px' })
  const roadmapControls = useAnimation()
  const achieveControls = useAnimation()

  React.useEffect(() => {
    if (inViewRoadmap) roadmapControls.start('visible')
  }, [inViewRoadmap, roadmapControls])

  React.useEffect(() => {
    if (inViewAchieve) achieveControls.start('visible')
  }, [inViewAchieve, achieveControls])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020024] via-[#090979] to-[#00d4ff] text-white">
      {/* Our Story */}
      <section className="pt-36 pb-16">
        <div className="container-custom flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-semibold mb-6">Our Story</h2>
            <p className="text-sgts-soft leading-relaxed mb-4">
              SafeGuard Technologies was born in Stellenbosch from a simple belief:
              <span className="text-white font-medium"> everyone deserves to feel safe.</span>
            </p>
            <p className="text-sgts-soft leading-relaxed mb-4">
              Africa is urbanizing faster than security can keep up. Fixed cameras
              leave blind spots, ground teams take 15+ minutes to respond, and by
              then the threat has already escalated or disappeared. We set out to
              close that gap —
              <span className="text-white font-medium"> not with more cameras, but with autonomous response.</span>
            </p>
            <p className="text-sgts-soft leading-relaxed mb-4">
              That's why we're building <span className="text-white font-medium">Argus</span>,
              our own autonomous drone fleet, commanded by{' '}
              <span className="text-white font-medium">SafeGuard OS</span> — the
              software platform that turns a <span className="text-white font-medium">panic button</span> press
              into a drone on scene in under 90 seconds.
            </p>
            <p className="text-white font-semibold mt-6">
              SafeGuard Technologies. FASTER RESPONSE. INCREASED SAFETY. STRONGER SENSE OF SECURITY FOR ALL
            </p>
          </div>

          <div className="md:w-1/2">
            <img 
              src="/team.jpg"
              alt="Our story"
              className="rounded-xl shadow-2xl object-cover w-full h-80"
            />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-semibold mb-6 text-left">Mission & Values</h2>
          <p className="text-sgts-soft max-w-3xl mb-8">
            Our mission is to reduce response time and protect communities through precise, reliable systems that act in real time.
            We build with innovation, integrity, and partnership at the core.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[rgba(255,255,255,0.03)] rounded-2xl p-6 backdrop-blur-sm hover:translate-y-[-4px] transition">
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-sgts-soft">Rapid iteration and practical prototypes focused on safety-first design.</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.03)] rounded-2xl p-6 backdrop-blur-sm hover:translate-y-[-4px] transition">
              <h3 className="text-lg font-semibold mb-2">Integrity</h3>
              <p className="text-sgts-soft">Transparent partnerships, secure data handling, dependable systems.</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.03)] rounded-2xl p-6 backdrop-blur-sm hover:translate-y-[-4px] transition">
              <h3 className="text-lg font-semibold mb-2">Safety</h3>
              <p className="text-sgts-soft">Design decisions driven by safety outcomes for people and property.</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.03)] rounded-2xl p-6 backdrop-blur-sm hover:translate-y-[-4px] transition">
              <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
              <p className="text-sgts-soft">Work closely with research institutions, municipalities, and local communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP — FUTURISTIC HORIZONTAL TIMELINE */}
      <section ref={refRoadmap} className="py-24 relative overflow-visible">
        <div className="container-custom">
          <motion.h2
            initial="hidden"
            animate={roadmapControls}
            variants={fadeUp}
            custom={1}
            className="text-4xl font-semibold mb-12 text-left"
          >
            Roadmap — Mission Trajectory
          </motion.h2>

          <div className="relative">
            {/* animated SVG connector */}
            <motion.svg
              initial={{ pathLength: 0 }}
              animate={roadmapControls}
              variants={{
                visible: { pathLength: 1, transition: { duration: 1.6, ease: "easeInOut" } },
                hidden: { pathLength: 0 }
              }}
              className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2"
              height="6"
              viewBox="0 0 1200 6"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#6B46FF" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              <motion.line
                x1="40"
                y1="3"
                x2="1160"
                y2="3"
                stroke="url(#g1)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </motion.svg>

            {/* pulsing light traveling along the line */}
            <motion.div
              initial={{ x: -200 }}
              animate={roadmapControls}
              variants={{
                visible: { x: [ -200, 1200 ], transition: { duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.6 } },
                hidden: { x: -200 }
              }}
              className="hidden md:block absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#6b46ff] shadow-[0_0_20px_rgba(0,212,255,0.3)]"
              style={{ left: -30 }}
            />

            {/* milestone columns */}
            <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* PHASE 1 */}
              <motion.div
                custom={1}
                initial="hidden"
                animate={roadmapControls}
                variants={fadeUp}
                className="flex flex-col items-center md:items-start md:pl-4"
              >
                <div className="relative mb-4">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#6b46ff]/10 blur-xl opacity-70"></div>
                  <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00bcd4] to-[#6b46ff] shadow-2xl text-lg font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Prototype Development</h3>
                <p className="text-sgts-soft max-w-md">
                  Build & test the initial panic button → drone flow. Rapid prototyping and iteration.
                </p>
              </motion.div>

              {/* PHASE 2 */}
              <motion.div
                custom={2}
                initial="hidden"
                animate={roadmapControls}
                variants={fadeUp}
                className="flex flex-col items-center md:items-start md:pl-4"
              >
                <div className="relative mb-4">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#6b46ff]/10 blur-xl opacity-70"></div>
                  <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00bcd4] to-[#6b46ff] shadow-2xl text-lg font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Pilot Phase</h3>
                <p className="text-sgts-soft max-w-md">
                  Real-world testing in Stellenbosch: optimize response, reliability, and integration with local security.
                </p>
              </motion.div>

              {/* PHASE 3 */}
              <motion.div
                custom={3}
                initial="hidden"
                animate={roadmapControls}
                variants={fadeUp}
                className="flex flex-col items-center md:items-start md:pl-4"
              >
                <div className="relative mb-4">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#6b46ff]/10 blur-xl opacity-70"></div>
                  <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00bcd4] to-[#6b46ff] shadow-2xl text-lg font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expansion & Growth</h3>
                <p className="text-sgts-soft max-w-md">
                  Scale the service across campuses and municipalities. Move from pilot to commercial rollout.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS — CINEMATIC CARDS */}
      <section ref={refAchieve} className="py-24 bg-[rgba(0,0,0,0.18)]">
        <div className="container-custom">
          <motion.h2
            initial="hidden"
            animate={achieveControls}
            variants={fadeUp}
            custom={1}
            className="text-4xl font-semibold mb-8 text-left"
          >
            Achievements — Mission Log
          </motion.h2>

          <motion.div
            initial="hidden"
            animate={achieveControls}
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
              hidden: {}
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div
              variants={fadeUp}
              className="relative group bg-gradient-to-br from-[#07102b] to-[#071a3d] border border-white/5 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00d4ff] to-[#6b46ff] shadow-[0_6px_30px_rgba(107,70,255,0.18)]">
                  
                  <img src="/achievement-flag.svg" alt="achievement" className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Nedbank YouthX — 8th Place</h3>
                  <p className="text-sgts-soft text-sm">Recognized among South Africa's top youth-led innovations.</p>
                </div>
              </div>
              <p className="text-sgts-soft">A strong early showing that validated our approach and opened mentorship opportunities.</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeUp}
              className="relative group bg-gradient-to-br from-[#07102b] to-[#071a3d] border border-white/5 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00d4ff] to-[#6b46ff] shadow-[0_6px_30px_rgba(107,70,255,0.18)]">
                  <img src="/achievement-flag.svg" alt="achievement" className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Ideas for Change — Winners 2024</h3>
                  <p className="text-sgts-soft text-sm">Awarded for social innovation.</p>
                </div>
              </div>
              <p className="text-sgts-soft">Public recognition that helped secure early partnerships and momentum.</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeUp}
              className="relative group bg-gradient-to-br from-[#07102b] to-[#071a3d] border border-white/5 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00d4ff] to-[#6b46ff] shadow-[0_6px_30px_rgba(107,70,255,0.18)]">
                  <img src="/achievement-flag.svg" alt="achievement" className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">RISP Regional Innovation Challenge — Winners 2025</h3>
                  <p className="text-sgts-soft text-sm">Recognized for outstanding regional impact.</p>
                </div>
              </div>
              <p className="text-sgts-soft">A milestone that strengthened our case for pilot support and funding.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-10">
        <Team />
      </section>

      {/* Partners */}
      <section className="py-16">
        <div className="container-custom text-left">
          <h3 className="text-3xl font-semibold mb-6">Partners</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
            <div>
              <img src="/launchlab-logo.png" alt="LaunchLab" className="h-20 object-contain mb-3" />
              <p className="text-sgts-soft">LaunchLab helps founders turn ideas into impactful, scalable businesses.</p>
            </div>
            <div>
              <img src="/3bo-logo.png" alt="3BO" className="h-20 object-contain mb-3" />
              <p className="text-sgts-soft">3BO provides hardware for our panic button systems.</p>
            </div>
            <div>
              <img src="/RISP-logo.png" alt="RISP" className="h-20 object-contain mb-3" />
              <p className="text-sgts-soft">Support for researchers and early-stage startups.</p>
            </div>
            <div>
              <img src="/stelliesnetwork-logo.png" alt="Stellies Network" className="h-20 object-contain mb-3" />
              <p className="text-sgts-soft">Community of innovators in Stellenbosch.</p>
            </div>
            <div>
              <img src="/csir-logo.png" alt="CSIR" className="h-20 object-contain mb-3" />
              <p className="text-sgts-soft">National research body supporting our MVP work.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}