import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Carusel() {
  return (
    <>
      <h2 className='text-3xl font-bold text-center lg:py-10 sm:py-7 py-4'>Отзывы клиентов</h2>
      <Swiper modules={[Navigation]} className="mySwiper w-full max-w-7xl mx-auto px-5"
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        style={{
          "--swiper-navigation-color": "#fff",
        }}
        pagination-clickable="true"
        pagination={true}
        loop={true}
        lg:slidesPerView={2}
        sm:slidesPerView={1}
        slidesPerView={1}
        spaceBetween={20}
      >
        <div className="swiper-button-next pr-11 pl-12 pt-12 pb-10 opacity-30 rounded-full bg-[#D42E5B] hover:bg-[#9F2436]"></div>
        <div className="swiper-button-prev pr-12 pl-11 pt-12 pb-10  rounded-full opacity-30 bg-[#D42E5B] hover:bg-[#9F2436]"></div>
        <SwiperSlide>
          <div className='w-full max-w-[609px] flex flex-col text-start space-y-10 px-[30px] sm:py-[30px] py-8 lg:py-[40px] sm:my-10 my-4 lg:my-20 rounded-[10px] swiperContainer'>
            <p className='sm:text-2xl text-xl lg:text-2xl'>- Используем пленку Decors уже почти год. По качеству ничем не хуже других пленок. Конечно, нет такого разнообразия цветов, но в целом пленка хорошая. Клей ложится хорошо, тянется тоже хорошо. Толщина пленки нормальная. Применяем для всех наружных ламинаций. По качеству и цене самый лучший, на наш взгляд, вариант! Акриловый слой имеется. В общем, довольны пленкой Decors. По основным цветам - махагон, золотой дуб, золотой орех, антрацит, темный дуб - мы полностью перешли на Decors.</p>
            <p className='font-bold text-2xl'>Мурат, СНГ</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full max-w-[609px] flex flex-col text-start space-y-10 px-[30px] sm:py-[30px] py-8 lg:py-[60px] sm:my-10 my-4 lg:my-20 rounded-[10px] swiperContainer'>
            <p className='sm:text-2xl text-xl lg:text-2xl'>- Мы работаем больше 15 лет с разными пленками. Сейчас работаем с пленкой Decors.
              Очень довольны качеством товара. Спасибо производителю!</p>
            <p className='font-bold text-2xl'>Анвар, Россия</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full max-w-[609px] flex flex-col text-start space-y-10 px-[30px] sm:py-[30px] py-8 lg:py-[60px] sm:my-10 my-4 lg:my-20 rounded-[10px] swiperContainer'>
            <p className='sm:text-2xl text-xl lg:text-2xl'>- Берем пленку Decors с 2018 года. За это время пленка зарекомендовала себя наилучшим образом. Очень радует акриловый слой и конечно наличие сертификата RAL. Доступная цена делает пленку очень конкурентоспособной. Цветовая гамма не очень большая, но радуют цвета антрацит и темный дуб, т.к. это основные цвета. Очень не хватает цвета «каштан» в палитре.</p>
            <p className='font-bold text-2xl'>Виталий, Россия</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full max-w-[609px] flex flex-col text-start space-y-10 px-[30px] sm:py-[30px] py-8 lg:py-[60px] sm:my-10 my-4 lg:my-20 rounded-[10px] swiperContainer'>
            <p className='sm:text-2xl text-xl lg:text-2xl'>Андрей, СНГ- Неплохая пленка, работаем полгода, нареканий от потребителей нашей продукции нет. Спасибо.</p>
            <p className='font-bold text-2xl'>Валерий, Россия</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full max-w-[609px] flex flex-col text-start space-y-10 px-[30px] sm:py-[30px] py-8 lg:py-[60px] sm:my-10 my-4 lg:my-20 rounded-[10px] swiperContainer'>
            <p className='sm:text-2xl text-xl lg:text-2xl'>- Работаем с Decors не первый год, за все время работы не было ни одного отрицательного отзыва. Благодарим компанию за быстрое реагирование на заказ, доставку всегда в оговоренные сроки, вежливое отношение к клиентам, хорошее качество продукции. Пленка для ламинации профиля Decors имеет яркий цвет, приятный внешний вид, мягкую основу, обладает морозоустойчивостью и высокой теплостойкостью, не меняет своих цветовых свойств при изменении погодных факторов. Работать с ламинационной пленкой Decors одно удовольствие. Спасибо вам за отличную работу, успехов и процветания вашей компании.</p>
            <p className='font-bold text-2xl'>Андрей, СНГ</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
