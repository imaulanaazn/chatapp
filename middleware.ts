/* eslint-disable no-underscore-dangle */
import { NextRequest, NextResponse } from 'next/server';
import { authCheck } from './services/auth';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  const isAuthorized = await authCheck(token);
  if (isAuthorized) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/auth', request.url));
}

export const config = {
  matcher: ['/'],
};
