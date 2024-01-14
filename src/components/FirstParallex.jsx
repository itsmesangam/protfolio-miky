/** @format */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FirstParallex() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const sunY = useTransform(scrollYProgress, [0, 1], ["-60%", "80%"]);
    const sunX = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
    const starX = useTransform(scrollYProgress, [0, 1], ["-10%", "80%"]);

    const cloudX = useTransform(scrollYProgress, [0, 1], ["-50%", "100%"]);
    const cloudY = useTransform(scrollYProgress, [0, 1], ["50%", "-10%"]);
    const rocketY = useTransform(scrollYProgress, [0, 1], ["80%", "-100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "550%"]);

    return (
        <motion.div
            ref={ref}
            className='h-full overflow-hidden flex justify-center items-center relative w-full'
        >
            <motion.p
                className='font-bold text-white text-[60px] z-[2] md:text-[10rem]'
                style={{ y: textY }}
            >
                About Me
            </motion.p>
            <motion.div
                className='h-full z-[1] absolute bg-cover bg-bottom w-full'
                style={{
                    x: starX,

                    backgroundImage: "url('/stars.png"
                }}
            ></motion.div>
            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: "360deg" }}
                transition={{ duration: 120, repeat: Infinity }}
                style={{
                    y: sunY,
                    x: sunX,
                    backgroundImage: "url('/sun.png"
                }}
                className='h-[20rem] md:h-full md:w-full absolute bg-no-repeat
            w-[20rem] z-[3] bg-contain bg-center'
            ></motion.div>
            {/* <motion.div
                style={{
                    y: rocketY,
                    x: "30%",

                    backgroundImage: "url('/rocket.png"
                }}
                className='h-[20rem] md:h-full md:w-full absolute bg-no-repeat
            w-[20rem] z-[3] bg-contain bg-center'
            ></motion.div>*/}
            <motion.div
                style={{ x: cloudX, y: cloudY }}
                className='absolute z-[4] h-full w-full'
            >
                <motion.div
                    style={{ backgroundImage: "url('/satellite.png" }}
                    className='h-[20rem] md:h-full md:w-full absolute 
                    right-[10vh] bg-no-repeat
            w-[20rem] bg-contain bg-center'
                ></motion.div>
            </motion.div>
            <motion.div
                style={{ backgroundImage: "url('/mountains.png')" }}
                className='absolute h-[100%] w-screen bg-no-repeat z-[5] bg-contain bg-bottom'
            ></motion.div>
        </motion.div>
    );
}
