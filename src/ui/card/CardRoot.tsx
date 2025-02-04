import { CommonsProps } from "@utils/utils";
import { cn } from "@utils/utils";
import Link from "next/link";
import React from "react";

interface CardRootProps extends CommonsProps {
  route: string;
}

export default function CardRoot({
  route,
  className,
  children,
}: CardRootProps) {
  return (
    <Link
      className={cn(
        "relative flex w-full cursor-pointer flex-col gap-2 duration-[0.5s] ease-[ease-in-out] hover:opacity-[100] hover:transition-opacity",
        className,
      )}
      href={route}
    >
      {children}
    </Link>
  );
}
