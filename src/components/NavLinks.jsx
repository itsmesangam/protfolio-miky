/** @format */
import { motion } from "framer-motion";

const variant = {
    open: {
        transition: {
            staggerChildren: 0.2
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    }
};
const itemVariant = {
    open: {
        opacity: 1,
        y: 0
    },
    closed: {
        opacity: 0,
        y: 50
    }
};

export default function NavLinks() {
    const links = ["home", "about", "projects",'skills', "contact"];
    return (
        <motion.div
            variants={variant}
            className='flex flex-col justify-center items-center h-full absolute w-full gap-y-5'
        >
            {links.map(item => (
                <motion.a
                    whileTap={{ scale: 1.1 }}
                    variants={itemVariant}
                    key={item}
                    href={`#${item}`}
                    className='capitalize'
                >
                    {item}
                </motion.a>
            ))}
        </motion.div>
    );
}
