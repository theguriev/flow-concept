import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dev.connectly.ai",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
