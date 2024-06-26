import React from 'react'
import { Link } from 'react-router-dom'
import phone from '../img/phone.svg'
import location from '../img/location.svg'

const Footer = () => {
    return (
        <footer className='bg-[#BB2649] py-12 text-white'>
            <div className='w-full max-w-7xl mx-auto flex justify-between lg:flex-row sm:flex-col  flex-col items-center'>
                <div className='lg:text-start sm:text-center text-center'>
                    <Link to={'telefon'} className='flex lg:flex-row sm:flex-col flex-col items-center space-x-3'>
                        <img src={phone} alt="phone-icon" />
                        <p className='underline'>8 (800) 55-11-607</p>
                    </Link>
                    <Link to={'whatsapp'} className='flex lg:flex-row sm:flex-col flex-col  items-center space-x-3 lg:ml-11'>
                        <p>WhatsApp:</p>
                        <p className='underline'> +79833887010</p>
                    </Link>
                    <Link to={'E-mail'} className='flex lg:flex-row sm:flex-col flex-col  items-center space-x-3 lg:ml-11'>
                        <p>E-mail:</p>
                        <p className='underline'>info@decors-pro.ru</p>
                    </Link>
                    <Link to={'location'} className='flex lg:flex-row sm:flex-col flex-col  items-center space-x-3 mt-4'>
                        <img src={location} alt="location-icon" />
                        <p className='underline'>г. Солнечногорск, ул. Красная, 161</p>
                    </Link>
                </div>
                <div className='grid lg:grid-cols-2 lg:space-y-0 sm:space-y-3 space-y-3 lg:py-0 sm:py-10 py-7 sm:grid-cols-1 grid-cols-1 w-full max-w-xl lg:text-start text-center sm:text-center'>
                    <Link to={'Produksiya'}>Продукция</Link>
                    <Link to={'Uslugi'}>Отзывы</Link>
                    <Link to={'Uslugi'}>Услуги</Link>
                    <Link to={'Sertifikati'}>Сертификаты</Link>
                    <Link to={'Preimushestva'}>Преимущества</Link>
                    <Link to={'Navosti'}>Новости и статьи</Link>
                    <Link to={'Aksii'}>Акции</Link>
                    <Link to={'Kantakt'}>Контакты</Link>
                </div>
            </div>
            <p className='text-center pt-10 tracking-[2px]'>© 2024 Экстерьерные пленки DECORS • Самоклеящиеся листы для ламинации сэндвича</p>
        </footer>
    )
}

export default Footer