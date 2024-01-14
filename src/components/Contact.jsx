/** @format */
import { IoIosContact } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const form = useRef();

    const sendEmail = async e => {
        e.preventDefault();
        try {
            await emailjs.sendForm(
                "service_uxjyil9",
                "template_pjk4ooc",
                form.current,
                "N07KMWlh-92Wk76YV"
            );
            console.log("success");
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div
            style={{ backgroundImage: "url('/stars.png')" }}
            className='bg-cover bg-fixed h-auto w-full flex flex-col justify-center
        items-center'
        >
            {/*title*/}
            <div className='flex md:gap-y-5  flex-col justify-center items-center  '>
                <p className='md:text-[3rem] md:mt-10 text-2xl  text-center'>
                    Contact Me.
                </p>
                <div className='flex gap-x-3 md:gap-x-5 justify-between items-center'>
                    <div className='h-[2px] w-[3rem] md:w-[6rem] bg-red-500'></div>
                    <p className='md:text-[29px] text-lg'>get in touch</p>
                    <div className='h-[2px] w-[3rem] md:w-[6rem] bg-red-600'></div>
                </div>
            </div>
            {/*form*/}
            <div
                className='py-10 h-full flex flex-col
            justify-center items-center md:flex-row w-full'
            >
                <div className='flex flex-col gap-y-10 p-10 h-auto w-full md:h-full md:w-1/2'>
                    <div className=''>
                        <p>Get in Touch</p>
                        <p>
                            Hi, there! if you have any project releted to
                            Freelancing please send me main or DM,
                        </p>
                    </div>
                    <div className='flex flex-col gap-y-5'>
                        {/*name row*/}
                        <div className='flex gap-x-10 justify-start items-center'>
                            <span>
                                <IoIosContact color={"orange"} size={30} />
                            </span>
                            <div className=''>
                                <p className='text-xl capitalize font-semibold'>
                                    name
                                </p>
                                <p>Mukesh Bhattarai</p>
                            </div>
                        </div>
                        {/*address row*/}
                        <div className='flex gap-x-10 justify-start items-center'>
                            <span>
                                <IoLocationSharp color={"orange"} size={30} />
                            </span>
                            <div className=''>
                                <p className='text-xl capitalize font-semibold'>
                                    address
                                </p>
                                <p>Bharatpur-25, Chitwan</p>
                            </div>
                        </div>
                        {/*email row*/}
                        <div className='flex gap-x-10 justify-start items-center'>
                            <span>
                                <BiLogoGmail color={"orange"} size={30} />
                            </span>
                            <div className=''>
                                <p className='text text-xl capitalize font-semibold'>
                                    email
                                </p>
                                <p>muk.yess@gmail.com</p>
                            </div>
                        </div>
                        {/*phone row*/}
                        <div className='flex gap-x-10 justify-start items-center'>
                            <span>
                                <FaPhoneAlt color={"orange"} size={30} />
                            </span>
                            <div className=''>
                                <p className='text text-xl capitalize font-semibold'>
                                    phone
                                </p>
                                <p>+977 9845805178</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto md:w-1/2'>
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className='w-[80%] flex gap-y-3 flex-col justify-center
                    mx-auto'
                    >
                        <p className='text-xl md:text-4xl md:mb-5 text-center '>
                            Message Me.
                        </p>
                        <input
                            required
                            name='name'
                            className='w-full focus:outline-2
                            focus:outline-blue-400 rounded-lg text-black px-3 h-10'
                            type='text'
                            placeholder='Full Name'
                        />
                        <input
                            required
                            name='email'
                            className='w-full focus:outline-2
                            focus:outline-blue-400 rounded-lg text-black px-3 h-10'
                            type='email'
                            placeholder='Email'
                        />
                        <input
                            required
                            name='subject'
                            className='w-full focus:outline-2
                            focus:outline-blue-400 rounded-lg text-black px-3 h-10'
                            type='text'
                            placeholder='Subject'
                        />
                        <textarea
                            required
                            name='message'
                            className='w-full focus:outline-2
                            focus:outline-blue-400 rounded-lg text-black px-3 '
                            rows='9'
                            cols='2'
                            placeholder='Message...'
                        />

                        <input
                            type='submit'
                            className='w-[30%] h-10 px-3
                        bg-green-600 text-white rounded-lg '
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
