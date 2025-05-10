import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { ModelViewer } from '../components/ModelViewer';

const CanvasEle = () => {
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
    )
}

export default CanvasEle
