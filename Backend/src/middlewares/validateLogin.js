import { z } from "zod";

export const loginSchema = z.object({
    email: z
    .string()
    .email("invalidate email adress"),

    password: z
    .string()
    .min(9,"password must be at least 8 characters")
});