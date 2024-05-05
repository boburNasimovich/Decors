import React from 'react'
import { otzivi } from '../data'

const Otzivi = () => {
    return (
        <div className='w-full max-w-7xl mx-auto pt-[15px] pb-[60px] px-5'>
            <h2 className='text-4xl font-bold py-[7px]'>Отзывы</h2>
            <div className='pt-5 space-y-12'>
                {otzivi.map((otz) => {
                    return (
                        <div key={otz.id}>
                            <h2 className='text-2xl font-bold py-5'>{otz.name}</h2>
                            <p className='py-[26px] px-[43px] bg-[#bb264910] border-l-4 border-[#BB2649]'>{otz.otziv}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Otzivi