import { BallCanvas } from "./canvas";
import { SectionWrapper } from "@/hoc";
import {technologies, technologyItl} from "@/constants";

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

export default SectionWrapper(Tech, 'tech');
