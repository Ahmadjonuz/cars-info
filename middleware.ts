import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Bu routelar uchun autentifikatsiya talab qilinadi
const protectedRoutes = [
  '/profile',
  '/favorites',
  '/compare'
]

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  try {
    const {
      data: { session },
    } = await supabase.auth.getSession()

    // Agar yo'l protected bo'lsa va user kiritmagan bo'lsa, login sahifasiga yo'naltirish
    if (protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route)) && !session) {
      return NextResponse.redirect(new URL('/auth/login', req.url))
    }

    // Agar user tizimga kirgan bo'lsa va auth sahifalariga kirmoqchi bo'lsa, 
    // asosiy sahifaga yo'naltirish
    if (session && req.nextUrl.pathname.startsWith('/auth/')) {
      return NextResponse.redirect(new URL('/', req.url))
    }

    return res
  } catch (error) {
    console.error('Middleware error:', error)
    return res
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     * - api (API routes)
     */
    '/((?!_next/static|_next/image|favicon.ico|public|api).*)',
  ],
} 