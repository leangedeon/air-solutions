import { NextResponse, type NextRequest } from 'next/server'

const MAINTENANCE_PATH = '/mantenimiento'

export function middleware(request: NextRequest) {
  const maintenanceMode = process.env.MANTENIMIENTO_MODE === 'true'
  const { pathname } = request.nextUrl

  if (!maintenanceMode) {
    if (pathname === MAINTENANCE_PATH) {
      return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
  }

  if (pathname === MAINTENANCE_PATH) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = MAINTENANCE_PATH
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
