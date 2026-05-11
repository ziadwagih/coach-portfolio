'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Omar Hassan',
    role: 'Strength Client',
    quote:
      'The structure completely changed the way I train. I became stronger, leaner, and far more disciplined within months.',
  },

  {
    name: 'Youssef Ali',
    role: 'Weight Loss Client',
    featured: true,
    quote:
      'What impressed me most was how sustainable everything felt. The coaching was realistic, structured, and actually built around my lifestyle.',
  },

  {
    name: 'Karim Nabil',
    role: 'Hybrid Training Client',
    quote:
      'I improved my endurance, posture, and overall athletic performance while building a much better physique at the same time.',
  },
]

export default function Testimonials() {
  return (
    <section 
     id="testimonials"
    className="relative py-32 md:py-44 px-6 overflow-hidden">

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
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.02] tracking-tight text-white">
            Trusted By Clients
            <span className="block text-white/50">
              Focused On Real Progress
            </span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-400 max-w-2xl">
            Built through consistency, communication, and coaching
            systems designed around long-term physical development.
          </p>

        </motion.div>

        {/* Testimonials Grid */}
        <div className="mt-24 grid lg:grid-cols-3 gap-7">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[38px]
              border backdrop-blur-2xl p-8 md:p-10
              transition-all duration-700
              hover:-translate-y-2

              ${
                testimonial.featured
                  ? 'border-cyan-400/20 bg-white/[0.045]'
                  : 'border-white/10 bg-white/[0.025]'
              }
              `}
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">

                <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />

              </div>

              {/* Reflection */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.03),transparent)]" />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">

                {/* Quote icon */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="h-[1px] w-8 bg-white/10 group-hover:bg-cyan-400/40 transition-all duration-500" />

                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                      Client Review
                    </span>

                  </div>

                  {testimonial.featured && (
                    <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-200">
                      Featured
                    </div>
                  )}

                </div>

                {/* Quote */}
                <p className="mt-10 text-lg leading-relaxed text-gray-300">
                  “{testimonial.quote}”
                </p>

                {/* Bottom */}
                <div className="mt-12 flex items-center justify-between">

                  <div>

                    <h3 className="text-xl font-semibold text-white">
                      {testimonial.name}
                    </h3>

                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/35">
                      {testimonial.role}
                    </p>

                  </div>

                  {/* Tiny glow dot */}
                  <div className="relative">

                    <div className="h-3 w-3 rounded-full bg-cyan-400/80" />

                    <div className="absolute inset-0 rounded-full bg-cyan-400 blur-md opacity-70" />

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