"use client"

import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Certificates from "./components/Certificates"
import Footer from "./components/Footer"
import TerminalLoader from "./components/TerminalLoader"
import "./App.css"

function App() {
  const [loading, setLoading] = useState(true)
  const [headerVisible, setHeaderVisible] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false) // State for the modal

  const handleLoadComplete = () => {
    setLoading(false)

    setTimeout(() => {
      setHeaderVisible(true)

      setTimeout(() => {
        setContentVisible(true)
      }, 600)
    }, 200)
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className="portfolio-app">
      {loading && <TerminalLoader onLoadComplete={handleLoadComplete} />}

      <div className={headerVisible ? "header-wrapper header-animate-in" : "header-wrapper header-hidden"}>
        {/* Pass the toggleModal function as a prop to Header */}
        <Header toggleModal={toggleModal} />
      </div>

      <div className={contentVisible ? "content-wrapper content-animate-in" : "content-wrapper content-hidden"}>
        <main>
          {/* Pass the state and function to the Hero component */}
          <Hero isModalOpen={isModalOpen} toggleModal={toggleModal} />
          <Projects />
          <Education />
          <Skills />
          <Certificates />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App