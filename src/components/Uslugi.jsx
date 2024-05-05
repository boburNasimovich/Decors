import React from 'react'

const Uslugi = () => {
  return (
    <div className='w-full max-w-7xl mx-auto pt-[15px] pb-[60px] px-5'>
        <h2 className='text-4xl font-bold py-[7px]'>Услуги</h2>
        <ul className='space-y-5'>
            <li className='uslugi-list text-2xl'>Бесплатная резка плёнки по нужным размерами</li>
            <li className='uslugi-list text-2xl'>Бережная фирменная упаковка</li>
            <li className='uslugi-list text-2xl'>Доставка до терминала нужной транспортной компании</li>
            <li className='uslugi-list text-2xl'>Консультация технолога</li>
            <li className='uslugi-list text-2xl'>Помощь в расчете СТАРТАПА и подборе оборудования</li>
            <li className='uslugi-list text-2xl'>Обучение сотрудников</li>
        </ul>
    </div>
  )
}

export default Uslugi