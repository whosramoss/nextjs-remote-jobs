"use client";

import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { CommonsProps } from "@utils/utils";

export function SmoothScroll({ children }: CommonsProps) {
  const options = {
    lerp: 0.05
    // duration: 0,
    // smoothTouch: false,
    // smooth: true,
  }

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
