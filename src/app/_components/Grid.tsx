"use client";

import React, { ReactNode } from "react";
import { useAnimationFadeIn } from "@hooks/useAnimationFadeIn";
import { motion } from "framer-motion";
import { CommonsProps } from "@utils/utils";
import { cn } from "@utils/utils";
import { FadeIn } from "@ui/fade-in";

export default function Grid({ className, children }: CommonsProps) {
  return (
    <FadeIn.Item
      delay={0.5}
      duration={1.5}
      className={cn(
        "w-[90vw] place-content-center place-items-center py-20 ",
        "grid grid-cols-1",
        "sm:grid-cols-3",
        "gap-x-5 gap-y-7",
        className,
      )}
    >
      {children}
    </FadeIn.Item>
  );
}
