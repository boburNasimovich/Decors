import React from 'react'
import { sertifikati } from '../data'

const Sertifikati = () => {
    return (
        <div className='w-full max-w-7xl mx-auto pt-[15px] pb-[60px] px-5'>
            <h2 className='text-4xl font-bold py-[7px]'>Сертификаты</h2>
            <div className='pt-5 sm:space-y-7 space-y-3 lg:space-y-7'>
                {sertifikati.map((sertifikat) => {
                    return (
                        <div key={sertifikat.id}>
                            <h2 className='produksiya-link sm:text-2xl text-xl lg:text-2xl font-bold py-5'>{sertifikat.name}</h2>
                            <a className='px-5 py-2.5 rounded-[10px] bg-[#D42E5B] text-white font-normal ml-5' href="dna.svg" download={"sertifikat"}>Скачать {sertifikat.filename}</a>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Sertifikati