"use client"

import { useState, useEffect, useRef } from "react"
import "./Hero.css"

export default function Hero({ isModalOpen, toggleModal }) {
const [text, setText] = useState("")
const [isDeleting, setIsDeleting] = useState(false)
const [loopNum, setLoopNum] = useState(0)
const [typingSpeed, setTypingSpeed] = useState(150)

const skills = [
"build web applications",
"create responsive designs",
"develop with React",
"code in JavaScript",
"work with Node.js",
"design user interfaces",
"develop with Python",
"develop with Java",
"work with SQL databases",
"solve complex problems",
]

const currentSkill = useRef("")
const modalRef = useRef(null)

//close modal when clicking outside
useEffect(() => {
function handleClickOutside(event) {
  if (modalRef.current && !modalRef.current.contains(event.target)) {
    toggleModal()
  }
}

if (isModalOpen) {
  document.addEventListener("mousedown", handleClickOutside)
}
return () => {
  document.removeEventListener("mousedown", handleClickOutside)
}
}, [isModalOpen, toggleModal])

useEffect(() => {
const timer = setTimeout(() => {
  handleType()
}, typingSpeed)

return () => clearTimeout(timer)
}, [text, isDeleting])

const handleType = () => {
const i = loopNum % skills.length
currentSkill.current = skills[i]

const updatedText = isDeleting
  ? currentSkill.current.substring(0, text.length - 1)
  : currentSkill.current.substring(0, text.length + 1)

  setText(updatedText)

  if (isDeleting) {
    setTypingSpeed(75)
  }

  if (!isDeleting && updatedText === currentSkill.current) {
    setIsDeleting(true)
    setTypingSpeed(1500)
  } else if (isDeleting && updatedText === "") {
    setIsDeleting(false)
    setLoopNum(loopNum + 1)
    setTypingSpeed(300)
  } else {
    setTypingSpeed(isDeleting ? 75 : 150)
  }
}

return (
<section id="about" className="hero">
<div className="container">
<div className="hero-content">
<div className="avatar">
<img src="/placeholder.svg" alt="picture" />
</div>
<div className="hero-text">
<div className="typing-container">
<h1 className="typing-text">
Hi, I'm Sattyaj Paul.
<br /> I can {text}
<span className="cursor">‎ </span>
</h1>
</div>
<h2>Software Engineer</h2>
<div className="hero-buttons">
<a href="#" className="btn secondary-btn" onClick={toggleModal}>
Contact Me
</a>
</div>
</div>
</div>
</div>

  {isModalOpen && (
    <div className="modal-overlay">
      <div className="contact-modal" ref={modalRef}>
        <button className="close-modal" onClick={toggleModal}>
          &times;
        </button>
        <h3>Contact Information</h3>
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <svg
                xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <div className="contact-text">
              <p className="contact-label">Email</p>
              <p className="contact-value">sattyaj.paul@hotmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg
                xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </div>
            <div className="contact-text">
              <p className="contact-label">GitHub</p>
              <a
                href="https://github.com/SattyP90"
                className="contact-value"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/SattyP90
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg
                xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <div className="contact-text">
              <p className="contact-label">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/sattyaj-paul-621a40314/"
                className="contact-value"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://linkedin.com/in/sattyaj-paul-621a40314
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</section>
)
}