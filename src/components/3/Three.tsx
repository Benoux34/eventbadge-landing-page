"use client";

import React, { Suspense } from "react";
// 3D
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useProgress } from "@react-three/drei";
// Shader
import vertex from "../../../utils/shader/vertex";
import fragment from "../../../utils/shader/fragment";
// Animation
import { motion } from "framer-motion-3d";

type Props = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

function Effect({ setIsLoading }: Props) {
  const ref = React.useRef<any>();
  const { progress } = useProgress();
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const uniforms = React.useMemo(() => {
    return {
      u_intensity: { value: 0.7 },
      u_time: { value: 0 },
    };
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      if (scrollPosition > 900 && scrollPosition < 1500) {
        ref.current.position.set(0, 2, 3);
      } else ref.current.position.set(0, -1, 3);

      ref.current.rotation.set(-0.4, 0, 0);

      ref.current.material.uniforms.u_time.value = 0.1 * clock.getElapsedTime();
    }
  });

  if (progress === 100) setTimeout(() => setIsLoading(true), 500);

  return (
    <motion.mesh ref={ref}>
      <planeGeometry args={[10, 10, 256, 256]} />
      <shaderMaterial
        wireframe={false}
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
      />
    </motion.mesh>
  );
}

export default function Three({ setIsLoading }: Props) {
  return (
    <div className="absolute top-0 h-[200vh] w-full -z-10">
      <Canvas>
        <Suspense fallback={null}>
          <Environment preset="city" />
          <Effect setIsLoading={setIsLoading} />
        </Suspense>
      </Canvas>
    </div>
  );
}
