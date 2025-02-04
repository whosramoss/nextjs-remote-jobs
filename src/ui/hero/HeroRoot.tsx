import React from "react";
import { cn } from "@utils/utils";
import { CommonsProps } from "@utils/utils";

export default function HeroRoot({ className, children }: CommonsProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center pt-16 text-black dark:text-third sm:pt-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
