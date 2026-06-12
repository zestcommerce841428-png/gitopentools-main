import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      //disallow: ['/private/', '/admin/'],
    },
    host: 'https://www.gitopentools.com',
    sitemap: 'https://www.gitopentools.com/sitemap.xml',
  }
} 