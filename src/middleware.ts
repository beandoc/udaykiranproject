
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('session');
  let session;

  try {
    session = sessionCookie ? JSON.parse(sessionCookie.value) : null;
  } catch (error) {
    session = null;
  }

  const { pathname } = request.nextUrl;

  // If user is not logged in, redirect them to the login page,
  // unless they are already on the login page.
  if (!session?.isLoggedIn) {
    if (pathname !== '/login') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }

  // If user is logged in
  const userRole = session.role;

  // If a logged-in user tries to access the login page, redirect them.
  if (pathname === '/login') {
      const redirectUrl = userRole === 'ADMIN' ? '/admin' : '/';
      return NextResponse.redirect(new URL(redirectUrl, request.url));
  }
  
  // If a non-admin user tries to access the admin page, redirect them.
  if (pathname.startsWith('/admin') && userRole !== 'ADMIN') {
      return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Match all request paths except for the ones starting with:
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  // - and asset files in public folder
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp3|wav|mp4)$).*)'],
};
