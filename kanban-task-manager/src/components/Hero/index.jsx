import React from 'react'
import { Button } from '../index'
import { BsArrowRight } from 'react-icons/bs';

import { hero_web } from '../../assets/images'

const Hero = () => {
  return (
    <section className=''>
        <div className={'	sm:w-[90%] md:w-[100%] lg:w-[70%] mx-auto mt-[40px] md:mt-[80px]	text-center '}>
          <h1 className='text-[white] w-[100%] font-bold text-4xl  md:text-4xl lg:text-5xl'>
            Simple way to manage your project and collaborate
          </h1>
          <h3 className='text-white sm:w-[90%] md:w-[100%] lg:w-[70%] pt-[0px] md:pt-[10px] my-[20px] md:my-[20px] mx-auto'>
            From high rises to the home office, the way your team works is unique—accomplish it all on Saasly.
          </h3>

          <div className=' w-[100%] md:w-[33%] md:flex sm:flex-column	justify-between my-[40px]	mx-auto'>
            <Button text={'Start now'} filledBtn />
            <Button text={'Trail'} icon={<BsArrowRight />}/>
          </div>
        </div>

        <img className='mx-auto' src={hero_web} alt="" />

    </section>
  )
}

export default Hero