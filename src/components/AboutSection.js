"use client"

import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills", id: "skills", content: (
      <ul className='list-disc pl-2'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>NextJs</li>
        <li>Tailwind CSS</li>
        <li>Node Js</li>
        <li>MongoDB</li>
        <li>Data Structures & Algorithms</li>
      </ul>
    )
  },
  {
    title: "Education", id: "education", content: (
      <ul className='list-disc pl-2'>
        <li>CodeHelp</li>
        <li>Coding Ninjas</li>
        <li>Disha Education Society</li>
      </ul>
    )
  },
  {
    title: "Certifications", id: "certifications", content: (
      <ul className='list-disc pl-2'>
        <li>Frontend Development with React & NextJS</li>
        <li>Backend Development with NodeJS</li>
        <li>DSA Supreme 1.0 by CodeHelp</li>
      </ul>
    )
  },
]


const AboutSection = () => {

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    })
  }

  return <section className='text-white '>
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src={'/images/about-image.png'} alt='about-section-image' className='drop-shadow-2xl' height={500} width={500} />
      <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
        <h2 className='text-4xl font-bold text-white mb-4 ' >About Me</h2>
        <p className='text-base lg:text-lg '>Hello! I&apos;m Himanshu Hota, a passionate MERN stack developer hailing from the vibrant city of Raipur, Chhattisgarh.I specialize in crafting seamless user experiences using technologies like React and Next.js.</p>

        <div className="flex flex-row mt-8">
          <TabButton active={tab === "skills"} selectTab={() => handleTabChange("skills")}>
            &nbsp; Skills &nbsp;
          </TabButton>

          <TabButton active={tab === "education"} selectTab={() => handleTabChange("education")}>
            &nbsp; Education &nbsp;
          </TabButton>

          <TabButton active={tab === "certifications"} selectTab={() => handleTabChange("certifications")}>
            &nbsp; Certifications &nbsp;
          </TabButton>


        </div>

        <div className="mt-8">
          {
            TAB_DATA.find(t => t.id === tab).content
          }
        </div>
      </div>
    </div>
  </section>
}

export default AboutSection;