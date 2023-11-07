import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const cookieStore = cookies(request);
  const oversiteUser = cookieStore.get("ovasite_user");

  // if (!oversiteUser) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/audit/:path*",
    "/employees/:path*",
    "/organizations/:path*",
    "/projects/:path*",
    "/subscription/:path*",
    '/teams/:path*'
  ],
};
