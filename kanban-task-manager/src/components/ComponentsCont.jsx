import React from 'react'
import styles from './style.module.css'
import { Button } from './Button'
import { AiOutlineLink } from 'react-icons/ai'
import NavBar from './NavBar'

const ComponentsContainer = () => {
  return (
    <div className={styles.section}>
      ComponentsContainer
      <p>{ }</p>
      <NavBar />
      <Button text={'Outlined'} />
      <Button text={'Filled'} icon={<AiOutlineLink />} link='https://google.com' filledBtn />
    </div>
  )
}

export default ComponentsContainer