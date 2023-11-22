import React from "react"
import { AiOutlineCloudDownload } from "react-icons/ai"

export const downloadResume = () => {
  const resumeUrl = "./Subhadeep_Sarkar-portfolio.pdf"

  const link = document.createElement("a")
  link.href = resumeUrl
  link.download = "Subhadeep_Sarkar-portfolio.pdf"
  link.click()

  const resumeLink =
    "https://drive.google.com/file/d/1Ltw97g6TBzq-ZJAcduOLU4NlELoI-Xs-/view?usp=drive_link"
  window.open(resumeLink, "_blank")
}

const About = () => {
  return (
    <section id="about" className="about section py-10">
      <h1 className="text-2xl text-center m-10">About</h1>

      <div id="user-detail-introsize={20}">
        I'm Subhadeep, a fullstack developer. I am proficient in HTML, CSS, and
        JavaScript. I specialize in building dynamic front-end experiences with
        React and Redux. My expertise extends to the back-end, where I work with
        Node.js and MongoDB. I'm passionate about creating efficient and
        user-friendly applications, dedicated to crafting robust and innovative
        solutions to meet today's digital demands.
      </div>
      <button
        id="resume-button-2"
        onClick={downloadResume}
        className="bg-blue-300 px-3 py-3 rounded my-2 flex gap-2 items-center"
      >
        Download Resume <AiOutlineCloudDownload size={20} />
      </button>
    </section>
  )
}

export default About
