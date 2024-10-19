import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const AnimatedSphere = ({ position }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.5;
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.5, 32, 32]}>
      <meshStandardMaterial color={`hsl(${Math.random() * 360}, 50%, 75%)`} />
    </Sphere>
  );
};

const ThreeJSBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere position={[-4, 0, -5]} />
        <AnimatedSphere position={[4, 0, -5]} />
        <AnimatedSphere position={[0, 3, -5]} />
      </Canvas>
    </div>
  );
};

export default ThreeJSBackground;