import React from 'react'
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css"

import { NavItems, Auth } from '../../data/constants'

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center'>
        <h4 className='text-[2rem] text-white font-bold'>
            Saasly
        </h4>
        <ul className='flex justify-between w-[30%]'>
            {
            NavItems.map((items) => {
                return (
                <li key={items.id} className='text-white text-[1rem]'>
                   <NavLink to={items.link}>
                        {items.title}
                    </NavLink>
                </li>
                )
            })
            }
        </ul>

        <div  className=' w-[12%]'>
            <ul className={ `${styles.auth_list} items-center flex justify-between` }>
                {
                    Auth.map((auths) => {
                       return <NavLink to={auths.link} key={auths.id} className='text-white text-[1rem]'>
                            {auths.title}
                        </NavLink> 
                    })
                }
            </ul>
        </div>
    </nav>
  )
}

export default NavBar