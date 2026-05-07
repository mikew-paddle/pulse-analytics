import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'

import { PulseShellEffects } from '@/components/pulse-shell-effects'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Pulse Analytics',
    template: '%s · Pulse Analytics',
  },
  description: 'Product analytics that turns raw events into actionable insights.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <PulseShellEffects />
      </body>
    </html>
  )
}
