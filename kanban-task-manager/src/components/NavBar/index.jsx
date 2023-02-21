import { useState } from 'react'
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css"

import { VscClose } from 'react-icons/vsc'
import { RxHamburgerMenu } from 'react-icons/rx'

import { NavItems, Auth } from '../../data/constants'

const NavBar = () => {

    const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex justify-between items-center navbar py-8'>
        
        <h4 className='text-[2rem] text-white font-bold'>
            Saasly
        </h4>
        <ul className=' justify-between w-[35%]  sm:flex hidden '>
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

        
        <div >
            <ul className={ `${styles.auth_list} items-center justify-between list-none sm:flex hidden flex-1` }>
                {
                    Auth.map((auths) => {
                       return <NavLink to={auths.link} key={auths.id} className='text-white text-[1rem]'>
                            {auths.title}
                        </NavLink> 
                    })
                }
            </ul>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center
        ">
            <div
                className='w-[28px] h-[28px] object-contain '
                onClick={() => setToggle((prev) => !prev 
                ) }
            >
                {
                toggle
                    ?
                    <VscClose size={'25px'} color='#fff' />

                    :<RxHamburgerMenu size={'25px'} color='#fff' />
                }
            </div>
            
            <div className={
                `${toggle ? 'block' : 'hidden'}
                    p-6 bg-black-gradient absolute top-10 right-0 mx-4
                    my-2 min-w-[180px] rounded-xl sidebar nav-smooth
                `
                
            }>
                    <ul className=' justify-between w-[30%] sm:flex '>
                        {
                        NavItems.map((items) => {
                            return (
                            <li key={items.id} className='text-white py-2 text-[1rem]'>
                                <NavLink to={items.link}>
                                    {items.title}
                                </NavLink>
                            </li>
                            )
                        })
                        }
                    </ul>

                    <div className='mt-[20px]'>
                        <ul className={ `${styles.auth_list} items-center justify-between list-none sm:flex flex-1` }>
                            {
                                Auth.map((auths) => {
                                return <NavLink to={auths.link} key={auths.id} className='text-white text-[1rem]'>
                                        {auths.title}
                                    </NavLink> 
                                })
                            }
                        </ul>
                    </div>
            </div>
            
        </div>

    </nav>
  )
}

export default NavBar