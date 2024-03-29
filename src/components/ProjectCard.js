import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const ProjectCard = ({ imageUrl, title, gitUrl, previewUrl, style }) => {
    return (
        <div>
            <div
                className={`h-52 md:h-72 rounded-xl relative group shadow-md hover:scale-105 duration-500 py-4 ${style} `}
                style={{ background: `url(${imageUrl})`, backgroundSize: "100% 100%" }}
            >
                <div className="overlay rounded-xl  items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                    <Link
                        href={gitUrl}
                        className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                        target="_blank"
                    >


                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />

                    </Link>
                    <Link
                        href={previewUrl}
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                        target="_blank"
                    >

                        <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />


                    </Link>
                </div>
            </div>
            <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
            </div>
        </div>
    );
};

export default ProjectCard;