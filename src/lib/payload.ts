import { getPayload as getPayloadInstance } from "payload";
import config from "@payload-config";

/* Cached Payload Local API instance for server components and actions. */
export function getPayload() {
  return getPayloadInstance({ config });
}
