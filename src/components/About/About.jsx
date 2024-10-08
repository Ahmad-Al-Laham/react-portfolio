import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from "./About.module.css";
import { getImageUrl } from '../../utils'

const About = () => {
    const {t}= useTranslation() 
    const About = t("About");
    const FrontendDeveloper = t("FrontendDeveloper");
    const FrontDescription = t("FrontDescription");
    const BackendDeveloper = t("BackendDeveloper");
    const BackDescription =t("BackDescription");
    const UiDesiner = t("UiDesiner");
    const UiDescription = t("UiDescription");
  return (
   <section className={styles.container} id="about">
    <h2 className={styles.title}>{About}</h2>
    <div className={styles.content}>
    <img 
    src={getImageUrl("about/aboutImage.png")} 
    alt="Me sitting with a laptop"
    className={styles.aboutImage}
    />
    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
                <h3>{FrontendDeveloper}</h3>
                <p>{FrontDescription}</p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
                <h3>{BackendDeveloper}</h3>
                <p>{BackDescription}</p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
                <h3>{UiDesiner}</h3>
                <p>{UiDescription}</p>
            </div>
        </li>

    </ul>
    </div>
   </section>
  )
}

export default About