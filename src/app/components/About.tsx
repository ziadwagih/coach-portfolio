'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section 
    id="about"
    className="relative py-32 md:py-40 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-[420px_1fr] gap-20 lg:gap-28 items-center">

          {/* Portrait Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative mx-auto lg:mx-0"
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full" />

            {/* Portrait Card */}
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.025] backdrop-blur-2xl">

              <div className="aspect-[4/5] bg-gradient-to-b from-[#111827] to-[#0B1120] flex items-end p-8">

                <div>
                  <p className="text-xs tracking-[0.35em] uppercase text-white/40">
                    NASM Certified Coach
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-white">
                    Shehab Ahmed
                  </h3>
                </div>

              </div>

            </div>

          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
          >

            {/* Label */}
            <span className="text-[11px] uppercase tracking-[0.35em] text-cyan-400/70">
              About
            </span>

            {/* Main Heading */}
            <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white max-w-3xl">
              Coaching Designed For
              <span className="block text-white/55">
                Strength, Performance,
                and Longevity
              </span>
            </h2>

            {/* Description */}
            <div className="mt-10 space-y-6 max-w-2xl">

              <p className="text-lg leading-relaxed text-gray-400">
                Shehab specializes in hybrid athletic development,
                functional strength training, corrective exercises,
                and body posture improvement designed to enhance
                both movement quality and overall physique performance.
              </p>

              <p className="text-gray-500 leading-relaxed">
                Every coaching system is built around sustainable progress,
                structured programming, and long-term physical development —
                helping clients perform better, move better, and look better.
              </p>

            </div>

            {/* Stats Row */}
            <div className="mt-14 flex flex-wrap gap-10 md:gap-16">

              <div>
                <h3 className="text-4xl font-bold text-white">
                  7+
                </h3>

                <p className="mt-2 text-sm text-gray-500 uppercase tracking-[0.2em]">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">
                  NASM
                </h3>

                <p className="mt-2 text-sm text-gray-500 uppercase tracking-[0.2em]">
                  Certified CPT
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">
                  Hybrid
                </h3>

                <p className="mt-2 text-sm text-gray-500 uppercase tracking-[0.2em]">
                  Training Focus
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}