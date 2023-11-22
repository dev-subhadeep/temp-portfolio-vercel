import React from "react"

const Project = ({ title, img, desc, tech, repo, live }) => {
  return (
    <div
      className="project-card shadow-lg p-10 rounded"
      style={{ maxWidth: "450px" }}
    >
      <img src={img} alt={title} />
      <div className="project-title text-xl my-2">{title}</div>
      <div className="project-description">{desc}</div>
      <div className="project-tech-stack">
        <ul className="flex gap-2">
          {tech.map((el) => (
            <li className="text-yellow-500">{el}</li>
          ))}
        </ul>
      </div>
      <div className="project-github-link">
        Github Link:{" "}
        <a className="text-blue-500" href={repo}>
          {repo}
        </a>
      </div>
      <div className="project-deployed-link">
        Deployed Link:{" "}
        <a className="text-blue-500" href={live}>
          {live}
        </a>
      </div>
    </div>
  )
}

export default Project
