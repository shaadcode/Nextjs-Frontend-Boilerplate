// Mocked data source – جایگزین با real CMS/db logic
export async function getBlogSlugs(): Promise<string[]> {
  return ['how-to-code', 'nextjs-routing', 'seo-tips'];
}

export async function getProductIds(): Promise<string[]> {
  return ['p001', 'p002', 'p003'];
}
