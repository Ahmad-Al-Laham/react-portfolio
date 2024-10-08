import { changeLanguage } from 'i18next'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './language.module.css'

const languages = [
    {code:"en", lang:"English"},
    {code:"ar", lang:"Arabic"},
]


const LanguageSelector = () => { 
const {i18n} = useTranslation()
    const changeLanguage = (lng) =>{
        i18n.changeLanguage(lng);
    };

useEffect(() => {
    document.body.dir = i18n.dir()
},[i18n,i18n.language])

  return (
    <div className={styles.btnContainr}>
        {languages.map((lng)=>{
            return (
                <button key={lng.code} onClick={() =>changeLanguage(lng.code)} >{lng.lang}</button>
            )
        })}
    </div>
  )
}

export default LanguageSelector