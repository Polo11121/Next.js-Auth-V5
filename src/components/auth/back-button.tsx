"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type BackButtonProps = {
  label: string;
  href: string;
};

export const BackButton = ({ label, href }: BackButtonProps) => (
  <Button asChild variant="link" size="sm" className="font-normal w-full">
    <Link href={href}>{label}</Link>
  </Button>
);
