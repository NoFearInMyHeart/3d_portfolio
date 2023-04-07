import {StaticImageData} from "next/image";
import { Canvas } from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import {Suspense} from "react";

interface BallCanvasProps {
    icon: StaticImageData
}

const Ball = ({icon}: BallCanvasProps) => {
    const [decal] = useTexture([icon.src]);
    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow={true} receiveShadow={true} scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset={true}
                    polygonOffsetFactor={-5}
                    flatShading={true}
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                    flatShading
                />
            </mesh>
        </Float>
    )
}

const BallCanvas = ({icon}: BallCanvasProps ) => {
    return (
        <div className="bg-white rounded-full flex items-center justify-center overflow-hidden">
            <img src={icon.src} alt="" className="object-cover"/>
        </div>
        // <Canvas
        //     frameloop='demand'
        //     dpr={[1, 2]}
        //     gl={{ preserveDrawingBuffer: true }}
        // >
        //     <Suspense fallback={<CanvasLoader />}>
        //         <OrbitControls enableZoom={false} />
        //         <Ball icon={icon} />
        //     </Suspense>
        //
        //     <Preload all />
        // </Canvas>
    )
}

export default BallCanvas
