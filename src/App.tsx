import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { ModelViewer } from './components/ModelViewer';
import './App.css'; // Make sure this is imported

export default function App() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Environment preset="city" />
        <ModelViewer />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
