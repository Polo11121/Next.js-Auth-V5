import { PropsWithChildren } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";

type CardWrapperProps = {
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
} & PropsWithChildren;

export const CardWrapper = ({
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  children,
}: CardWrapperProps) => (
  <Card className="w-[400px] shadow-md">
    <CardHeader>
      <Header label={headerLabel} />
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
    </CardHeader>
    <CardFooter>
      <BackButton label={backButtonLabel} href={backButtonHref} />
    </CardFooter>
  </Card>
);
