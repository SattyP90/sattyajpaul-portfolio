"use client"

import { useState, useRef, useEffect } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import "./Projects.css"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "TableO",
      description: "A Python-based project for creating and managing timetables.",
      image: "https://via.placeholder.com/300x200",
      tags: ["Python", "SQL", "Turtle Graphics"],
    },
    {
      id: 2,
      title: "Hospital Admin Dashboard",
      description: "A JFrame group project for managing hospital data. Includes login and SQL Databases.",
      image: "https://via.placeholder.com/300x200",
      tags: ["Java", "SQL", "SQL Workbench", "JFrame", "Github"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills.",
      image: "https://via.placeholder.com/300x200",
      tags: ["HTML", "CSS", "JavaScript", "React", "GitHub"],
    },
    // Add more projects here to see the carousel in action
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const projectsRef = useRef(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    if (projectsRef.current) {
      const cardWidth = projectsRef.current.querySelector(".project-card").offsetWidth
      projectsRef.current.scrollTo({
        left: currentSlide * cardWidth,
        behavior: "smooth",
      })
    }
  }, [currentSlide])

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="carousel-container">
          <button onClick={prevSlide} className="carousel-arrow left-arrow">
            <FaChevronLeft />
          </button>
          <div className="projects-grid" ref={projectsRef}>
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span className="tag" key={index}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={nextSlide} className="carousel-arrow right-arrow">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}





