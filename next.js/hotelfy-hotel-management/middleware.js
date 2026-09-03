import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("login")?.value;
  const { pathname } = request.nextUrl;

  // Public routes
  if (
    pathname.startsWith("/signin") ||
    pathname.startsWith("/registration") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Redirect if not logged in
  if (!token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};