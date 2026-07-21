import { getPayload as getPayloadInstance } from "payload";
import config from "@payload-config";

/* Cached Payload Local API instance for server components and actions. */
export function getPayload() {
  return getPayloadInstance({ config });
}

/* True when a real database is configured. Without it the site falls back
   to the static content in the translation files and the dashboard shows
   a "setup pending" notice instead of crashing. */
export function isCmsConfigured() {
  return Boolean(process.env.DATABASE_URL);
}
