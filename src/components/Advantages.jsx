import React from 'react'
import redImg from '../img/redimg.png'
import check from '../img/check.svg'

const Advantages = () => {
    return (
        <div className='advantages-container text-white'>
            <div className='mx-auto lg:max-w-7xl sm:max-w-[1023px] max-w-[767px]'>
                <div className='w-full max-w-7xl mx-auto py-10'>
                    <h2 className='text-3xl font-semibold py-10 text-center'>Преимущества DECORS</h2>
                    <div className='flex justify-between items-center max-w-7xl mx-auto  lg:flex-row sm-flex-col flex-col lg:space-y-0 sm:space-y-10 space-y-5 px-5'>
                        <div className='advantages-card w-full lg:max-w-[250px] px-5 sm:max-w-[500px] max-w-[320px] lg:py-5 sm:py-3 py-3 flex lg:flex-col sm:flex-row flex-row items-center sm:space-y-0 space-y-0 justify-between lg:space-y-5'>
                            <img src={check} alt="check-icon" />
                            <p>Сертификат RAL</p>
                        </div>
                        <div className='advantages-card  w-full lg:max-w-[250px] px-5 sm:max-w-[500px] max-w-[320px] g:py-5 sm:py-3 py-3  flex lg:flex-col sm:flex-row flex-row items-center sm:space-y-0 space-y-0 justify-between lg:space-y-5'>
                            <img src={check} alt="check-icon" />
                            <p>Защита от нагрева</p>
                        </div>
                        <div className='advantages-card w-full lg:max-w-[250px] px-5 sm:max-w-[500px] max-w-[320px] lg:py-5 sm:py-3 py-3 flex lg:flex-col sm:flex-row flex-row items-center sm:space-y-0 space-y-0 justify-between lg:space-y-5'>
                            <img src={check} alt="check-icon" />
                            <p>Праймер</p>
                        </div>
                        <div className='advantages-card w-full lg:max-w-[250px] px-5 sm:max-w-[500px] max-w-[320px] lg:py-5 sm:py-3 py-3 flex lg:flex-col sm:flex-row flex-row items-center sm:space-y-0 space-y-0 justify-between lg:space-y-5'>
                            <img src={check} alt="check-icon" />
                            <p>Известный бренд</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantages