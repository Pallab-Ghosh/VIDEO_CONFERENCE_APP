import { auth, clerkMiddleware  , createRouteMatcher} from "@clerk/nextjs/server";

const protectedRoutes = createRouteMatcher([
  '/',
  '/upcomings',
  'recordings',
  '/personal-room',
  '/meeting(.*)'
])


export default clerkMiddleware((auth , req)=>{
    if(protectedRoutes(req))
       auth().protect();
});


export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)" , '/meeting/(.*)'],
};