import React from 'react';
import GithubIcon from '../../public/github-icon.svg';
import LinkedinIcon from '../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const formURL = process.env.FORM_URL;

const EmailSection = () => {

    
    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        >
         
            <div>
                <h5 className="text-xl font-bold text-white my-2">Lets Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-mdmd"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt temporibus dolor, ducimus aliquam labore ullam, vitae enim amet autem assumenda laudantium. Deserunt, ipsum! Voluptates aperiam reprehenderit saepe. Ex, delectus ratione!
                </p>

                <div className="socials flex flex-row gap-3">
                    <Link href={'github.com'}><Image src={GithubIcon} alt='Github icon' /></Link>
                    <Link href={'Linkedin.com'}><Image src={LinkedinIcon} alt='Github icon' /></Link>
                </div>



            </div>

            <div>
                <form action={formURL} method='POST' className='flex flex-col mt-6
                    '>
                    <div className='mb-6'>
                        <label htmlFor="email" className='text-white block mb-2 text-sm font-medium '>Your Email</label>
                        <input type="email" id='email' required placeholder='Jacob@gmail.com' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 ' />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium '>Your Email</label>
                        <input type="text" id='subject' required placeholder='Say hello here...' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 ' />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="">Message</label>
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
            </div>

        </section>
    )
}

export default EmailSection;