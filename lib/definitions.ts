import z from "zod";

export const ProjectPostSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, { error: "The title needs at least 3 characters." }),
  year: z.coerce
    .number()
    .int()
    .min(2000)
    .max(2100, { error: "Enter a year between 2000-2100" }),
  summary: z
    .string()
    .trim()
    .min(10, { error: "The description needs at least 10 characters." }),
  image: z
    .instanceof(File, { error: "Please choose a picture." })
    .refine((f) => f.size > 0, { error: "Please choose a picture." })
    .refine((f) => f.type.startsWith("image/"), {
      error: "The file must be an image.",
    })
    .refine((f) => f.size <= 2 * 1024 * 1024, {
      error: "The picture must be under 2 MB.",
    }),
});
