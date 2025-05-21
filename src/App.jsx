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

  const handleLoadComplete = () => {
    setLoading(false)

    // Delay before header animation starts
    setTimeout(() => {
      setHeaderVisible(true)

      // Delay before content appears
      setTimeout(() => {
        setContentVisible(true)
      }, 600)
    }, 200)
  }

  return (
    <div className="portfolio-app">
      {loading && <TerminalLoader onLoadComplete={handleLoadComplete} />}

      <div className={headerVisible ? "header-wrapper header-animate-in" : "header-wrapper header-hidden"}>
        <Header />
      </div>

      <div className={contentVisible ? "content-wrapper content-animate-in" : "content-wrapper content-hidden"}>
        <main>
          <Hero />
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
