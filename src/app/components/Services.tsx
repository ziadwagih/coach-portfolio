'use client'

import { motion } from 'framer-motion'

const services = [
  {
    duration: '3 Months',
    price: '2000 EGP',
    description:
      'A structured coaching system designed to build consistency, improve physique, and establish long-term progress.',
    features: [
      'Personalized training program',
      'Nutrition guidance',
      'Corrective exercises & posture work',
      'Weekly progress adjustments',
      'Exercise form feedback',
    ],
  },

  {
    duration: '6 Months',
    price: '3500 EGP',
    featured: true,
    description:
      'The most balanced transformation system — combining accountability, progression, and long-term physique development.',
    features: [
      'Everything included in 3 Months',
      'Long-term progression strategy',
      'Priority support & faster adjustments',
      'Video check-ins & follow-up guidance',
      'Recovery & lifestyle optimization',
      'Higher accountability structure',
    ],
  },

  {
    duration: '12 Months',
    price: '6000 EGP',
    description:
      'A complete premium coaching experience focused on elite-level transformation, performance, and sustainability.',
    features: [
      'Full annual transformation system',
      'Advanced physique optimization',
      'Continuous program evolution',
      'Performance & endurance integration',
      'Ongoing coaching refinement',
      'Maximum long-term accountability',
    ],
  },

  {
    duration: 'Self-Guided',
    price: '500 EGP',
    description:
      'A professionally structured standalone program built for independent clients who want a complete system without follow-up.',
    features: [
      'Structured training system',
      'Goal-specific programming',
      'Easy-to-follow format',
      'Progressive overload built-in',
      'Designed for independent execution',
    ],
  },
]

export default function Services() {
  return (
    <section
  id="services"
  className="relative py-32 md:py-40 px-6 overflow-hidden"
>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >

          <span className="text-[11px] uppercase tracking-[0.35em] text-cyan-400/70">
            Services
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.02] tracking-tight text-white">
            Coaching Systems
            <span className="block text-white/50">
              Built For Real Transformation
            </span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-400 max-w-2xl">
            Every coaching system is structured around measurable progress,
            movement quality, physique development, and sustainable long-term results.
          </p>

        </motion.div>

        {/* Services Grid */}
        <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-7">

          {services.map((service, index) => (
            <motion.div
              key={service.duration}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className={`
                group relative overflow-hidden rounded-[36px]
                border backdrop-blur-2xl p-8
                transition-all duration-700 flex flex-col

                ${
                  service.featured
                    ? 'border-cyan-400/30 bg-white/[0.055] scale-[1.02] hover:border-cyan-300/50'
                    : 'border-white/10 bg-white/[0.025] hover:border-cyan-400/20 hover:bg-white/[0.04]'
                }

                hover:-translate-y-2
              `}
            >

              {/* Premium cinematic glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">

                <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

              </div>

              {/* Reflection */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.03),transparent)]" />

              {/* Featured badge */}
              {service.featured && (
                <div className="absolute top-5 right-5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-300">

                  Most Popular

                </div>
              )}

              <div className="relative z-10 flex flex-col h-full">

                {/* Tiny line */}
                <div className="w-10 h-[1px] bg-white/15 group-hover:bg-cyan-400/40 transition-all duration-500" />

                {/* Duration */}
                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white">
                  {service.duration}
                </h3>

                {/* Price */}
                <div className="mt-5 flex items-end gap-2">

                  <span className="text-4xl font-bold tracking-tight text-white">
                    {service.price}
                  </span>

                </div>

                {/* Description */}
                <p className="mt-6 leading-relaxed text-gray-400 group-hover:text-gray-300 transition-all duration-500">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-8 space-y-4">

                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >

                      <div className="mt-[7px] h-1.5 w-1.5 rounded-full bg-cyan-400/70 shrink-0" />

                      <span className="leading-relaxed">
                        {feature}
                      </span>

                    </div>
                  ))}

                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`
                    mt-10 w-full rounded-full px-5 py-3
                    text-sm font-medium text-center
                    transition-all duration-500

                    ${
                      service.featured
                        ? 'bg-white text-black hover:bg-cyan-100'
                        : 'border border-white/10 bg-white/[0.03] text-white hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-100'
                    }
                  `}
                >

                  Apply Now

                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}