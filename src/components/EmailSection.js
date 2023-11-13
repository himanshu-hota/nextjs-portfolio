import React from 'react';
import GithubIcon from '../../public/github-icon.svg';
import LinkedinIcon from '../../public/linkedin-icon.svg';
import InstaIcon from '../../public/insta-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const formURL = process.env.FORM_URL;

const EmailSection = () => {

    
    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 py-14 gap-4 relative"
        >
         
            <div>
                <h5 className="text-xl font-bold text-white my-2">Lets Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-mdmd"> Whether you have a project in mind, want to discuss collaboration opportunities, or simply share ideas, I&apos;m eager to hear from you. Feel free to reach out, and let&apos;s turn possibilities into reality.
                </p>

            </div>
          
            <div className="socials animate-border bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] flex flex-row justify-center items-center gap-3 border-2  px-5 py-3 rounded-xl">
                <Link href={'https://github.com/himanshu-hota'}><Image src={GithubIcon} alt='Github icon' /></Link>
                <Link href={'https://www.linkedin.com/in/himanshu-hota-187995200/'}><Image src={LinkedinIcon} alt='Github icon' /></Link>
                <Link href={'https://www.instagram.com/himanshuhota01/'}><Image src={InstaIcon} alt='Instagram icon' height={50} width={50} /></Link>
            </div>

            {/* <div>
                <form action={formURL} method='POST' className='flex flex-col mt-6
                    '>
                    <div className='mb-6'>
                        <label htmlFor="name" className='text-white block mb-2 text-sm font-medium '>Your Name</label>
                        <input type="text" id='name' required placeholder='Jacob@gmail.com' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 ' />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium '>Your Email</label>
                        <input type="text" id='subject' required placeholder='Say hello here...' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 ' />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className='text-white block mb-2 text-sm font-medium '>Message</label>
                        <textarea
                            name="message"
                            id="message"
                            cols="30" rows="10"
                            placeholder='Leave your message here....'
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        />

                    </div>

                    <button type='submit' className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5  px-5 rounded-lg w-full'>Send Message</button>

                </form>
            </div> */}

        </section>
    )
}

export default EmailSection;