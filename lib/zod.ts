import { object, string } from "zod";

export const SignInSchema = object({
  email: string().email("Invalid email"),
  password: string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const RegisterSchema = object({
  name: string().min(2, "Name must be more than 2 characters"),
  email: string().email("Invalid email"),
  password: string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  ConfirmPassword: string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
}).refine((data) => data.password === data.ConfirmPassword, {
  message: "Password does not match",
  path: ["ConfirmPassword"],
});
