import React , {useRef}from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser';

const Contact = () => {
const {t} = useTranslation()
const Contact = t("Contact")
const p = t("p")
const formTitle = t("labelMessage")
const userName =t("userName")
const  userEmail =t(" userEmail")
const message = t("message")
const  send = t(" send")


const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_nnn29sr', 'template_bazap58', form.current, {
      publicKey: 'A4YSgnxMKCNGEtpXb',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        e.target.reset()
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
}

  return ( 
    

    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>{Contact}</h2>
            <p>{p}</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:myemail@email.com">myemail@email.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                <a href="http://www.linkedin.com/myname">linkedin.com/myname</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                <a href="http://www.github.com/myname">github.com/myname</a>
            </li>
        </ul>

        <div className={styles.formHorizontal}>
        <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="contact" className={styles.label}> {formTitle}</label>
        <div className={styles.formGroup}>
            <div className={styles.colSm12}>
                <input type="text" name="user_name"  className={styles.formControl} id="name" placeholder={userName} required/>
            </div>
        </div>

        <div className={styles.formGroup}>
            <div className={styles.colSm12}>
                <input type="email" name="user_email" className={styles.formControl} id="email" placeholder={ userEmail} required/>
            </div>
      </div>

      <div className={styles.formGroup}>
        <div className={styles.colSm12}>
            <textarea name="message" className={styles.formControl} rows="10" placeholder={message} required/>
        </div> 
      </div>

      <button className= {styles.sendButton} id="submit" type="submit" value="SEND">
      <div className={styles.altSendBtn}>
       <span className={styles.sendText}>{ send }</span> 
      </div>

      </button>

    </form>
        </div>

    </footer>
    
  )
}

export default Contact