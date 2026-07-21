import createNextIntlPlugin from "next-intl/plugin";
import { withPayload } from "@payloadcms/next/withPayload";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Local MinIO (dev) — swap/add the production media domain when deploying
      {
        protocol: "http",
        hostname: "localhost",
        port: "9010",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
    ],
  },
};

export default withPayload(withNextIntl(nextConfig));
