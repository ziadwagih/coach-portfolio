'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const links = [
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Programs',
    href: '#programs',
  },
  {
    name: 'Services',
    href: '#services',
  },
  {
    name: 'Results',
    href: '#transformations',
  },
  {
    name: 'Reviews',
    href: '#testimonials',
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="
        fixed
        top-0
        left-0
        right-0

        z-50

        px-3
        sm:px-5

        pt-4
      "
    >

      {/* Desktop / Tablet */}
      <div className="hidden md:flex justify-center">

        <div
          className={`
            flex
            items-center
            justify-center

            rounded-full

            border

            transition-all
            duration-500

            ${
              scrolled
                ? 'border-white/10 bg-black/30 backdrop-blur-2xl'
                : 'border-transparent bg-transparent'
            }
          `}
        >

          <nav
            className="
              flex
              items-center

              gap-2

              px-4
              py-3
            "
          >

            {links.map((link) => {
              const isHovered = hovered === link.href

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHovered(link.href)}
                  onMouseLeave={() => setHovered(null)}
                  className="
                    relative

                    rounded-full

                    px-5
                    py-2.5

                    text-xs
                    uppercase
                    tracking-[0.22em]

                    transition-all
                    duration-500
                  "
                >

                  {isHovered && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="
                        absolute
                        inset-0

                        rounded-full

                        bg-white/[0.08]
                        border
                        border-white/10
                      "
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 28,
                      }}
                    />
                  )}

                  <span
                    className={`
                      relative z-10

                      transition-colors
                      duration-300

                      ${
                        isHovered
                          ? 'text-white'
                          : 'text-white/45 hover:text-white'
                      }
                    `}
                  >
                    {link.name}
                  </span>

                </a>
              )
            })}

          </nav>

        </div>

      </div>

      {/* Mobile Dock */}
      <div className="md:hidden flex justify-center">

        <div
          className={`
            w-full
            max-w-[390px]

            rounded-[28px]

            border

            transition-all
            duration-500

            ${
              scrolled
                ? 'border-white/10 bg-black/40 backdrop-blur-2xl'
                : 'border-white/5 bg-black/20 backdrop-blur-xl'
            }
          `}
        >

          <nav
            className="
              grid
              grid-cols-5

              items-center

              px-2
              py-2
            "
          >

            {links.map((link) => {
              const isHovered = hovered === link.href

              return (
                <a
  key={link.name}
  href={link.href}
  onClick={() => {
    setHovered(link.href)

    setTimeout(() => {
      setHovered(null)
    }, 700)
  }}
  className="
    relative

    flex
    items-center
    justify-center

    rounded-2xl

    px-1
    py-3

    text-[9px]
    uppercase
    tracking-[0.18em]

    overflow-hidden
  "
>

  {isHovered && (
    <motion.div
      layoutId="mobile-navbar-hover"
      className="
        absolute
        inset-0

        rounded-2xl

        bg-white/[0.08]
        border
        border-white/10
      "
      transition={{
        type: 'spring',
        stiffness: 320,
        damping: 26,
      }}
    />
  )}

  <span
    className={`
      relative z-10

      transition-colors
      duration-300

      ${
        isHovered
          ? 'text-white'
          : 'text-white/45'
      }
    `}
  >
    {link.name}
  </span>

</a>
              )
            })}

          </nav>

        </div>

      </div>

    </motion.header>
  )
}