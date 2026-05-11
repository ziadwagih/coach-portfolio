'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">

      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* Main Branding */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >

          {/* Top Row */}
          <div
            className="
              flex
              flex-col
              md:flex-row

              items-center
              justify-center

              gap-0
              md:gap-10
            "
          >

            {/* SHEHAB */}
            <h1
              className="
                text-[52px]
                sm:text-[78px]
                md:text-[120px]
                lg:text-[170px]

                font-bold
                tracking-[-0.08em]
                leading-[0.9]

                text-white
              "
            >
              <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                Shehab
              </span>
            </h1>

            {/* AHMED */}
            <h1
              className="
                text-[52px]
                sm:text-[78px]
                md:text-[120px]
                lg:text-[170px]

                font-bold
                tracking-[-0.08em]
                leading-[0.9]

                text-white/90
              "
            >
              <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                Ahmed
              </span>
            </h1>

          </div>

          {/* Minimal Statement */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9 }}
            className="
              mx-auto
              mt-10

              max-w-xl

              text-sm
              md:text-[15px]

              leading-relaxed
              tracking-[0.18em]

              uppercase

              text-white/30
            "
          >
            Strength Coaching • Physique Development • Performance
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9 }}
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

            {/* Main CTA */}
            <a
              href="#services"
              className="
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
                hover:shadow-[0_0_50px_rgba(255,255,255,0.12)]
              "
            >
              Start Coaching
            </a>

            {/* Secondary CTA */}
            <a
              href="#transformations"
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
              View Results
            </a>

          </motion.div>

        </motion.div>

      </div>

    </section>
  )
}