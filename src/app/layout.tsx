import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans } from 'next/font/google'

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shehab Ahmed | Online Fitness Coach',
  description:
    'Premium online coaching focused on physique, strength, performance, and sustainable transformation.',

  keywords: [
    'Shehab Ahmed',
    'Online Coach',
    'Fitness Coach',
    'Body Transformation',
    'Strength Coach',
    'Physique Coaching',
  ],

  openGraph: {
    title: 'Shehab Ahmed | Online Fitness Coach',
    description:
      'Premium online coaching focused on physique, strength, and long-term performance.',
    url: 'https://YOUR-DOMAIN.vercel.app',
    siteName: 'Shehab Ahmed',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${space.variable}
          ${dmSans.variable}

          bg-[#0B0F1A]
          text-white

          antialiased
          overflow-x-hidden
        `}
      >
        {children}
      </body>
    </html>
  )
}