import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

const getDefaultLocale = (request: NextRequest): 'en' | 'de' => {
  const cookieLocale = request.cookies.get('locale')?.value;
  if (cookieLocale && ['en', 'de'].includes(cookieLocale)) {
    return cookieLocale as 'en' | 'de';
  }

  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage?.includes('de')) {
    return 'de';
  }

  return 'en';
};

export default async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next();
  }
  const defaultLocale = getDefaultLocale(request);

  const handleI18nRouting = createMiddleware({
    locales: ['en', 'de', 'fr'],
    defaultLocale,
    localePrefix: 'always',
  });

  const response = handleI18nRouting(request);

  if (response) {
    response.headers.set('x-default-locale', defaultLocale);

    if (!request.cookies.get('locale')) {
      response.cookies.set('locale', defaultLocale, {
        maxAge: 60 * 60 * 24 * 365,
        path: '/',
        httpOnly: true,
        sameSite: 'lax',
      });
    }
  }

  return response || NextResponse.next();
}

export const config = {
  matcher: ['/', '/((?!api|_next/static|_next/image|favicon.ico|images|assets).*)'],
};
