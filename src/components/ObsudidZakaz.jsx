import React from 'react'
import { Link } from 'react-router-dom'

const ObsudidZakaz = () => {
    return (
        <div className='obs-container w-full max-w-7xl mx-auto rounded-[10px]'>
            <div className="obs-containerb sm:py-[50px] py-10 space-y-5 lg:space-y-0 sm:space-y-0 items-center lg:py-[94px] flex justify-around px-5 lg:flex-row sm:flex-row flex-col">
                <h2 className='sm:text-3xl text-2xl lg:text-3xl font-bold text-white'>Нужна помощь менеджера?</h2>
                <Link to={'obsudid-zakaz'} className='text-[#D42E5B] px-[35px] py-[18px] bg-white hover:text-[#9F2436] rounded-[10px]'>Обсудить заказ</Link>
            </div>
        </div>
    )
}

export default ObsudidZakaz