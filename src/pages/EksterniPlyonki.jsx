import React from 'react'
import { Link } from 'react-router-dom'

const EksterniPlyonki = () => {
  return (
    <div className='w-full max-w-7xl mx-auto pt-[15px] mb-[60px] flex flex-col px-5'>
        <h2 className='text-3xl font-bold py-7'>Экстерьерные плёнки</h2>
        <Link to={'/PlyonkiHyundai'} className='produksiya-link underline text-xl font-light mb-5'>Hyundai</Link>
        <Link to={'/PlyonkiHyundai'} className='produksiya-link underline text-xl font-light'>MAVI</Link>
    </div>
  )
}

export default EksterniPlyonki