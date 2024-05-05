import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
  <div className='hero-container max-w-[767px] h-[280px] sm:h-[340px] sm:max-w-[1023px] lg:h-[580px] lg:max-w-[1580px] mx-auto'>
            <div className='hero-overlay  w-full h-full relative'>
                <p className='w-full max-w-5xl absolute top-20 sm:top-20 lg:top-60 text-center sm:text-5xl text-3xl lg:text-5xl font-bold text-white'>Экстерьерные пленки DECORS</p>
                <Link className='text-7xl border-2 rounded-full px-4 pb-2 pr-5 text-white absolute bottom-10 left-[41%] sm:left-[47%] lg:left-[95px] hover:bg-white hover:text-red-400'>↓</Link>
            </div>
        </div>
    )
}

export default Hero