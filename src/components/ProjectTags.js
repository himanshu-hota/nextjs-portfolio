import React from 'react';

const ProjectTags = ({name,onClick,isSelected}) => {

    const buttonStyles = isSelected ? "text-white bg-primary-500" : "text-p[#ADB7BE] border-slate-600 hover:border-white  ";

  return (
      <button className={`rounded-full border-2 px-6 py-2 md:py-4  text-xl cursor-pointer ${buttonStyles}`} onClick={() => onClick(name)} >{name}</button>
  )
}

export default ProjectTags;