"use server";

import {
  LoginSchema,
  LoginValues,
  RegisterSchema,
  RegisterValues,
} from "@/schemas";

type FormState = {
  error: string;
  success: string;
};

export const login = async (_prevState: FormState, values: LoginValues) => {
  const validatedData = LoginSchema.safeParse(values);

  if (!validatedData.success) {
    return {
      error: "Invalid credentials",
      success: "",
    };
  }

  return {
    success: "",
    error: "",
  };
};

export const register = async (
  _prevState: FormState,
  values: RegisterValues
) => {
  const validatedData = RegisterSchema.safeParse(values);

  if (!validatedData.success) {
    return {
      error: "Invalid credentials!",
      success: "",
    };
  }

  return {
    success: "Email sent!",
    error: "",
  };
};
