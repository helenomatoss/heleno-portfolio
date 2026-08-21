export function personJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Heleno Vitor Matos Leite',
    jobTitle: 'Full-Stack Developer — React · Next.js · Node.js',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dublin',
      addressCountry: 'IE',
    },
    url: 'https://heleno-portfolio.vercel.app',
    sameAs: [
      'https://github.com/helenomatoss',
      'https://www.linkedin.com/in/heleno-vitor-matos-leite-993684211/',
    ],
  }
  return JSON.stringify(data)
}

export function articleJsonLd({
  title,
  url,
  date,
  description,
}: {
  title: string
  url: string
  date: string
  description: string
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    datePublished: date,
    description,
    author: {
      '@type': 'Person',
      name: 'Heleno Vitor Matos Leite',
    },
    url,
  }
  return JSON.stringify(data)
}

