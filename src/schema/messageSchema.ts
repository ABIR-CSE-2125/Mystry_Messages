import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Content must be at least 10 characters." })
    .max(500, { message: "Content must not be longer than 500 characters." }),
});
