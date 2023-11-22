import React, { useState } from "react"
import { downloadResume } from "./About"
import { AiOutlineCloudDownload } from "react-icons/ai"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className="fixed top-0 bg-slate-200 py-5 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div>Portfolio</div>
        <nav id="nav-menu">
          <ul className="hidden md:flex gap-3 text-blue-500">
            <li>
              <a className="nav-link home" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link about" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link skills" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="nav-link projects" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="nav-link contact" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a className="nav-link resume" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <button
                id="resume-button-1"
                onClick={downloadResume}
                className="flex items-center gap-2 bg-blue-500 text-white px-2 rounded"
              >
                Resume <AiOutlineCloudDownload />
              </button>
            </li>
          </ul>
        </nav>
        <div
          id="hamburger"
          className="space-y-1 md:hidden"
          onClick={toggleMenu}
        >
          <div className=" w-6 h-0.5 bg-blue-500"></div>
          <div className=" w-6 h-0.5 bg-blue-500"></div>
          <div className=" w-6 h-0.5 bg-blue-500"></div>
        </div>
      </div>
      <nav id="nav-menu-mobile" className={isMenuOpen ? "" : "hidden"}>
        <ul className="bg-indigo-50 text-center absolute top-50 left-0 w-full md:flex flex-col gap-3 font-bold text-blue-500 py-10">
          <li>
            <a className="nav-link home" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link about" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link skills" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="nav-link projects" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="nav-link contact" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a className="nav-link resume" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <button id="resume-button-1" onClick={downloadResume}>
              Download Resume
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
