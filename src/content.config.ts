// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

const poem_schema = z.object({
    title: z.string(),
    written_at: z.date(),
    favourite: z.boolean().default(false),
    to_be_corrected: z.boolean().default(false)
})

// 4. Define your collection(s)
const the_lost_five_hundred = defineCollection({ 
    loader: glob({ pattern: "*.md", base: "./src/era/the-lost-five-hundred" }),
    schema: poem_schema
});

const within_awareness = defineCollection({ 
    loader: glob({ pattern: "**/*.md", base: "./src/era/within-awareness" }),
    schema: poem_schema
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { the_lost_five_hundred, within_awareness };