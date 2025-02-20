import { z } from "zod";

export const SectionType = z.object({
  title: z.string(),
  content: z.string(),
});

export const ResponseType = z.object({
  sections: z.array(SectionType),
});
