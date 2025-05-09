import { useGLTF } from '@react-three/drei';

export function ModelViewer() {
  const { scene } = useGLTF('/models/modern_building.glb');

  return <primitive object={scene} scale={1.5} />;
}
