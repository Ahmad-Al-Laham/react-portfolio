import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils"
import { useTranslation } from 'react-i18next'

const Navbar = () => {
    const {t}= useTranslation()
    const portfolio = t("portfolio");
    const Home = t("Home");
    const About = t("About");
    const Experience = t("Experience");
    const Projects = t("Projects");
    const Contact =t("Contact");
    const location = t("location")
    const [menuOpen, setMenuOpen] = useState(false);

  return (
<nav className={styles.navbar}>
    <a className={styles.title} href="/" >{portfolio}</a>
    <div className={styles.menu}>
    <img className={styles.menuBtn} src={menuOpen 
            ? getImageUrl("nav/closeIcon.png")
            : getImageUrl("nav/menuIcon.png")
            } 
            alt="menu-button" 
            onClick={()=> setMenuOpen(!menuOpen)}
            />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
           onClick={() => setMenuOpen(false)}  
        >
            <li>
                <a href="/">{Home}</a>
            </li>
            <li>
                <a href="/about">{About}</a>
            </li>
            <li>
                <a href="/experience">{Experience}</a>
            </li>
            <li>
                <a href="/projects">{Projects}</a>
            </li>
            <li>
                <a href="/contact">{Contact}</a>
            </li>
            <li>
                <a href="/location">{location}</a>
            </li>
        </ul>
    </div>
</nav>
  )
}

export default Navbar;