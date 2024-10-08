import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

import { useTranslation } from 'react-i18next'
const Hero = () => {
const {t} = useTranslation();
const greeting = t("greeting")
const description = t("description")
const btn = t("btn")


  return (
    <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{greeting}</h1>
            <p className={styles.description}>{description}</p>
           
            <a href="ahmadlaham@gmail.com" className={styles.contactBtn}>{btn}</a>
         
        </div>
        <img src={getImageUrl("hero/me.png")} 
        alt="Hero image of me" 
        className={styles.heroImg} />

        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero