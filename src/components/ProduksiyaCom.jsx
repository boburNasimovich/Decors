import React from 'react'
import { Link } from 'react-router-dom'

const ProduksiyaCom = () => {
    return (
        <div className='w-full max-w-7xl mx-auto pt-[15px] pb-[60px] px-5'>
            <h2 className='font-bold text-4xl'>Продукция</h2>
            <div className='flex flex-col space-y-4 py-4'>
                <Link to={'/EksterniPlyonki'} className='produksiya-link underline text-xl font-light'>Экстерьерные плёнки</Link>
                <Link className='produksiya-link underline text-xl font-light'>Клеевые материалы</Link>
                <Link className='produksiya-link underline text-xl font-light'>Ретуширующие маркеры</Link>
                <Link className='produksiya-link underline text-xl font-light'>Защитные плёнки</Link>
                <Link className='produksiya-link underline text-xl font-light'>Самоклеящийся лист</Link>
                <Link className='produksiya-link underline text-xl font-light'>Оборудование для ламинации</Link>
                <Link className='produksiya-link underline text-xl font-light'>Расходные материалы</Link>
                <Link className='produksiya-link underline text-xl font-light'>Самоклеящаяся экстерьерная плёнка</Link>
            </div>
            <p className='text-2xl font-light pt-5'>Компания «ДекорС» создана для того, чтобы точно в срок обеспечивать клиентов всем необходимым для слаженной
                работы ламинационного производства. Мы искренне заботимся о том, чтобы, ламинация оконных профилей была для
                наших клиентов простым и прибыльным делом</p><br />
            <p className='text-2xl font-light'>У нас вы можете купить все, что необходимо для работы ламинационного цеха!</p>
        </div>
    )
}

export default ProduksiyaCom