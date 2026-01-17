import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Distribution Pilot | Data-Powered Content Automation',
  description: 'Make the right content, at scale, automatically. Real-time social data meets automated content creation.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Distribution Pilot | Data-Powered Content Automation',
    description: 'Make the right content, at scale, automatically.',
    url: 'https://distributionpilot.com',
    siteName: 'Distribution Pilot',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Distribution Pilot',
    description: 'Data-powered content automation at scale.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
