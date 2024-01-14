/** @format */

import { TypeAnimation } from "react-type-animation";

export default function Typing({size,color}) {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                "Frontend developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Backend developer",
                1000,
                "MERN developer",
                1000,
                "React developer",
                1000,
                "Nodejs developer",
                1000
            ]}
            wrapper='span'
            speed={50}
            style={{
                fontSize: size,
                fontWeight:'bold',
                color,
                display: "inline-block"
            }}
            repeat={Infinity}
        />
    );
}
