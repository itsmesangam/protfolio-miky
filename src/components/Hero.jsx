/** @format */
import Typing from "./Typing.jsx";
import { motion } from "framer-motion";
import "../index.css";

const variants = {
    closed: { opacity: 0 },
    open: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            type: "spring",
            delay: 0.2,
            stiffness: 400,
            damping: 10,
            staggerChildren: 0.4
        }
    }
};
const letter = {
    closed: { x: 0 },
    open: {
        x: "-90%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20
        }
    }
};

export default function Hero() {
    return (
        <div
            className='hero-div lg:bg-contain overflow-hidden relative flex flex-col md:justify-between justify-center
            px-4 md:px-10
            gap-y-8 items-center md:flex-row
        md:mx-auto bg-gray-400 h-[calc(100vh-80px)]'
        >
            <motion.div
                initial='closed'
                variants={variants}
                animate='open'
                className='w-full flex flex-col md:gap-y-7 gap-y-3'
            >
                <motion.p
                    whileTap={{ scale: 1.1 }}
                    variants={variants}
                    initial={{ x: 300, opacity: 0 }}
                    className='text-xl md:text-3xl'
                >
                    Hello, my name is
                </motion.p>
                <motion.p
                    whileTap={{ scale: 1.1 }}
                    variants={variants}
                    initial={{ x: -300, opacity: 0 }}
                    className='text-white inline-block leading-[50px]
                    md:tracking-wider text-[50px] md:text-[75px]  md:font-bold'
                >
                    Mukesh bhattarai
                </motion.p>
                <motion.p
                    whileTap={{ scale: 1.1 }}
                    variants={variants}
                    initial={{ y: 500, opacity: 0 }}
                    className=' text-2xl md:text-3xl'
                >
                    and I'm a <Typing color={"yellow"} size={"25px"} />
                </motion.p>
                <div className=' flex mt-5 md:ml-5 md:scale-125 justify-between w-[11rem]'>
                    <motion.button
                        initial={{ scale: 1.3, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className=' bg-red-700
                text-white px-3 w-[8rem] font-bold md:w-[9rem] py-2 rounded-xl cursor-pointer'
                    >
                        <a href='#contact'>Hire me</a>
                    </motion.button>
                    <motion.img
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: 20, opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 1,
                            repeat: Infinity,
                            repeatType: "mirror"
                        }}
                        className='w-10'
                        src='/scroll.png'
                        alt='scroll'
                    />
                </div>
            </motion.div>
            <div className='absolute top-[3vh] md:top-[5vh]'>
                <motion.p
                    variants={letter}
                    initial='closed'
                    animate='open'
                    className='text-[8rem] md:text-[10rem] text-[#ffffff1d] whitespace-nowrap font-bold'
                >
                    react redux node-js express-js mongoDB
                </motion.p>
            </div>
        </div>
    );
}
