import { CommonsProps } from "@utils/utils";
import { cn } from "@utils/utils";
import React from "react";

export default function NavBarRoot({ children, className }: CommonsProps) {
  return (
    <div
      className={cn(
        "hidden flex-col items-center gap-[10px] px-14 pb-[80px] pt-[40px]",
        "md:flex-row md:justify-between md:pb-[34px]",
        "sm:flex ",
        className,
      )}
    >
      {children}
    </div>
  );
}
