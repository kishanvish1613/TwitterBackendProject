import { z } from "zod";

const signUpSchema = z.object({
    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Email is required" })
    .min(3, { message: "Email must be at least 3 characters"})
    .max(255, { message: "Email must not be more than 255 characters"}),

    password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(5, { message: "Password must be at least 5 characters" })
    .max(1000, { message: "Password can't be greater than 1000 characters"}),

    userName: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(5, { message: "Username must be at least 5 characters" })
    .max(1000, { message: "Password can't be greater than 1000 characters"}),

});

export default signUpSchema;