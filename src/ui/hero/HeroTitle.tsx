import React from "react";
import { cn } from "@utils/utils";
import { CommonsProps } from "@utils/utils";

export default function HeroTitle({ className, children }: CommonsProps) {
  return (
    <h1
      className={cn(
        "leading-2 z-30 w-full cursor-none text-center text-4xl font-bold tracking-[0.2px]  tracking-wider sm:text-8xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
