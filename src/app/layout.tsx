import type { Metadata } from 'next'
import {
  Bodoni_Moda,
  Cormorant,
  Geist,
  Geist_Mono,
  Monsieur_La_Doulaise,
} from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const cormorant = Cormorant({
  variable: '--font-cormorant',
  subsets: ['latin'],
})

const monsieurLaDoulaise = Monsieur_La_Doulaise({
  variable: '--font-monsieur-la-doulaise',
  subsets: ['latin'],
  weight: '400',
})

const bodoniModa = Bodoni_Moda({
  variable: '--font-bodoni-moda',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Me and May',
  description: 'Uma página dedicada ao nosso amor',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${monsieurLaDoulaise.variable} ${bodoniModa.variable} antialiased bg-stone-300`}
      >
        <Header />

        {children}
      </body>
    </html>
  )
}
