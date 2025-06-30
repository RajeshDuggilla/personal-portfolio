import React, { useState, useEffect } from "react"
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Skills from "./components/Skills.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDark)
  }, [])


  return (
    <div className={`${darkMode ? "bg-dark text-light" : "bg-white text-dark"}`} style={{ minHeight: "100vh", transition: "all 0.3s ease" }}>
      <Header darkMode={darkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App


// import React, { useState, useEffect } from "react"
// import Header from "./components/Header.jsx"
// import Hero from "./components/Hero.jsx"
// import About from "./components/About.jsx"
// import Skills from "./components/Skills.jsx"
// import Projects from "./components/Projects.jsx"
// import Contact from "./components/Contact.jsx"
// import Footer from "./components/Footer.jsx"
// import './App.css'

// function App() {
//   const [darkMode, setDarkMode] = useState(false)

//   useEffect(() => {
//     const isDark = localStorage.getItem("darkMode") === "true"
//     setDarkMode(isDark)
//   }, [])

//   const toggleDarkMode = () => {
//     const newDarkMode = !darkMode
//     setDarkMode(newDarkMode)
//     localStorage.setItem("darkMode", newDarkMode.toString())
//   }

//   return (
//     <div
//       className={`min-h-screen transition-colors duration-300 ${
//         darkMode ? "bg-gray-900" : "bg-white"
//       }`}
//     >
//       <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//       <main>
//         <Hero darkMode={darkMode} />
//         <About darkMode={darkMode} />
//         <Skills darkMode={darkMode} />
//         <Projects darkMode={darkMode} />
//         <Contact darkMode={darkMode} />
//       </main>
//       <Footer darkMode={darkMode} />

//     </div>
//   )
// }

// export default App
