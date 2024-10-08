import styles from "./App.module.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects";
import { BrowserRouter as Router,Routes , Route} from 'react-router-dom';
import { useTranslation } from "react-i18next";
import LanguageSelector from "./components/languageSelector/LanguageSelector";

function App() {
  useTranslation
 
  return (
    <div className={styles.App}>  
    <LanguageSelector/>
     <Navbar/>
     <Router>
     <Routes>
     <Route path="/" element={<Hero/>}/>
     <Route path="/about" element={<About/>}/>

     <Route path="/experience" element={<Experience/>}/>

     <Route path="/projects" element={<Projects/>}/> 
     < Route path="/contact" element={<Contact/>}/> 
     <Route path="/location" element = {<Location/>}/>

     </Routes>
     </Router>
    </div>
  )
}

export default App
