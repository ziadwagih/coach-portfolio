'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section 
    id="contact"
    className="relative py-40 md:py-52 px-6 overflow-hidden">

      <div className="max-w-5xl mx-auto text-center">

        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            text-[10px]
            md:text-[11px]

            uppercase
            tracking-[0.7em]

            text-white/25
          "
        >
          START YOUR TRANSFORMATION
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            mt-8

            text-[44px]
            sm:text-[64px]
            md:text-[90px]
            lg:text-[120px]

            font-bold
            tracking-[-0.08em]
            leading-[0.92]
          "
        >

          <span className="text-white">
            Build Your
          </span>

          <span
            className="
              block

              bg-gradient-to-r
              from-white
              via-cyan-200
              to-blue-500

              bg-clip-text
              text-transparent
            "
          >
            Strongest Physique.
          </span>

        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-10

            max-w-2xl

            text-sm
            md:text-lg

            leading-relaxed

            text-white/35
          "
        >
          Structured coaching designed to help you build strength,
          improve movement quality, and create sustainable
          long-term physical progress.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9 }}
          viewport={{ once: true }}
          className="
            mt-14

            flex
            flex-col
            sm:flex-row

            items-center
            justify-center

            gap-4
          "
        >

          {/* WhatsApp */}
          <a
            href="https://wa.me/201125842192"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              overflow-hidden

              rounded-full

              bg-white

              px-8
              py-4

              text-sm
              font-medium

              text-black

              transition-all
              duration-500

              hover:scale-[1.02]
              hover:shadow-[0_0_80px_rgba(255,255,255,0.12)]
            "
          >

            {/* Reflection */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.4),transparent)]" />

            <span className="relative z-10">
              Start Coaching
            </span>

          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/shehab__ahmedd?igsh=dmJldnY5aGVldGVy"
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full

              border
              border-white/10

              bg-white/[0.03]

              px-8
              py-4

              text-sm
              font-medium

              text-white/60

              transition-all
              duration-500

              hover:border-cyan-400/20
              hover:bg-white/[0.05]
              hover:text-white
            "
          >
            View Instagram
          </a>

        </motion.div>

      </div>

    </section>
  )
}