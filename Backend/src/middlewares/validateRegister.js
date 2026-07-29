import { z } from "zod";

export const registerSchema = z.object({
    userName: z
    .string()
    .trim()
    .min(3, "full name is required"),

    email: z
    .string()
    .email("invalidate email adress"),

    password: z
    .string()
    .min(8,"password must be at least 8 characters")
});