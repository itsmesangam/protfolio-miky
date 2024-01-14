/** @format */

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SecondParallex() {
    const mainDiv = useRef();
    const { scrollYProgress } = useScroll({
        target: mainDiv,
        offset: ["start start", "end start"]
    });
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "600%"]);
    const starX = useTransform(scrollYProgress, [0, 1], ["-10%", "80%"]);
    const planetY = useTransform(scrollYProgress, [0, 1], ["-50%", "100%"]);
    const planetX = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
    const astronautY = useTransform(scrollYProgress, [0, 1], ["300%", "-100%"]);
    const astronautX = useTransform(scrollYProgress, [0, 1], ["-250%", "250%"]);
    return (
        <div
            ref={mainDiv}
            className='relative overflow-hidden h-full w-full justify-center items-center flex'
        >
            <motion.h1
                style={{ y: textY }}
                className='text-[80px]
            md:text-[150px] font-bold z-[2]'
            >
                Projects
            </motion.h1>
            <motion.div
                style={{
                    x: starX,
                    backgroundImage: "url('/stars.png')",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover"
                }}
                className='h-full absolute w-full'
            ></motion.div>
            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: "360deg" }}
                transition={{ duration: 120, repeat: Infinity }}
                style={{
                    y: planetY,
                    x: planetX,
                    backgroundImage: "url('/moon.png')",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                }}
                className='h-[25rem] md:h-full md:w-full z-[3] absolute w-[25rem]'
            ></motion.div>
            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: "-360deg" }}
                transition={{ duration: 50, repeat: Infinity }}
                style={{
                    y: astronautY,
                    x: astronautX,
                    backgroundImage: "url('/astronaut.png')",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                }}
                className='h-[5rem] md:h-[10rem]  z-[3] absolute w-[5rem]
                md:w-[10rem] '
            ></motion.div>
            <motion.div
                style={{
                    backgroundImage: "url('/mountains.png')",
                    backgroundPosition: "bottom",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                }}
                className='h-full z-[4] absolute w-screen'
            ></motion.div>
        </div>
    );
}
