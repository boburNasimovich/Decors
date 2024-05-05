import React from 'react'
import novosti from '../img/novosti.png'
import novosti1 from '../img/novosti1.png'
import { Link } from 'react-router-dom'

const Novosti = () => {
    return (
        <div className='w-full max-w-7xl mx-auto sm:py-[40px] py-7 lg:py-[60px] sm:sapce-y-7 space-y-3 lg:space-y-10'>
            <h2 className='text-3xl font-bold text-center'>Новости</h2>
            <div className='flex justify-between lg:flex-row sm:flex-col flex-col items-center sm:space-y-12 space-y-12 lg:space-y-0'>
                <div className='w-full max-w-[393px]'>
                    <img src={novosti} alt="novosti-png" />
                    <p className='py-10 text-2xl'>Ведущие клиенты компании «ДекорС» посетили завод компании Decors L&C в Сеуле</p>
                    <Link to={'navosti'} className='text-xl font-bold'>Подробнее »</Link>
                </div>
                <div className='w-full max-w-[393px]'>
                    <img src={novosti1} alt="novosti2-png" />
                    <p className='py-10 text-2xl'>«ДекорС» на Eurasia Window 2019</p>
                    <Link to={'navosti'} className='text-xl font-bold'>Подробнее »</Link>
                </div>
                <div className='w-full max-w-[393px] border-[#E1E0E0] border-[1px] px-5'>
                    <Link className='font-bold text-2xl border-b-[1px] border-black/30 py-10 inline-block'>Decors на MosBuild 2019</Link>
                    <Link className='font-bold text-2xl border-b-[1px] border-black/30 py-10 inline-block'>Decors - 24 года эксплуатации без изменений цвета</Link>
                    <Link className='font-bold text-2xl border-b-[1px] border-black/30 py-10 inline-block'>Decors на MosBuild 2021</Link>
                    <Link className='font-bold text-2xl py-10 inline-block'>В палитре пленок Decors появились новые популярные люксовые цвета по цене основных.</Link>
             </div>
            </div>
        </div>
    )
}

export default Novosti