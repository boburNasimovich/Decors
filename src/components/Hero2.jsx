import React from 'react'
import img3 from '../img/image3.png'
import { Link } from 'react-router-dom'

const Hero2 = () => {
    return (
        <div className='w-full max-w-7xl mx-auto py-10 flex lg:flex-row sm:flex-col flex-col items-center justify-between '>
            <div className='flex items-center  flex-col sm:space-y-2 space-y-2 lg:space-y-5 relative'>
                <img src={img3} alt="img" />
                <div className='absolute w-[140px] h-[140px] bg-[#D42E5B] rounded-full bottom-32 right-0'>
                    <div className='w-32 h-32 mx-auto border-2 mt-[6px] border-dotted rounded-full text-white text-center'>
                        <p className='text-4xl mt-3 font-bold'>10</p>
                        <p className='font-bold'>ЛЕТ НА <br /> РЫНКЕ РФ</p>
                    </div>
                </div>
                <Link className='text-3xl font-semibold'>8 (800) 55-11-607</Link>
                <Link className='text-2xl'>info@decors-pro.ru</Link>
            </div>
            <div>
                <h2 className='text-4xl font-bold mx-10 text-center'>Экстерьерные пленки DECORS</h2>
                <div className='sm:pt-10 pt-10 lg:pt-[84px] sm:space-y-5 space-y-4 lg:space-y-10 px-5'>
                    <div>
                        <div className='w-full max-w-2xl bg-[#D42E5B] rounded-[5px]'>
                            <p className='text-white text-center py-1'>100%</p>
                        </div>
                        <p>24 года эксплуатации без изменения цвета</p>
                    </div>
                    <div>
                        <div className='bg-[rgba(187,38,73,0.5)] rounded-[5px] max-w-2xl'>
                            <div className='w-full max-w-[40%]  bg-[#D42E5B] rounded-[5px]'>
                                <p className='text-white text-center py-1'>40%</p>
                            </div>
                        </div>
                        <p>Акриловый слой плюс</p>
                    </div>
                    <div>
                        <div className='bg-[rgba(187,38,73,0.5)] rounded-[5px] max-w-2xl'>
                            <div className='w-full max-w-[30%]  bg-[#D42E5B] rounded-[5px]'>
                                <p className='text-white text-center py-1'>30%</p>
                            </div>
                        </div>
                        <p>Цена доступней до</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2