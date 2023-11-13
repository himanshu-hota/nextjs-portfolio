"use client";

import React, { useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTags from './ProjectTags';
import { motion, useInView } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: "Contact List",
        image: "/images/projects/1.png",
        tag: ["All", "React"],
        gitUrl: "https://github.com/himanshu-hota/contacts",
        previewUrl: "https://main--jocular-elf-15d6df.netlify.app/",
        style: "shadow-green-900",
    },
    {
        id: 2,
        title: "Netflix",
        image: "/images/projects/2.png",
        tag: ["All", "React"],
        gitUrl: "https://github.com/himanshu-hota/Netflix-clone",
        previewUrl: "https://netflix-clone-3bbfc.web.app/",
        style: "shadow-blue-500",
    },
    {
        id: 3,
        title: "NFT Marketplace",
        image: "/images/projects/3.png",
        tag: ["All", "React"],
        gitUrl: "https://github.com/himanshu-hota/nft-marketplace",
        previewUrl: "https://nft-market-bc1da.web.app/",
        style: "shadow-yellow-500",
    },
    {
        id: 4,
        title: "E-Commerce Dashboard",
        image: "/images/projects/4.png",
        tag: ["All", "React"],
        gitUrl: "https://github.com/himanshu-hota/ecommerce",
        previewUrl: "https://e-com-c6253.web.app/",
        style: "shadow-blue-600",
    },
    {
        id: 5,
        title: "XMDB",
        image: "/images/projects/5.png",
        tag: ["All", "Javascript"],
        gitUrl: "https://github.com/himanshu-hota/XMDB",
        previewUrl: "https://himanshu-hota.github.io/Big-barber/",
        style: "shadow-white",
    },
    {
        id: 6,
        title: "Hair Studio",
        image: "/images/projects/6.png",
        tag: ["All", "Javascript"],
        gitUrl: "https://github.com/himanshu-hota/Big-barber",
        previewUrl: "https://himanshu-hota.github.io/Big-barber/",
        style: "shadow-sky-400",
    },
    {
        id: 7,
        title: "Gravero",
        image: "/images/projects/7.png",
        tag: ["All", "Javascript"],
        gitUrl: "https://github.com/himanshu-hota/Gravero",
        previewUrl: "https://himanshu-hota.github.io/Gravero/",
        style: "shadow-gray-400",
    },
    {
        id: 8,
        title: "Shoe Store",
        image: "/images/projects/8.png",
        tag: ["All", "Next JS"],
        gitUrl: "https://github.com/himanshu-hota/shoe-store-frontend",
        previewUrl: "https://shoe-store-frontend-orpin.vercel.app/product/air-jordan-6-retro",
        style: "shadow-purple-400",
    },
    {
        id: 9,
        title: "Portfolio",
        image: "/images/projects/9.png",
        tag: ["All", "Next JS"],
        gitUrl: "https://github.com/himanshu-hota/nextjs-portfolio",
        previewUrl: "https://nextjs-portfolio-nu-tawny.vercel.app/",
        style: "shadow-sky-400",
    }, 
    {
        id: 10,
        title: "Supereme 1.0 & Striver A2Z",
        image: "/images/projects/10.png",
        tag: ["All", "DSA"],
        gitUrl: "https://github.com/himanshu-hota/SupremeBatch",
        previewUrl: "https://github.com/himanshu-hota/SupremeBatch",
        style: "shadow-green-400",
    },

];

const ProjectSection = () => {

    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter(project => project.tag.includes(tag));

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    }

    return (
        <section id='projects'>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 '>My projects</h2>

            <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
                <ProjectTags name="All" onClick={handleTagChange} isSelected={tag === "All"} />
                <ProjectTags name="Javascript" onClick={handleTagChange} isSelected={tag === "Javascript"} />
                <ProjectTags name="React" onClick={handleTagChange} isSelected={tag === "React"} />
                <ProjectTags name="Next JS" onClick={handleTagChange} isSelected={tag === "Next JS"} />
                <ProjectTags name="DSA" onClick={handleTagChange} isSelected={tag === "DSA"} />
            </div>

            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            imageUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                            style={project.style}
                        />
                    </motion.li>
                ))}
            </ul>
        </section >
    )
}

export default ProjectSection;