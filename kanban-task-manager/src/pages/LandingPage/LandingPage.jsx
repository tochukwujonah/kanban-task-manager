import React from 'react'
import styles from './landingPage.module.css'
import { NavBar, Hero } from '../../components'

import { hero_background_1 } from '../../assets/images'

const LandingPage = () => {
  return (
    <section className={styles.landingPage_container}>
      <section className={styles.hero_image}>
        <div className={styles.hero}>
            {/* <img className={styles.hero_image} src={hero_background_1} alt="" /> */}
            <div className={`${styles.hero_cont} `}>
              <NavBar />
              <Hero />
            </div>
            <p>fksjdskdjsd</p>
        </div>

        

        
      </section>
      
      
    </section>
  )
}

export { LandingPage }