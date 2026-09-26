import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pavingrisers.com';

  const routes = [
    '',
    '/industry-solutions',
    '/paving-advantage',
    '/pro-service',
    '/products/catch-basin-grates',
    '/products/catch-basin-risers',
    '/products/manhole-riser',
    '/products/valve-box-risers',
    '/products/manhole-frame-cover',
    '/products/adjustable-riser',
    '/products/fixed-riser',
    '/products/curb-inlet-riser',
    '/products/trash-racks',
    '/products/installation-tools',
    '/products/d-shape-risers',
    '/products/other-cast-iron',
    '/products/utility-product',
    '/products/fabricated-steel',
    '/solutions/paving-resurfacing',
    '/solutions/storm-drainage',
    '/solutions/airports-ports',
    '/solutions/sanitary-sewer',
    '/resources/literature',
    '/resources/videos',
    '/resources/briefs',
    '/resources/calculators',
    '/contact/quote',
    '/about/locations',
    '/contact/specifications',
    '/blog',
    '/blog/the-ultimate-guide-to-adjustable-risers',
    '/blog/why-steel-catch-basins-outperform',
    '/blog/minimizing-road-closure-times',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}
