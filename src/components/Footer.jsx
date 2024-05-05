import React from 'react'
import { Link } from 'react-router-dom'
import phone from '../img/phone.svg'
import location from '../img/location.svg'

const Footer = () => {
    return (
        <footer className='bg-[#BB2649] py-12 text-white'>
            <div className='w-full max-w-7xl mx-auto flex justify-between lg:flex-row sm:flex-col  flex-col items-center'>
                <div className='lg:text-start sm:text-center text-center'>
                    <Link className='flex lg:flex-row sm:flex-col flex-col items-center space-x-3'>
                        <img src={phone} alt="phone-icon" />
                        <p className='underline'>8 (800) 55-11-607</p>
                    </Link>
                    <Link className='flex lg:flex-row sm:flex-col flex-col  items-center space-x-3 lg:ml-11'>
                        <p>WhatsApp:</p>
                        <p className='underline'> +79833887010</p>
                    </Link>
                    <Link className='flex lg:flex-row sm:flex-col flex-col  items-center space-x-3 lg:ml-11'>
                        <p>E-mail:</p>
                        <p className='underline'>info@decors-pro.ru</p>
                    </Link>
                    <Link className='flex lg:flex-row sm:flex-col flex-col  items-center space-x-3 mt-4'>
                        <img src={location} alt="location-icon" />
                        <p className='underline'>г. Солнечногорск, ул. Красная, 161</p>
                    </Link>
                </div>
                <div className='grid lg:grid-cols-2 lg:space-y-0 sm:space-y-3 space-y-3 lg:py-0 sm:py-10 py-7 sm:grid-cols-1 grid-cols-1 w-full max-w-xl lg:text-start text-center sm:text-center'>
                    <Link>Продукция</Link>
                    <Link>Отзывы</Link>
                    <Link>Услуги</Link>
                    <Link>Сертификаты</Link>
                    <Link>Преимущества</Link>
                    <Link>Новости и статьи</Link>
                    <Link>Акции</Link>
                </div>
            </div>
            <p className='text-center pt-10 tracking-[2px]'>© 2024 Экстерьерные пленки DECORS • Самоклеящиеся листы для ламинации сэндвича</p>
        </footer>
    )
}

export default Footer