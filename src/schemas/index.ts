import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email address",
    }),
  password: z.string({
    required_error: "Password is required",
  }),
});

export type LoginValues = z.infer<typeof LoginSchema>;

export const RegisterSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email address",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
  name: z.string({
    required_error: "Username is required",
  }),
});

export type RegisterValues = z.infer<typeof RegisterSchema>;
