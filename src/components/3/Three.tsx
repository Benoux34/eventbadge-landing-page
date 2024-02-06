"use client";

import React from "react";
// 3D
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
// Shader
import vertex from "../../../utils/shader/vertex";
import fragment from "../../../utils/shader/fragment";

function Effect() {
  const ref = React.useRef<any>();

  const uniforms = React.useMemo(() => {
    return {
      u_intensity: { value: 0.7 },
      u_time: { value: 0 },
    };
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.set(0, -1, 3);
      ref.current.rotation.set(-0.4, 0, 0);

      ref.current.material.uniforms.u_time.value = 0.1 * clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[10, 10, 256, 256]} />
      <shaderMaterial
        wireframe={false}
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
      />
    </mesh>
  );
}

export default function Three() {
  return (
    <div className="absolute top-0 h-[200vh] w-full -z-10">
      <Canvas>
        <OrbitControls />
        <Environment preset="city" />

        <Effect />
      </Canvas>
    </div>
  );
}
