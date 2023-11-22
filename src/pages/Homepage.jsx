import React from "react"
import Home from "../components/Home"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Skills from "../components/Skills"
import Resume from "../components/Resume"
import Stats from "../components/Github/Stats"
import Tools from "../components/Tools"

const Homepage = () => {
  return (
    <div className="mt-40 container mx-auto">
      <Home />
      {/* <Resume /> */}
      <About />
      <Skills />
      <Tools />
      <Projects />
      <Stats />
      <Contact />
    </div>
  )
}

export default Homepage
