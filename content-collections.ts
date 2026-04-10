import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";
import { compileMarkdown } from "@content-collections/markdown";

// for more information on configuration, visit:
// https://www.content-collections.dev/docs/configuration

const poems = defineCollection({
  name: "poems",
  directory: "content/poems",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    written_at: z.coerce.date(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return {
      ...document,
      html,
    };
  }
  // transform: async (document, context) => {
  //   const mdx = await compileMDX(context, document);
  //   return {
  //     ...document,
  //     mdx,
  //   };
  // },
});

export default defineConfig({
  collections: [poems],
});
