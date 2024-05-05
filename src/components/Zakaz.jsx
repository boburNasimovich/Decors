import React from 'react'

const Zakaz = () => {
    return (
        <div className='w-full max-w-7xl mx-auto pt-16 pb-10 flex flex-col items-center'>
            <h2 className='text-3xl font-bold'>Как работает заказ</h2>
            <ul className='flex lg:flex-row sm:flex-col flex-col text-center items-center justify-between pt-[57px] pb-3 lg:space-x-5 sm:space-x-0 space-x-0'>
                <li className='w-full max-w-[232px] space-y-5'>
                    <p className='text-7xl font-bold text-[#9F2436]'>1</p>
                    <p className='text-3xl font-bold'>Счет</p>
                    <p className='text-2xl'>Подготовьте и отправьте заявку</p>
                </li>
                <li className='w-full max-w-[232px] space-y-5'>
                    <p className='text-7xl font-bold text-[#9F2436]'>2</p>
                    <p className='text-3xl font-bold'>Оплата</p>
                    <p className='text-2xl'>Получите и проверьте счет</p>
                </li>
                <li className='w-full max-w-[232px] space-y-5'>
                    <p className='text-7xl font-bold text-[#9F2436]'>3</p>
                    <p className='text-3xl font-bold'>Оплата</p>
                    <p className='text-2xl'>Подтвердите счет и произведите оплату</p>
                </li>
                <li className='w-full max-w-[232px] space-y-5'>
                    <p className='text-7xl font-bold text-[#9F2436]'>4</p>
                    <p className='text-3xl font-bold'>Выбор ТК</p>
                    <p className='text-2xl'>Сообщите пожелания по доставке</p>
                </li>
                <li className='w-full max-w-[232px] space-y-5'>
                    <p className='text-7xl font-bold text-[#9F2436]'>5</p>
                    <p className='text-3xl font-bold'>Доставка</p>
                    <p className='text-2xl'>Получите свой заказ</p>
                </li>
            </ul>
        </div>
    )
}

export default Zakaz