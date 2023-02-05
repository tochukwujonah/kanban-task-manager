import React from 'react'
import styles from './style.module.css'

const Button = ({filledBtn, icon, text, link}) => {
  return (
    <button className={filledBtn ? `${styles.btnfillbtn}` : `${styles.button}`}>
        <a href={link}>

            { text 
            ? <span>{text}</span>
            : null}
            

            { icon 
            ? <span>{icon}</span> 
            : null }
            
        </a>
    </button>
  )
}

export {Button}