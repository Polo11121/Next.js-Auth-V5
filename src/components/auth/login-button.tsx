"use client";

import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";

type LoginButtonProps = {
  mode?: "modal" | "redirect";
  asChild?: boolean;
} & PropsWithChildren;

export const LoginButton = ({
  mode = "redirect",
  asChild,
  children,
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => router.push("/auth/login");

  if (mode === "modal") {
    return <span></span>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
