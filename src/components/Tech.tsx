import { SectionWrapper } from "@/hoc";
import {technologies, technologyItl} from "@/constants";
import {StaticImageData} from "next/image";

const Tech = () => {
    return (
        <div className="relative z-10 flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology: technologyItl) => (
                <div className="w-28 h-28" key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}
        </div>
    );
};

interface BallCanvasProps {
    icon: StaticImageData
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

export default SectionWrapper(Tech, 'tech');
