import React from 'react'
import { Link } from 'react-router-dom'

const ObsudidZakaz = () => {
    return (
        <div className='obs-container w-full max-w-7xl mx-auto rounded-[10px]'>
            <div className="obs-containerb py-[94px] flex justify-around px-12">
                <h2 className='text-3xl font-bold text-white'>Нужна помощь менеджера?</h2>
                <Link to={'obsudid-zakaz'} className='text-[#D42E5B] px-[35px] py-[18px] bg-white hover:text-[#9F2436] rounded-[10px]'>Обсудить заказ</Link>
            </div>
        </div>
    )
}

export default ObsudidZakaz