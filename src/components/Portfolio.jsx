/** @format */
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import portfolio from "../assets/portfolio.jpg";
import ecomm from "../assets/ecomm.jpg";
import recipe from "../assets/recipe.jpeg";
const desc = {
    recipe: (
        <p className='text-md md:text-2xl'>
            this is a recepe finder app where you can search for the recipes and
            also get the details making process of it. This app is made with React,
            React-Router-Dom and third party API.
        </p>
    ),
    ecomm: (
        <p className='text-md md:text-2xl'>
            This is a Full Stack E-commerce website with authentication system.
            This app is made with React, React-Router-Dom, Redux Toolkit,
            Node-js, express js. I've used MongoDB for database.
        </p>
    ),
    portfolio: (
        <p className='text-md md:text-2xl'>
            It is my first portfolio website. This project is made with React,
            Tailwind css and React Smooth Scroll.
        </p>
    ),
    chat: (
        <p className='text-md md:text-2xl'>
            This is the fully functional chat application, where you can chat
            with all the login users individually. This app is made with React,
            React-Router-Dom, Node-js, express js and MongoDB.
        </p>
    )
};
const projects = [
    {
        id: 1,
        name: "Recipe App",
        img: recipe,
        description: desc.recipe,
        code: "https://github.com/mukies/recipe-app"
    },
    {
        id: 2,
        name: "E-commerce App",
        img: ecomm,
        description: desc.ecomm,
        code: "https://github.com/mukies/full-stack-ecommerce-website"
    },
    {
        id: 3,
        name: "Portfolio",
        img: portfolio,
        description: desc.portfolio,
        code: "https://github.com/mukies/portfolio-v1"
    },
    {
        id: 4,
        name: "Chat App",
        img: "https://res.cloudinary.com/practicaldev/image/fetch/s--rCjQOckX--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8ylxpg8dsaos9a1flawq.png",
        description: desc.chat,
        code: "https://github.com/mukies/chat-app"
    }
];
function Single({ item }) {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1.3, 0]);

    return (
        <section ref={ref}>
            <div
                className='h-screen  w-full justify-center items-center
                overflow-hidden px-5 md:px-20
        gap-y-20 flex flex-col'
            >
                <motion.div style={{ scale }} className=' '>
                    <img
                        className='  rounded-xl '
                        src={item.img}
                        alt={item.name}
                    />
                </motion.div>
                <motion.div style={{ scale }} className=''>
                    <h1 className='text-4xl text-orange-500 md:text-[3rem] text-center'>
                        {item.name}
                    </h1>
                    <hr className='my-3 border-amber-500 border-2' />
                    <div className='px-1  md:px-10'>
                        {item.description}
                        <button
                            className='p-4 my-5 bg-green-500 rounded-lg
                        hover:bg-amber-300 font-bold text-white'
                        >
                            <a className='' href={item.code}>
                                see code
                            </a>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
export default function Portfolio() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });
    const progressX = useSpring(scrollYProgress, {
        stiffness: 300,
        damping: 20
    });
    return (
        <motion.div
            style={{ backgroundImage: "url('/stars.png')" }}
            ref={ref}
            className='bg-contain bg-fixed relative'
        >
            <div
                className='sticky top-[calc(100dvh-80px)] h-auto
                backdrop-blur-md z-10 md:top-20 '
            >
                <p className='text-center  font-bold text-orange-600 text-[40px] md:text-[5rem]'>
                    Projects
                </p>
                <motion.div
                    style={{ scaleX: progressX }}
                    className='h-5 bg-white'
                ></motion.div>
            </div>
            {projects.map(i => (
                <Single key={i} item={i} />
            ))}
        </motion.div>
    );
}
