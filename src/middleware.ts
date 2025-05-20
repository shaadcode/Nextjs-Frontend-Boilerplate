import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import routing from '@/config/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export const middleware = (req: NextRequest) => {
  const response = intlMiddleware(req);
  return response;
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
