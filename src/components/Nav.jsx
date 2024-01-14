/** @format */
import NavLinks from "./NavLinks.jsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { HiBars2 } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";

const variants = {
    open: {
        clipPath: "circle(500px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 60
        }
    },
    closed: {
        clipPath: "circle(25px at 40px 35px)",
        transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 30
        }
    }
};
const parent = {
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    },

    closed: {
        transition: {
            staggerChildren: 0.2
        }
    }
};
const navLinks = {
    closed: { y: 80, opacity: 0 },
    open: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3
        }
    }
};
export default function Nav() {
    const links = ["home", "about", "projects", "skills", "contact"];
    const [show, setShow] = useState(false);
    return (
        <div className='h-20 '>
            <motion.div
                onClick={() => setShow(p => !p)}
                animate={show ? "open" : "closed"}
                variants={variants}
                className='fixed md:hidden left-0 z-50 bottom-0 top-0 w-[300px] bg-white
                text-black'
            >
                <div className='links z-10 '>
                    <NavLinks />
                </div>
                <div className='h-3 w-3 fixed top-5 left-6'>
                    <button>
                        {show ? <FaTimes size={30} /> : <HiBars2 size={30} />}
                    </button>
                </div>
            </motion.div>

            <div
                className='md:fixed md:top-0 md:left-0 md:right-0 md:h-20
            md:z-10 backdrop-blur-md flex md:justify-between md:px-8 justify-end items-center
            h-full '
            >
                <motion.div
                    initial='closed'
                    animate='open'
                    variants={parent}
                    className='md:flex h-full hidden  items-center gap-x-5 '
                >
                    {links.map(i => (
                        <motion.a
                            variants={navLinks}
                            key={i}
                            className='px-3 font-bold text-xl py-3 rounded-lg 
                        hover:bg-white capitalize hover:text-black duration-300'
                            href={`#${i}`}
                        >
                            {i}
                        </motion.a>
                    ))}
                </motion.div>
                <motion.div
                    initial='closed'
                    animate='open'
                    variants={parent}
                    className='flex md:z-10 gap-x-3'
                >
                    <a href='https://www.facebook.com/mukesh.bhattarai.75'>
                        <motion.img
                            variants={navLinks}
                            className='h-7 w-7 hover:scale-105 duration-500'
                            src='/facebook.png'
                            alt='facebook'
                        />
                    </a>
                    <a href='https://www.linkedin.com/in/mukesh-bhattarai-720238157?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                        <motion.img
                            variants={navLinks}
                            className='h-7 w-7 hover:scale-105 duration-500'
                            src='/linkedin.png'
                            alt='linkedin'
                        />
                    </a>
                    <a href='https://github.com/mukies'>
                        <motion.img
                            variants={navLinks}
                            className='h-7 w-7 hover:scale-105 duration-500'
                            src='/github.png'
                            alt='github'
                        />
                    </a>
                    <a href='mailto:muk.yess@gmail.com'>
                        <motion.img
                            variants={navLinks}
                            className='h-7 w-7 hover:scale-105 duration-500'
                            src='/email.png'
                            alt='email'
                        />
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
