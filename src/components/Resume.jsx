import React from "react"

const Resume = () => {
  const downloadResume = () => {
    // Replace with the actual URL of your PDF file
    const resumeUrl = "./Subhadeep_Sarkar-portfolio.pdf"

    // Create a link element to trigger the download
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Subhadeep_Sarkar-portfolio.pdf"

    // Trigger the click event on the link to initiate the download
    link.click()
  }
  return (
    <div id="resume">
      <button id="resume-button-1" onClick={downloadResume}>
        Download Resume
      </button>
    </div>
  )
}

export default Resume
