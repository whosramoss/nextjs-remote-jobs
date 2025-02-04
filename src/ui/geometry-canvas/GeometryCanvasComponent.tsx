"use client";

import React from "react";

interface GeometryCanvasComponentProps {
  id: string;
}

export default function GeometryCanvasComponent({
  id,
}: GeometryCanvasComponentProps) {
  const map: { [key: string]: React.FC } = {
    box: () => <boxGeometry />,
    sphere: () => <sphereGeometry />,
    cone: () => <coneGeometry />,
    cylinder: () => <cylinderGeometry />,
    ring: () => <ringGeometry />,
    icosahedron: () => <icosahedronGeometry />,
    dodecahedron: () => <dodecahedronGeometry />,
    torus: () => <torusGeometry />,
    torusKnot: () => <torusKnotGeometry />,
  };

  const Component = map[id] || null;

  return Component ? <Component /> : <div>Component not found</div>;
}
