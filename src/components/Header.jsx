import React, { useState } from 'react';
import logo from '../img/decors.svg';
import { Link } from 'react-router-dom';
import gamburger from '../img/hamburgermenu.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='w-full max-w-[767px] sm:max-w-[1023px] lg:max-w-[1440px] mx-auto'>
            <div className='w-full max-w-[767px] sm:max-w-[1023px] lg:max-w-7xl mx-auto flex lg:space-y-0 space-y-12 sm:space-y-12 flex-col md:flex-col lg:flex-row items-center justify-between py-5'>
                <div className='flex items-center space-x-5 sm:space-x-56 lg:space-x-14'>
                    <Link className='/'><img src={logo} alt='logo' /></Link>
                    <p className='hidden lg:block'>Экстерьерные пленки DECORS</p>
                    <img
                        className='w-14 h-14 lg:hidden block md:block cursor-pointer'
                        src={gamburger}
                        alt='hamburger-icon'
                        onClick={handleMobileMenuClick}
                    />
                </div>
                <div className='flex items-center space-x-10 sm:space-x-56 lg:space-x-5'>
                    <Link className='font-medium'>
                        <p>8 (800) 55-11-607 </p>
                        <p>Позвонить Вам?</p>
                    </Link>
                    <Link className='px-8 py-4 bg-[#D42E5B] hover:bg-[#9F2436] text-white rounded-xl'>
                        <p className='font-medium'>Напишите нам</p>
                        <p>Онлайн чат</p>
                    </Link>
                </div>
            </div>

            {isMobileMenuOpen && (
                <nav className='bg-[#BB2649] text-white py-4'>
                    <div className='mx-auto grid grid-cols-2  gap-y-3 text-center'>
                        <NavLink to={'Produksiya'}>ПРОД УКЦИЯ</NavLink>
                        <NavLink to={'Uslugi'}>УСЛУГИ</NavLink>
                        <NavLink to={'Preimushestva'}>ПРЕИМУЩЕСТВА</NavLink>
                        <NavLink to={'Aksii'}>АКЦИИ</NavLink>
                        <NavLink to={'Otzivi'}>ОТЗЫВЫ</NavLink>
                        <NavLink to={'Sertifikati'}>СЕРТИФИКАТЫ</NavLink>
                        <NavLink to={'Navosti'}>НОВОСТИ И СТАТЬИ</NavLink>
                        <NavLink to={'Kantakt'}>КОНТАКТЫ</NavLink>
                    </div>
                </nav>
            )}
        </div>
    );
};

export default Header;