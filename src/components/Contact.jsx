import React from "react"
import { BsGithub, BsLinkedin, BsTelephoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

const Contact = () => {
  return (
    <section id="contact" className="my-10">
      <h1 className="text-2xl text-center m-10">Contact</h1>
      <ul>
        <li>
          <a
            className="flex flex-row items-center gap-2"
            href="https://github.com/dev-subhadeep"
            id="contact-github"
          >
            <BsGithub /> github.com/dev-subhadeep
          </a>
        </li>
        <li>
          <a
            className="flex flex-row items-center gap-2"
            href="https://www.linkedin.com/in/subhadeep-xcv/"
            id="contact-linkedin"
          >
            <BsLinkedin /> LinkedIn: linkedin.com/in/subhadeep-xcv/
          </a>
        </li>
        <li>
          <a
            className="flex flex-row items-center gap-2"
            href="callto:+919831810147"
            id="contact-phone"
          >
            <BsTelephoneFill /> Phone Number: +91 9831810147
          </a>
        </li>
        <li>
          <a
            className="flex flex-row items-center gap-2"
            href="mailto:subhadeepsarkar1995@gmail.com"
            id="contact-email"
          >
            <MdEmail /> Email:{" "}
            <a
              className="flex flex-row items-center gap-2"
              href="mailto:subhadeepsarkar1995@gmail.com"
            >
              subhadeepsarkar1995@gmail.com
            </a>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact
