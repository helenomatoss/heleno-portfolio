module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://heleno-portfolio.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/og'],
  changefreq: 'weekly',
  priority: 0.7,
}

