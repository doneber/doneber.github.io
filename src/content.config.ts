import { defineCollection } from 'astro:content';
import { z } from "astro/zod"
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		draft: z.boolean().optional(),
		author: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog };
