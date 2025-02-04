import { CommonsProps } from "@utils/utils";
import { cn } from "@utils/utils";
import React from "react";

export default function NavBarRight({ children, className }: CommonsProps) {
  return (
    <div className={cn("flex gap-[15px] text-[14px] items-center", className)}>
      {children}
    </div>
  );
}
