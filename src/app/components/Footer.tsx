'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-24 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Top Line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Content */}
        <div
          className="
            mt-12

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-10
          "
        >

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >

            {/* Name */}
            <h3
              className="
                text-2xl
                md:text-3xl

                font-bold
                tracking-[-0.06em]

                bg-gradient-to-r
                from-white
                via-cyan-100
                to-blue-400

                bg-clip-text
                text-transparent
              "
            >
              Shehab Ahmed
            </h3>

            {/* Small Text */}
            <p
              className="
                mt-4

                max-w-sm

                text-sm
                leading-relaxed

                text-white/35
              "
            >
              Premium online coaching focused on strength,
              physique development, and long-term performance.
            </p>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="
              flex
              items-center
              gap-6
            "
          >

            {/* Instagram */}
            <a
              href="https://www.instagram.com/shehab__ahmedd?igsh=dmJldnY5aGVldGVy"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-sm
                tracking-[0.18em]
                uppercase

                text-white/40

                transition-all
                duration-500

                hover:text-cyan-200
              "
            >
              Instagram
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/201125842192"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-sm
                tracking-[0.18em]
                uppercase

                text-white/40

                transition-all
                duration-500

                hover:text-cyan-200
              "
            >
              WhatsApp
            </a>

          </motion.div>

        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="
            mt-16

            flex
            items-center
            justify-center
          "
        >

          <p
            className="
              text-[11px]

              uppercase
              tracking-[0.28em]

              text-white/20
            "
          >
            © 2026 Shehab Ahmed. All rights reserved.
          </p>

        </motion.div>

      </div>

    </footer>
  )
}