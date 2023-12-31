"use client";
import React from 'react';
import Image from 'next/image';
import AnimatedName from './AnimatedName';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSecion = () => {
    return (
        <section className="w-full px-2 md:px-16 flex flex-col-reverse md:flex-row gap-7 justify-center  items-center ">

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full h-[50%] md:h-full text-center sm:text-left ">
                <div className="w-full h-36 md:h-50">
                    <h1 className='w-full text-white mb-4 text-3xl lg:text-6xl sm:text-5xl font-extrabold  '>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 '>Hello I&apos;m {" "} </span>
                        <br />
                        <AnimatedName />
                    </h1>
                </div>

                <p className="hidden md:block"></p>
                
                <div className='w-full flex flex-col md:flex-row '>

                    <Link href={'https://www.linkedin.com/in/himanshu-hota-187995200/'} className='w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 px-6 py-3 border-2 border-purple-500 mr-3'>Hire me</Link>

                    <Link href={'/#contact'} className='w-full sm:w-fit rounded-full bg-[#121212] hover:bg-slate-800 text-white mt-3 px-6 py-3 border-2 border-purple-500'>Contact</Link>
                </div>
            </motion.div>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                className="w-full md:w-[50%] h-[40%] md:h-full flex justify-center items-center ">
                <div className="custom-bounce  rounded-full bg-[#181818] flex justify-center items-center">
                    <Image src={'/images/hero-image.png'} alt='Hero image' className=' rounded-full ' width={400} height={400} />
                </div>
            </motion.div>

        </section>
    )
}

export default HeroSecion;