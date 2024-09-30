import styles from "./App.module.css";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar"
import ProjectCard from "./components/Projects/ProjectCard";
import Projects from "./components/Projects/Projects";



function App() {
 
  return (
    <div className={styles.App}>
     <Navbar/>
     <Hero/>
     <About/>
     <Experience/>
     <Projects/>
     <ProjectCard/>    
    </div>
  )
}

export default App
