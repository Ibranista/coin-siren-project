import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
// import { defaultLocale } from './constants/locals';
import { i18n } from './i18n-config';
import { NextResponse } from 'next/server';

export function middleware(request: any) {
  const { pathname } = request.nextUrl;
  const { defaultLocale } = i18n;
  // Skip API routes from being locale-prefixed
  if (pathname.startsWith('/api')) {
    return; // Let the API routes pass without redirect
  }

  // Allow static files to pass through without redirection
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg')
  ) {
    return; // Skip locale prefixing for Next.js assets and static files
  }

  // Check if the pathname already includes a supported locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale in the pathname
  const headers = { 'accept-language': 'ko-KR,en;q=0.5' };
  const languages = new Negotiator({ headers }).languages();
  const locale = match(languages, i18n.locales, defaultLocale);

  // Add the locale to the pathname and redirect
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
};
