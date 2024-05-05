import React from 'react'
import { Link } from 'react-router-dom'
import trangle from '../img/trangle.svg'

const PerviShag = () => {
    return (
            <div className='PerviShag-container w-full max-w-7xl mx-auto relative rounded-[10px] flex flex-col items-center px-5'>
                <img src={trangle} alt="triangle-icon" className='absolute -top-4 left-10'/>
                <h3 className='text-2xl font-bold text-white my-8'>Сделайте первый шаг</h3>
                <Link className='text-xl text-[#D42E5B] hover:text-[#9F2436] py-[18px] px-[35px] bg-white rounded-[10px]'>Бесплатная консультация</Link>
            </div>
    )
}

export default PerviShag