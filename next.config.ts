import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
};

export default withContentCollections(nextConfig);
