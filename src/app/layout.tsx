import './globals.css'
import { Space_Grotesk, DM_Sans } from 'next/font/google'

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${space.variable} ${dmSans.variable} bg-[#0B0F1A] text-white`}>
        {children}
      </body>
    </html>
  )
}