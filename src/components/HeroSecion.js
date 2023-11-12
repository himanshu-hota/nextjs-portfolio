import React from 'react';
import Image from 'next/image';
import AnimatedName from './AnimatedName';

const HeroSecion = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12 ">
                <div className="col-span-7 place-self-center text-center sm:text-left  ">
                    <h1 className='text-white mb-4 text-4xl lg:text-6xl sm:text-5xl font-extrabold '>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>Hello I&apos;m {" "} </span>
                        <br />
                        <AnimatedName />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas libero eius adipisci dolores nemo! Recusandae, mollitia fugit pariatur deserunt, distinctio error provident eum consequatur debitis perspiciatis itaque dolores veniam dolor.
                    </p>
                    <div>
                        <button className='mr-4 w-full sm:w-fit px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-slate-800 ' >Hire Me</button>
                        <button className='w-full sm:w-fit px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3 ' ><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Resume</span></button>
                    </div>
                </div>

                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
                        <Image src={'/images/hero-image.png'} alt='Hero image' className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  ' width={300} height={300} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSecion;