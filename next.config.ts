import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  allowedDevOrigins: [
    '192.168.0.100',
    '192.168.1.123',
    "localhost"
  ],
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
};

export default withContentCollections(nextConfig);
