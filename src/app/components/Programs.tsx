'use client'

import { motion } from 'framer-motion'

const programs = [
  {
    title: 'Weight Loss',
    description:
      'Structured systems focused on sustainable fat loss, conditioning, and physique transformation.',
  },
  {
    title: 'Strength Training',
    description:
      'Performance-driven programming built to increase strength, power, and overall athletic capability.',
  },
  {
    title: 'Corrective Training',
    description:
      'Corrective exercises and posture-focused training designed to improve movement quality and reduce limitations.',
  },
  {
    title: 'Endurance Development',
    description:
      'Conditioning systems built to improve stamina, cardiovascular performance, and physical resilience.',
  },
  {
    title: 'Nutrition Plans',
    description:
      'Personalized nutrition guidance structured around performance, recovery, and sustainable results.',
  },
  {
    title: 'Self-Guided Programs',
    description:
      'Independent training programs designed for clients who want structured systems without ongoing follow-up.',
  },
]

export default function Programs() {
  return (
    <section 
    id="programs"
    className="relative py-32 md:py-40 px-6 overflow-hidden">

    
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >

          <span className="text-[11px] uppercase tracking-[0.35em] text-cyan-400/70">
            Programs
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.02] tracking-tight text-white">
            Premium Coaching Systems
            <span className="block text-white/50">
              Designed For Performance
            </span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-400 max-w-2xl">
            Every system is carefully structured to improve performance,
            physique, movement quality, and long-term sustainability —
            without unnecessary complexity.
          </p>

        </motion.div>

        {/* Grid */}
        <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-7">

          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.025] backdrop-blur-2xl p-8 transition-all duration-700 hover:-translate-y-2 hover:border-cyan-400/20 hover:bg-white/[0.04]"
            >

              {/* Premium glow layer */}
              <div className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100">

                {/* Main glow */}
                <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

                {/* Secondary subtle depth */}
                <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

              </div>

              {/* Glass reflection */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.03),transparent)]" />

              {/* Content */}
              <div className="relative z-10">

                {/* Tiny line */}
                <div className="w-10 h-[1px] bg-white/15 group-hover:bg-cyan-400/40 transition-all duration-500" />

                {/* Title */}
                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white transition-all duration-500 group-hover:text-cyan-100">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="mt-5 leading-relaxed text-gray-400 transition-all duration-500 group-hover:text-gray-300">
                  {program.description}
                </p>

                {/* Bottom subtle indicator */}
                <div className="mt-10 flex items-center gap-3 text-sm text-white/30 group-hover:text-cyan-300/70 transition-all duration-500">

                  <div className="h-[1px] w-8 bg-white/10 group-hover:bg-cyan-400/40 transition-all duration-500" />

                  <span className="tracking-[0.2em] uppercase">
                    Program
                  </span>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}