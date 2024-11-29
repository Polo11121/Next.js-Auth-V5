"use server";

import {
  LoginSchema,
  LoginValues,
  RegisterSchema,
  RegisterValues,
} from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

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

  const { email, password } = validatedData.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    console.log("error", error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": {
          return {
            error: "Invalid credentials!",
            success: "",
          };
        }
        default: {
          return {
            error: "An error occurred!",
            success: "",
          };
        }
      }
    }
  }
  redirect(DEFAULT_LOGIN_REDIRECT);
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

  const { email, password, name } = validatedData.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const isEmailTaken = await getUserByEmail(email);

  if (isEmailTaken) {
    return {
      error: "Email already taken!",
      success: "",
    };
  }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  return {
    success: "Email sent!",
    error: "",
  };
};
