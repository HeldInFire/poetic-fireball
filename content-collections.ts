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
    side_note: z.string().optional(),
    written_at: z.coerce.date(),
    think_tags: z.array(z.string()).optional(),
    explicit_words: z.boolean().default(false)
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
