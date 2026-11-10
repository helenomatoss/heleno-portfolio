import '@/styles/globals.css'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { profile } from '@/lib/data'
import { sans, mono } from './fonts'

const description =
  'Full-stack developer based in Dublin. I build web apps with React, Vue.js, TypeScript and Node.js, and the automation behind them with Docker, PostgreSQL, n8n and LLM APIs.'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || profile.siteUrl),
  title: {
    default: `${profile.name} — Full-Stack Developer`,
    template: `%s — ${profile.name}`,
  },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: `${profile.name} — Full-Stack Developer`,
    description,
    images: ['/og'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — Full-Stack Developer`,
    description,
    images: ['/og'],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.fullName,
    alternateName: profile.name,
    jobTitle: profile.role,
    url: profile.siteUrl,
    sameAs: [profile.linkedin, profile.github],
    address: { '@type': 'PostalAddress', addressLocality: 'Dublin', addressCountry: 'IE' },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable} min-h-screen`}>
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      </body>
    </html>
  )
}
