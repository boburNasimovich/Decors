import React from 'react'
import NovostiImg from '../img/novostiimg.png'
import { Link } from 'react-router-dom'
import { novosti } from '../data'

const Navosti = () => {
    return (
        <div className='w-full max-w-7xl mx-auto lg:pb-44 sm:pb-22 pb-10 px-5'>
            <h2 className='text-4xl font-bold pt-[15px] pb-5'>Новости и статьи</h2>
            <div className='space-y-10'>
                {novosti.map((novosti) => {
                    return (
                        <div className='lg:space-y-10 sm:space-y-5 space-y-3' key={novosti.id}>
                            <p className='font-light text-sm text-[#a6a6a6]'>{novosti.sana}</p>
                            <div className='flex space-x-10'>
                                <img src={novosti.img} alt="novosti-img" className='lg:w-full sm:w-50 w-44 lg:h-full sm:h-44 h-44'/>
                                <div className='max-w-[50%]'>
                                    <p className='text-2xl'>{novosti.text}</p>
                                    <Link className='font-bold text-xs'>Подробнее »</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Navosti