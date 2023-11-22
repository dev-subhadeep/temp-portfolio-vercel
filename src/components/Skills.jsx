import React from "react"
import { BiLogoMongodb, BiLogoReact } from "react-icons/bi"
import { SiExpress, SiNodedotjs } from "react-icons/si"

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="text-2xl text-center m-10">Skills</h2>
      <div className="flex flex-col justify-between md:flex-row ">
        <div className="skills-card shadow-md p-10 mx-auto">
          <BiLogoMongodb size={70} className="skills-card-img" />
          <h4 className="skills-card-name text-center">MongoDB</h4>
        </div>
        <div className="skills-card shadow-md p-10 mx-auto">
          <SiExpress size={70} className="skills-card-img" />
          <h4 className="skills-card-name text-center">Express</h4>
        </div>
        <div className="skills-card shadow-md p-10 mx-auto">
          <BiLogoReact size={70} className="skills-card-img" />
          <h4 className="skills-card-name text-center">React</h4>
        </div>
        <div className="skills-card shadow-md p-10 mx-auto">
          <SiNodedotjs size={70} className="skills-card-img" />
          <h4 className="skills-card-name text-center">Node</h4>
        </div>
      </div>
    </section>
  )
}

export default Skills
