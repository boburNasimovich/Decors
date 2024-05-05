import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import dom from '../img/dom.svg';
import lupa from '../img/lupa.svg';
import down from '../img/chevron-down.svg';

const Navlink = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleNavLinkClick = () => {
    setIsInputVisible(true);
  };

  const handleInputBlur = () => {
    setIsInputVisible(false);
  };

  return (
    <nav className='bg-[#D42E5B] py-6 text-white hidden lg:block'>
      <div className='w-full max-w-7xl mx-auto flex items-center justify-between'>
        <NavLink to={'/'}>
          <img className='navLinkIcon py-4' src={dom} alt='dom-icon' />
        </NavLink>
        <NavLink
          to={'Produksiya'}
          className='flex items-center navlink border-l-2 py-4 pl-8'
        >
          ПРОДУКЦИЯ{' '}
          <img className='ml-4 navLinkImg' src={down} alt='down-icon' />
        </NavLink>
        <NavLink to={'Uslugi'}>УСЛУГИ</NavLink>
        <NavLink to={'Preimushestva'}>ПРЕИМУЩЕСТВА</NavLink>
        <NavLink to={'Aksii'}>АКЦИИ</NavLink>
        <NavLink to={'Otzivi'}>ОТЗЫВЫ</NavLink>
        <NavLink to={'Sertifikati'}>СЕРТИФИКАТЫ</NavLink>
        <NavLink to={'Navosti'}>НОВОСТИ И СТАТЬИ</NavLink>
        <NavLink
          to={'Kantakt'}
          className='flex items-center navlink navlink-dr py-4 border-r-2 pr-8 relative'
        >
          КОНТАКТЫ{' '}
          <img className='ml-4 navLinkImg' src={down} alt='down-icon' />
        </NavLink>
        <NavLink>
          <img
            className='navLinkIcon p-4'
            src={lupa}
            alt='lupa-icon'
            onClick={handleNavLinkClick}
          />
        </NavLink>
        {isInputVisible && (
          <input
            type='search'
            className='absolute top-[144px] right-44 mt-2 mr-2 py-2 px-12 border border-none text-black rounded Search'
            onBlur={handleInputBlur}
            placeholder='искать что-нибудь'
          />
        )}
      </div>
    </nav>
  );
};

export default Navlink;