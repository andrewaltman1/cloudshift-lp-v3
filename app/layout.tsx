import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type React from 'react'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CloudShift',
  description: 'CloudShift is a devloper tool for quickly and securely migrating object storage from one cloud provider to another.',
  icons: {
    icon: '/favicon.ico',
  },
  // openGraph: {
  //   title: 'CloudShift',
  //   description: 'Lighting fast object storage migration.',
  //   url: 'https://www.cloudshift.dev',
  //   siteName: 'CloudShift.dev',
  //   images: [
  //     {
  //       url: 'https://nextjs.org/og.png',
  //       width: 800,
  //       height: 600,
  //     },
  //     {
  //       url: 'https://nextjs.org/og-alt.png',
  //       width: 1800,
  //       height: 1600,
  //       alt: 'My custom alt',
  //     },
  //   ],
  //   locale: 'en_US',
  //   type: 'website',
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
