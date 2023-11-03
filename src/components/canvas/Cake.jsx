import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

const Cake = () => {
  const cake = useGLTF("./cake2/scene.gltf");
  return (
    <primitive
      object={cake.scene}
      scale={2.2}
      position={[0, -2.4, 0]}
      rotation-y={0}
      // rotation-z={0.1}
      // rotation-x={0.3}
    />
  );
};

const CakeCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 50,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <ambientLight intensity={0.9} />
      <Suspense>
        <OrbitControls
          autoRotate
          position={[2, 2, 0]}
          enableZoom={false}
          maxPolarAngle={Math.PI / 3.2}
          minPolarAngle={Math.PI / 3.2}
        />
        <Cake />
      </Suspense>
    </Canvas>
  );
};

export default CakeCanvas;
