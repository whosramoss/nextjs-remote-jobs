"use client";

import React from "react";
import { GeometryCanvas } from "@ui/geometry-canvas";

interface GeometryByParamsProps {
  params: { id: string };
}

export default function GeometryByParamsPage({
  params,
}: GeometryByParamsProps) {
  return (
    <GeometryCanvas.Root>
      <GeometryCanvas.Loader>
        <GeometryCanvas.Config>
          <GeometryCanvas.Component id={params.id} />
        </GeometryCanvas.Config>
      </GeometryCanvas.Loader>
    </GeometryCanvas.Root>
  );
}
