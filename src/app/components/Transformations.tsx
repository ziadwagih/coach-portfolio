'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const transformations = [
  {
    before: '/transformations/transformation-1-before.webp',
    after: '/transformations/transformation-1-after.webp',
  },

  {
    before: '/transformations/transformation-2-before.webp',
    after: '/transformations/transformation-2-after.webp',
  },

  {
    before: '/transformations/transformation-3-before.webp',
    after: '/transformations/transformation-3-after.webp',
  },

  {
    before: '/transformations/transformation-4-before.webp',
    after: '/transformations/transformation-4-after.webp',
  },
]

export default function Transformations() {
  return (
    <section
  id="transformations"
  className="relative py-32 md:py-44 px-6 overflow-hidden"
>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >

          <span className="text-[11px] uppercase tracking-[0.35em] text-cyan-400/70">
            Transformations
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.02] tracking-tight text-white">
            Visible Results.
            <span className="block text-white/50">
              Built Through Structure.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-400 max-w-2xl">
            Every transformation is the result of consistency,
            intelligent programming, and sustainable coaching systems
            designed for long-term progress.
          </p>

        </motion.div>

        {/* Transformations Grid */}
        <div className="mt-24 grid md:grid-cols-2 gap-8 lg:gap-10">

          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[38px]
              border border-white/10 bg-white/[0.025]
              backdrop-blur-2xl p-4 md:p-5
              transition-all duration-700
              hover:-translate-y-2
              hover:border-cyan-400/20"
            >

              {/* Premium cinematic glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">

                <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

              </div>

              {/* Glass reflection */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.03),transparent)]" />

              {/* Content */}
              <div className="relative z-10">

                {/* Top labels */}
                <div className="mb-5 flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="h-[1px] w-8 bg-white/10 group-hover:bg-cyan-400/40 transition-all duration-500" />

                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                      Client Progress
                    </span>

                  </div>

                  <span className="text-[10px] uppercase tracking-[0.25em] text-cyan-300/60">
                    Real Transformation
                  </span>

                </div>

                {/* Images */}
                <div className="grid grid-cols-2 gap-4">

                  {/* BEFORE */}
                  <div className="relative overflow-hidden rounded-[30px]">

                    {/* Label */}
                    <div className="absolute top-4 left-4 z-20 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80">
                      Before
                    </div>

                    <div className="relative aspect-[4/5] overflow-hidden">

                      <Image
                        src={item.before}
                        alt="Client before transformation"
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    </div>

                  </div>

                  {/* AFTER */}
                  <div className="relative overflow-hidden rounded-[30px]">

                    {/* Label */}
                    <div className="absolute top-4 left-4 z-20 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-100">
                      After
                    </div>

                    <div className="relative aspect-[4/5] overflow-hidden">

                      <Image
                        src={item.after}
                        alt="Client after transformation"
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    </div>

                  </div>

                </div>

                {/* Bottom atmosphere */}
                <div className="mt-6 flex items-center justify-between">

                  <div className="flex items-center gap-3 text-white/35">

                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400/70" />

                    <span className="text-xs uppercase tracking-[0.22em]">
                      Sustainable Progress
                    </span>

                  </div>

                  <div className="text-xs text-white/25">
                    Hybrid Coaching
                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}