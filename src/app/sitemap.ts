import type { MetadataRoute } from 'next';
import { getBlogSlugs, getProductIds } from '@/lib/sitemapData';
import { getBaseUrl } from '@/utils/getBaseURL';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();
  const now = new Date();

  // Static paths
  const staticPaths = ['/', '/about', '/contact', '/privacy'];

  // Dynamic paths
  const blogSlugs = await getBlogSlugs(); // returns ['how-to-code', 'nextjs-routing']
  const productIds = await getProductIds(); // returns ['p001', 'p002']

  const blogPaths = blogSlugs.map(slug => `/blog/${slug}`);
  const productPaths = productIds.map(id => `/product/${id}`);

  const allPaths = [...staticPaths, ...blogPaths, ...productPaths];

  return allPaths.map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'daily',
    priority: path === '/' ? 1.0 : 0.7,
  }));
}
