import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Skip the dashboard, API routes, Next internals and files with an
  // extension (images, fonts, …) — those must never get locale-prefixed.
  matcher: ["/((?!api|admin|dashboard|_next|_vercel|.*\\..*).*)"],
};
