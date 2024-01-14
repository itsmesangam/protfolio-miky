/** @format */

export default function Skills() {
    const skills = [
        { id: 1, name: "html", level: 70 },
        { id: 2, name: "css", level: 68 },
        { id: 3, name: "javascript", level: 66 },
        { id: 4, name: "react-js", level: 65 },
        { id: 5, name: "node-js", level: 75 },
        { id: 6, name: "express-js", level: 79 },
        { id: 7, name: "mongoDB", level: 90 }
    ];
    return (
        <div
            style={{ backgroundImage: "url('/stars.png')" }}
            className='flex bg-cover h-full py-10 bg-fixed flex-col  w-screen  justify-center 
          items-center'
        >
            <p className='md:text-[5rem] text-[60px]'>My Skills</p>
            <div className='flex gap-x-3 md:gap-x-5 justify-between items-center'>
                <div className='h-1 w-[3rem] md:w-[6rem] bg-red-600'></div>
                <p className='md:text-[25px] text-white text-xl'>what i know</p>
                <div className='h-1 w-[3rem] md:w-[6rem] bg-red-600'></div>
            </div>
            <div
                className='flex py-10 md:gap-x-3 gap-y-5 justify-center items-center flex-col
            md:flex-row'
            >
                <div
                    className='left flex flex-col justify-center h-1/2 gap-y-5 md:h-auto
            md:px-8 px-2 w-full md:w-1/2'
                >
                    <p className='text-xl text-center inline-block py-3 text-white font-bold border-b-2 border-b-white'>
                        My creative skills & experiences.
                    </p>
                    <p className='text-center md:text-lg '>
                        As a junior Full Stack developer, I will bring
                        enthusiasm and a willingness to learn to every project.
                        I'm comfortable with the basics of React, Node-js and
                        MongoDB, so I can build simple Full Stack applications
                        with ease. Also, I'm eager to work with more experienced
                        developers to improve my skills and tackle increasingly
                        complex projects. With my attention to detail and
                        dedication to writing clean, efficient code, and I'm
                        poised to make a valuable contribution to any
                        development team.
                    </p>
                </div>
                <div className='right h-auto md:h-auto w-full md:w-1/2'>
                    {/*html*/}
                    <div className='  my-4 relative w-full'>
                        <div className='flex px-2 w-full justify-between'>
                            <p className='font-bold text-xl'>HTML</p>
                            <p className='font-bold text-xl'>70%</p>
                        </div>
                        <div className='absolute h-2 bg-white w-full'></div>
                        <div className='absolute h-2 bg-orange-700 w-[70%]'></div>
                    </div>
                    {/*css*/}
                    <div className='  my-4 relative w-full'>
                        <div className='flex px-2 w-full justify-between'>
                            <p className='font-bold text-xl'>CSS</p>
                            <p className='font-bold text-xl'>65%</p>
                        </div>
                        <div className='absolute h-2 bg-white w-full'></div>
                        <div className='absolute h-2 bg-orange-700 w-[65%]'></div>
                    </div>
                    {/*tailwind*/}
                    <div className='  my-4 relative w-full'>
                        <div className='flex px-2 w-full justify-between'>
                            <p className='font-bold text-xl'>Tailwind CSS</p>
                            <p className='font-bold text-xl'>75%</p>
                        </div>
                        <div className='absolute h-2 bg-white w-full'></div>
                        <div className='absolute h-2 bg-orange-700 w-[75%]'></div>
                    </div>
                    {/*react*/}
                    <div className='my-4 relative w-full'>
                        <div className='flex px-2 w-full justify-between'>
                            <p className='font-bold text-xl'>React js</p>
                            <p className='font-bold text-xl'>60%</p>
                        </div>
                        <div className='absolute h-2 bg-white w-full'></div>
                        <div className='absolute h-2 bg-orange-700 w-[60%]'></div>
                    </div>
                    {/*redux*/}
                    <div className='  my-4 relative w-full'>
                        <div className='flex px-2 w-full justify-between'>
                            <p className='font-bold text-xl'>Redux Toolkit</p>
                            <p className='font-bold text-xl'>65%</p>
                        </div>
                        <div className='absolute h-2 bg-white w-full'></div>
                        <div className='absolute h-2 bg-orange-700 w-[65%]'></div>
                    </div>
                    {/*node*/}
                    <div className='  my-4 relative w-full'>
                        <div className='flex px-2 w-full justify-between'>
                            <p className='font-bold text-xl'>Node js</p>
                            <p className='font-bold text-xl'>55%</p>
                        </div>
                        <div className='absolute h-2 bg-white w-full'></div>
                        <div className='absolute h-2 bg-orange-700 w-[55%]'></div>
                    </div>
                    {/*express*/}
                    <div className='  my-4 relative w-full'>
                        <div className='flex px-2 w-full justify-between'>
                            <p className='font-bold text-xl'>Express js</p>
                            <p className='font-bold text-xl'>65%</p>
                        </div>
                        <div className='absolute h-2 bg-white w-full'></div>
                        <div className='absolute h-2 bg-orange-700 w-[65%]'></div>
                    </div>
                    {/*mongoDB*/}
                    <div className='  my-4 relative w-full'>
                        <div className='flex px-2 w-full justify-between'>
                            <p className='font-bold text-xl'>MongoDB</p>
                            <p className='font-bold text-xl'>70%</p>
                        </div>
                        <div className='absolute h-2 bg-white w-full'></div>
                        <div className='absolute h-2 bg-orange-700 w-[70%]'></div>
                    </div>
                    {/*git*/}
                    <div className='my-4 relative w-full'>
                        <div className='flex px-2 w-full justify-between'>
                            <p className='font-bold text-xl'>Git</p>
                            <p className='font-bold text-xl'>40%</p>
                        </div>
                        <div className='absolute h-2 bg-white w-full'></div>
                        <div className='absolute h-2 bg-orange-700 w-[40%]'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
