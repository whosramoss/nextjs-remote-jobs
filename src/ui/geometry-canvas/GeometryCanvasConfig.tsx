"use client";

import React from "react";
import { Stats, Environment, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { CommonsProps } from "@utils/utils";

export default function GeometryCanvasConfig({ children }: CommonsProps) {
  const config = useControls({
    autoRotate: !0,
    gridHelper: !0,
    axesHelper: !0,
    stats: !0,
  });

  return (
    <React.Fragment>
      <Environment
        files={"/images/venice_sunset_1k.hdr.jpg"}
        background
        backgroundBlurriness={0.8}
      />
      <gridHelper position-y={0} visible={config.gridHelper} />
      <mesh receiveShadow scale={1}>
        {children}
        <meshStandardMaterial side={2} />
      </mesh>
      <OrbitControls autoRotate={config.autoRotate} target-y={0.5} />
      <axesHelper args={[5]} visible={config.axesHelper} />
      {config.stats && <Stats />}
    </React.Fragment>
  );
}
