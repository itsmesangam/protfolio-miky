/** @format */
import img1 from "../assets/img1.jpg";
import Typing from "./Typing.jsx";

export default function About() {
    return (
        <div
            style={{ backgroundImage: "url('/stars.png')" }}
            className='bg-cover bg-fixed h-full py-5 md:py-10 justify-center items-center w-full flex flex-col'
        >
            <div className='flex md:gap-y-5  flex-col justify-center items-center  '>
                <p className='md:text-[3rem] md:mt-10 text-2xl  text-center'>
                    About me.
                </p>
                <div className='flex gap-x-3 md:gap-x-5 justify-between items-center'>
                    <div className='h-[2px] w-[3rem] md:w-[6rem] bg-red-500'></div>
                    <p className='md:text-[29px] text-lg'>who am i</p>
                    <div className='h-[2px] w-[3rem] md:w-[6rem] bg-red-600'></div>
                </div>
            </div>
            <div
                className='h-full flex flex-col justify-center items-center
            md:gap-y-16 w-full'
            >
                <div className='left-img flex justify-center items-center h-auto w-full'>
                    <div
                        className=' hover:scale-110 hover:h-full duration-500 h-[90%] rounded-xl
                     w-[70%] '
                    >
                        <img
                            className='h-full rounded-xl object-cover
                             w-full'
                            src={img1}
                            alt='mukesh'
                        />
                    </div>
                </div>
                <div
                    className='right-text flex flex-col gap-y-5 px-5 md:px-10
                h-auto w-full'
                >
                    <p className='font-bold hidden md:block text-4xl'>
                        I'm Mukesh and I'm a{" "}
                        <Typing size={"43px"} color={"red"} />
                    </p>
                    <p className='font-bold md:hidden text-lg'>
                        I'm Mukesh and I'm a{" "}
                        <Typing size={"18px"} color={"red"} />
                    </p>
                    <p className='text-sm md:text-2xl leading-6'>
                        <b>Hi there!</b> I am a full stack web developer. I can
                        provide clean code and pixel perfect design. I also make
                        the website responsive and more interactive with web
                        animations. Animation makes your website attractive and
                        responsive design makes your website accessible to all
                        users, regardless of their device.
                    </p>
                </div>
            </div>
        </div>
    );
}
