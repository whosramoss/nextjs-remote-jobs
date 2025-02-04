"use client";

import React, { Suspense } from "react";
import { useProgress, Html } from "@react-three/drei";
import { CommonsProps } from "@utils/utils";

export default function GeometryCanvasLoader({ children }: CommonsProps) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Html
      center
      className="mx-auto items-center text-sm font-bold text-[#f8fafc]"
    >
      {progress}%
    </Html>
  );
}
