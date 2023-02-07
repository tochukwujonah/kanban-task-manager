import React from 'react'
import styles from './style.module.css'
import { Button } from './Button'
import { AiOutlineLink } from 'react-icons/ai'
import NavBar from './NavBar'

const ComponentsContainer = () => {
  return (
    <section>
      ComponentsContainer
      <p>{ }</p>
      <NavBar />
      <Button text={'Outlined'} />
      <Button text={'Filled'} icon={<AiOutlineLink />} link='https://google.com' filledBtn />
    </section>
  )
}

export default ComponentsContainer