
import './App.css'
import About from './components/About/About'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects';

function App() {

  return (
    <>
     <Navbar/>
     <HeroSection/>
     <About/>
     <Skills/>
     <Projects/>
     {/* 
     
     
     <Contact/> */}
    </>
  )
}

export default App
