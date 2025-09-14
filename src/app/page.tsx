import Hero from '@/components/hero'
import Section from '@/components/section'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Home' }

export default function HomePage() {
  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Heleno Vitor Matos Leite',
    jobTitle: 'Front-End Developer',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    sameAs: [
      'https://www.linkedin.com/in/heleno-vitor-matos-leite-993684211/',
      'https://github.com/helenomatoss',
    ],
    address: { '@type': 'PostalAddress', addressLocality: 'Dublin', addressCountry: 'IE' },
  }
  return (
    <>
      <Hero />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Accessible UI',
              text: 'I build clean, inclusive interfaces with focus on contrast, keyboard nav, and meaningful motion.',
            },
            {
              title: 'Vue.js & Ionic',
              text: 'Production experience with Vue 3 and Ionic/Angular for mobile features and performance.',
            },
            {
              title: 'E‑commerce Delivery',
              text: 'Contributed to a large e‑commerce redesign at Odontoprev, improving mobile performance and reusability.',
            },
          ].map((c) => (
            <div key={c.title} className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-muted">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
