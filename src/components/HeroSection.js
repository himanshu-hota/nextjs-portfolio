"use client";
import React from 'react';
import Image from 'next/image';
import AnimatedName from './AnimatedName';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSecion = () => {
    return (
        <section>
            <div className="px-12 grid grid-cols-1 sm:grid-cols-12 ">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start ">
                    <h1 className='text-white mb-4 text-3xl lg:text-6xl sm:text-5xl font-extrabold '>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 '>Hello I&apos;m {" "} </span>
                        <br />
                        <AnimatedName />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 ">
                        Welcome to my digital space! I&apos;m a Full Stack MERN Developer with a passion for crafting seamless digital experiences. Leveraging the power of MongoDB, Express.js, React.js, and Node.js, I specialize in building dynamic and scalable web applications. Explore my portfolio to discover a collection of projects showcasing my dedication to clean code, user-centric design, and innovation. Let&apos;s collaborate and bring your ideas to life!
                    </p>
                    <div className='flex flex-col md:flex-row'>

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
                    className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="custom-bounce rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
                        <Image src={'/images/hero-image.png'} alt='Hero image' className=' rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  ' width={300} height={300} />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSecion;