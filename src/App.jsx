import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Certificates from "./components/Certificates"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Education />
        <Skills />
        <Certificates />
      </main>
      <Footer />
    </div>
  )
}

export default App
