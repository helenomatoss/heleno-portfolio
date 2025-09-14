export function personJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Heleno Vitor Matos Leite',
    jobTitle: 'Front-End Developer — Vue.js · Ionic · JavaScript',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dublin',
      addressCountry: 'IE',
    },
    url: 'https://example.com',
    sameAs: [
      'https://github.com/your-github',
      'https://www.linkedin.com/in/your-linkedin',
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

