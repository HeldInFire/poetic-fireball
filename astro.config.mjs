// @ts-check
import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  server: {
      allowedHosts: [
          "0rbt1of2xor9.share.zrok.io"
      ]
  },

  integrations: [mdx()]
});