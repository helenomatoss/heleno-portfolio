import '@/styles/globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { MatrixCodeRain } from '@/components/ui/matrix-code-rain'
import { inter, outfit } from './fonts'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Heleno Vitor Matos Leite — Full-Stack Developer (React, Next.js, Node.js)',
    template: '%s — Heleno Vitor Matos Leite',
  },
  description:
    'Full-stack developer based in Dublin, building modern web apps with React, Next.js, Node.js, and TypeScript — AI-assisted development, from freelance delivery at Webgest Solutions to production e-commerce experience at Odontoprev.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F4F7FB' },
    { media: '(prefers-color-scheme: dark)', color: '#031A6B' },
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Heleno Vitor Matos Leite — Full-Stack Developer',
    description:
      'React, Next.js, Node.js, TypeScript. AI-assisted development, accessible UI, and production delivery.',
    images: ['/og'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heleno Vitor Matos Leite — Full-Stack Developer',
    description: 'React, Next.js, Node.js, TypeScript. AI-assisted development and production delivery.',
    images: ['/og'],
  },
  verification: {
    other: { 'google-site-verification': 'REPLACE_IF_NEEDED' },
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google" content="notranslate" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={`min-h-screen bg-app text-app antialiased overflow-x-hidden ${inter.variable} ${outfit.variable} font-sans`}>
        <ThemeProvider>
          <div className="fixed inset-0 -z-10 hidden opacity-60 dark:block" aria-hidden>
            <MatrixCodeRain className="h-full w-full" />
          </div>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Heleno Vitor Matos Leite', jobTitle: 'Full-Stack Developer' }) }}
        />
      </body>
    </html>
  )
}
