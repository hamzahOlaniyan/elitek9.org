import React from 'react'
import loader from '../../components/Header/img/Elitek9_new_logo_2025@2x.png'
import Image from 'next/image'

const loading = () => {
    return (
        <div className='h-full w-full flex justify-center items-center'>
            ooooo
            {/* <Image src={loader} alt='spinner' className='w-12 h-12 object-contain object-center animate-slow-spin ' /> */}
        </div>
    )
}

export default loading