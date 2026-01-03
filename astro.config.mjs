// @ts-check
import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  server: {
      allowedHosts: [
          "j628afbr91lt.share.zrok.io"
      ]
  },

  site: "https://heldinfire.github.io",
  base: "/poetic-fireball",

  integrations: [mdx()]
});