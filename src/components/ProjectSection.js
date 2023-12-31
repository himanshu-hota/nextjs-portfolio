"use client";

import React, { useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTags from './ProjectTags';
import { motion, useInView } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const projectsData = [
    {
        id: 1,
        title: "Dev-Point",
        image: "/images/projects/1.png",
        tag: ["All", "React"],
        gitUrl: "https://github.com/himanshu-hota/devpoint-frontend",
        previewUrl: "https://devpoint-frontend.vercel.app/",
        style: "shadow-green-900",
    },
    {
        id: 2,
        title: "Movix",
        image: "/images/projects/2.png",
        tag: ["All", "React"],
        gitUrl: "https://github.com/himanshu-hota/movix",
        previewUrl: "https://movix-ashen-six.vercel.app/",
        style: "shadow-blue-500",
    }
    ,
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
    {
        id: 11,
        title: "Contact List",
        image: "/images/projects/11.png",
        tag: ["All", "React"],
        gitUrl: "https://github.com/himanshu-hota/contacts",
        previewUrl: "https://main--jocular-elf-15d6df.netlify.app/",
        style: "shadow-green-900",
    },


];

const ProjectSection = () => {

    const [tag, setTag] = useState("All");
    // const ref = useRef(null);
    // const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter(project => project.tag.includes(tag));

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    }



    return (
        <section id='projects' className='w-full'>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 '>My projects</h2>

            <div className="text-white flex flex-wrap md:flex-row justify-center items-center gap-3 py-6  ">
                <ProjectTags name="All" onClick={handleTagChange} isSelected={tag === "All"} />
                <ProjectTags name="Javascript" onClick={handleTagChange} isSelected={tag === "Javascript"} />
                <ProjectTags name="React" onClick={handleTagChange} isSelected={tag === "React"} />
                <ProjectTags name="Next JS" onClick={handleTagChange} isSelected={tag === "Next JS"} />
                <ProjectTags name="DSA" onClick={handleTagChange} isSelected={tag === "DSA"} />

            </div>

            <div className="carousels w-full h-full md:w-[40%] md:h-[60vh] mx-auto ">
                <Carousel infiniteLoop={true} swipeable={true} autoPlay={true} stopOnHover={true} transitionTime={1000} showThumbs={false} >
                    {filteredProjects.map((project, index) => (

                        <div className="py-8 md:px-4 md:w-full md:h-full rounded-md" key={project.id}>
                            <ProjectCard

                                title={project.title}
                                imageUrl={project.image}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}
                                style={project.style}
                            />
                        </div>

                    ))}
                </Carousel>
            </div>

        </section >
    )
}

export default ProjectSection;




