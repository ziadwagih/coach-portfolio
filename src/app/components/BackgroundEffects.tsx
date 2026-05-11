'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function BackgroundEffects() {
  const { scrollY } = useScroll()

  /* Main cinematic movement */
  const heroY = useTransform(scrollY, [0, 5000], [0, 500])
  const midY = useTransform(scrollY, [0, 5000], [0, -400])
  const lowerY = useTransform(scrollY, [0, 5000], [0, 350])
  const finalY = useTransform(scrollY, [0, 5000], [0, -250])

  /* Dynamic opacity evolution */
  const heroOpacity = useTransform(
    scrollY,
    [0, 900, 1800],
    [0.22, 0.10, 0.03]
  )

  const midOpacity = useTransform(
    scrollY,
    [500, 1800, 3200],
    [0.02, 0.12, 0.16]
  )

  const lowerOpacity = useTransform(
    scrollY,
    [1800, 4200],
    [0.04, 0.16]
  )

  const finalOpacity = useTransform(
    scrollY,
    [2600, 5000],
    [0.02, 0.12]
  )

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#060A12]">

      {/* GLOBAL BASE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,80,180,0.10),transparent_45%)]" />

      {/* HERO ATMOSPHERE */}
      <motion.div
        style={{
          y: heroY,
          opacity: heroOpacity,
        }}
        className="
          absolute
          -top-[500px]
          left-1/2
          -translate-x-1/2

          w-[1000px]
          md:w-[1800px]

          h-[1000px]
          md:h-[1800px]

          rounded-full
          bg-cyan-400

          blur-[120px]
          md:blur-[180px]
        "
      />

      {/* MID PAGE TRANSITION */}
      <motion.div
        style={{
          y: midY,
          opacity: midOpacity,
        }}
        className="
          absolute
          top-[32%]
          right-[-250px]
          md:right-[-400px]

          w-[700px]
          md:w-[1400px]

          h-[700px]
          md:h-[1400px]

          rounded-full
          bg-blue-600

          blur-[100px]
          md:blur-[170px]
        "
      />

      {/* LOWER ATMOSPHERE */}
      <motion.div
        style={{
          y: lowerY,
          opacity: lowerOpacity,
        }}
        className="
          absolute
          bottom-[-400px]
          left-[-250px]

          w-[700px]
          md:w-[1300px]

          h-[700px]
          md:h-[1300px]

          rounded-full
          bg-indigo-700

          blur-[110px]
          md:blur-[180px]
        "
      />

      {/* FINAL TESTIMONIALS DEPTH */}
      <motion.div
        style={{
          y: finalY,
          opacity: finalOpacity,
        }}
        className="
          absolute
          bottom-[5%]
          right-[-200px]

          w-[650px]
          md:w-[1100px]

          h-[650px]
          md:h-[1100px]

          rounded-full
          bg-cyan-500

          blur-[100px]
          md:blur-[160px]
        "
      />

      {/* CENTER LIGHT PLATE */}
      <motion.div
        style={{
          opacity: midOpacity,
        }}
        className="
          absolute
          top-[52%]
          left-1/2
          -translate-x-1/2

          w-[800px]
          md:w-[1400px]

          h-[400px]
          md:h-[700px]

          rounded-full
          bg-cyan-500/20

          blur-[120px]
          md:blur-[220px]
        "
      />

      {/* TOP LIGHT FADE */}
      <div
        className="
          absolute
          top-0
          left-0
          right-0
          h-[400px]

          bg-gradient-to-b
          from-white/[0.02]
          to-transparent
        "
      />

      {/* CINEMATIC DEPTH */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.10)_40%,rgba(0,0,0,0.45))]
        "
      />

      {/* SIDE VIGNETTES */}
      <div className="absolute inset-y-0 left-0 w-[22%] bg-gradient-to-r from-black/30 to-transparent" />

      <div className="absolute inset-y-0 right-0 w-[22%] bg-gradient-to-l from-black/30 to-transparent" />

      {/* GLOBAL FILM GRAIN DEPTH */}
      <div className="absolute inset-0 bg-black/[0.14]" />

    </div>
  )
}