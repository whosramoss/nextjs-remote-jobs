import { CommonsProps } from "@utils/utils";
import { cn } from "@utils/utils";
import React from "react";

export default function NavBarLeft({ children, className }: CommonsProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-[12px] md:flex-row",
        className,
      )}
    >
      {children}
    </div>
  );
}
