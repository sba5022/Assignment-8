import { NextResponse } from 'next/server'
import { auth } from './lib/auth';
import { headers } from 'next/headers';
 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {
     const session = await auth.api.getSession({
        headers: await headers()
    })
    // console.log(request,'request from proxy')
    console.log(session,'session from proxy')
    const isLoggedIn = session ? true : false;
    if (isLoggedIn) {
        return NextResponse.next();
    }
  return NextResponse.redirect(new URL('/login', request.url))
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: ["/books/:id", "/my-profile"],
}