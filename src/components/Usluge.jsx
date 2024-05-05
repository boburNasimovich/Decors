import React from 'react'
import { Link } from 'react-router-dom'
import box from '../img/box.svg'
import noj from '../img/noj.svg'
import shit from '../img/shield.svg'
import dna from '../img/dna.svg'
import book from '../img/book.svg'
import bag from '../img/bag.svg'

const Usluge = () => {
    return (
        <div className='w-full max-w-7xl mx-auto py-10 flex flex-col items-center px-5'>
            <h2 className='text-3xl font-bold text-center'>Услуги</h2>
            <div className='py-10 w-full max-w-7xl flex lg:flex-row sm:flex-col flex-col items-center lg:space-y-0 sm:space-y-8 space-y-5 justify-between mx-auto'>
                <div className='space-y-10 w-full max-w-xl px-10 py-14 border-2 border-dotted rounded-lg border-[#BB2649]'>
                    <h3 className='text-2xl font-bold text-center'>ДЛЯ ПРОФЕССИОНАЛОВ  </h3>
                    <div className='flex items-center space-x-5'>
                        <img className='p-5 bg-[#9F2436] rounded-full' src={box} alt="box-icon" />
                        <p className='text-2xl'>Бережная фирменная упаковка</p>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <img className='p-[23px] bg-[#9F2436] rounded-full' src={noj} alt="noj-icon" />
                        <p className='text-2xl'>Бесплатная резка пленки по нужным размерам</p>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <img className='p-4 bg-[#9F2436] rounded-full' src={shit} alt="shield-icon" />
                        <p className='text-2xl'>Доставка до терминала транспортной компании</p>
                    </div>
                </div>
                <div className='space-y-10 w-full max-w-xl px-10 py-14 border-2 border-dotted rounded-lg border-[#BB2649]'>
                    <h3 className='text-2xl font-bold text-center'>ДЛЯ НОВИЧКОВ</h3>
                    <div className='flex items-center space-x-5'>
                        <img className='p-5 bg-[#9F2436] rounded-full' src={bag} alt="bag-icon" />
                        <p className='text-2xl'>Помощь в расчете стартапа и подборе оборудования</p>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <img className='p-[7px] bg-[#9F2436] rounded-full' src={dna} alt="dna-icon" />
                        <p className='text-2xl'>Консультация технолога</p>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <img className='p-4 bg-[#9F2436] rounded-full' src={book} alt="book-icon" />
                        <p className='text-2xl'>Обучение сотрудников</p>
                    </div>
                </div>
            </div>
            <Link to={'zakaz'} className='px-9 py-5 bg-[#D42E5B] hover:bg-[#9F2436] rounded-[10px] text-xl font-bold text-white'>Сделать заказ</Link>
        </div>
    )
}

export default Usluge