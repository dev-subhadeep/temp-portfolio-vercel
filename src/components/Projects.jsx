import React from "react"
import { projects } from "../utils/constants"
import Project from "./Project"

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-2xl text-center m-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <Project key={project.id} {...project} />
        })}
      </div>
    </section>
  )
}

export default Projects
