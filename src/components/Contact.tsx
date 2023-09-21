import {FormEvent, FormEventHandler, LegacyRef, MutableRefObject, Suspense, useRef, useState} from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "@/styles";
// import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "@/utils/motion";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import CanvasLoader from "@/components/Loader";

interface ContactFormItl {
    name: string
    email: string
    message: string
}

const Contact = () => {
    const formRef = useRef() as MutableRefObject<HTMLFormElement>;
    const [form, setForm] = useState<ContactFormItl>({
        name: '',
        email: '',
        message: ''
    })
    const [loading, setLoading] = useState<boolean>(false)

    const handleChange = (e: FormEvent): void => {
        const {name, value} = e.target as HTMLInputElement
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = (e: FormEvent): void => {

    }

    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            {/*<motion.div*/}
            {/*    variants={slideIn("left", "tween", 0.2, 1)}*/}
            {/*    className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>*/}
            {/*    <p className={styles.sectionSubText}>Get in touch</p>*/}
            {/*    <h3 className={styles.sectionHeadText}>Contact.</h3>*/}

            {/*    <form ref={formRef}*/}
            {/*          className="mt-12 flex flex-col gap-8"*/}
            {/*          onSubmit={handleSubmit}>*/}

            {/*        <label className='flex flex-col'>*/}
            {/*            <span className='text-white font-medium mb-4'>Your Name</span>*/}
            {/*            <input*/}
            {/*                type='text'*/}
            {/*                name='name'*/}
            {/*                value={form.name}*/}
            {/*                onChange={handleChange}*/}
            {/*                placeholder="What's your name ?"*/}
            {/*                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'*/}
            {/*            />*/}
            {/*        </label>*/}
            {/*        <label className='flex flex-col'>*/}
            {/*            <span className='text-white font-medium mb-4'>Your email</span>*/}
            {/*            <input*/}
            {/*                type='email'*/}
            {/*                name='email'*/}
            {/*                value={form.email}*/}
            {/*                onChange={handleChange}*/}
            {/*                placeholder="What's your web address ?"*/}
            {/*                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'*/}
            {/*            />*/}
            {/*        </label>*/}
            {/*        <label className='flex flex-col'>*/}
            {/*            <span className='text-white font-medium mb-4'>Your Message</span>*/}
            {/*            <textarea*/}
            {/*                rows={7}*/}
            {/*                name='message'*/}
            {/*                value={form.message}*/}
            {/*                onChange={handleChange}*/}
            {/*                placeholder='What you want to say ?'*/}
            {/*                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'*/}
            {/*            />*/}
            {/*        </label>*/}

            {/*        <button*/}
            {/*            type="submit"*/}
            {/*            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'*/}
            {/*        >*/}
            {/*            {loading ? 'Sending': 'Send'}*/}
            {/*        </button>*/}
            {/*    </form>*/}
            {/*</motion.div>*/}

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <EarthCanvas />
            </motion.div>
        </div>
    )
}

const Earth = () => {
    const earth = useGLTF("./planet/scene.gltf");

    return (
        <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
    );
};

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />

                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default SectionWrapper(Contact, "contact");
