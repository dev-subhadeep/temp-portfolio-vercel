import React from "react"
import { TbBrandVscode } from "react-icons/tb"
import { SiPostman, SiVercel } from "react-icons/si"
import { BsGithub } from "react-icons/bs"

const Tools = () => {
  return (
    <section id="tools">
      <h2 className="text-2xl text-center m-10">Tools</h2>
      <div className="flex flex-col justify-between md:flex-row ">
        <div className="tools-card shadow-md p-10 mx-auto text-center">
          <TbBrandVscode size={70} className="tools-card-img" />
          <h4 className="tools-card-name">VS Code</h4>
        </div>
        <div className="tools-card shadow-md p-10 mx-auto text-center">
          <SiPostman size={70} className="tools-card-img" />
          <h4 className="tools-card-name">Postman</h4>
        </div>
        <div className="tools-card shadow-md p-10 mx-auto text-center">
          <BsGithub size={70} className="tools-card-img" />
          <h4 className="tools-card-name">Github</h4>
        </div>
        <div className="tools-card shadow-md p-10 mx-auto text-center">
          <SiVercel size={70} className="tools-card-img" />
          <h4 className="tools-card-name">Vercel</h4>
        </div>
      </div>
    </section>
  )
}

export default Tools
