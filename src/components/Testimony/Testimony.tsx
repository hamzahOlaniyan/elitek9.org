'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';
import { MediaQuery } from '../utils/MediaQuery';
import Heading from '../utils/Heading';
// import { testimonies } from './data';
import { Card } from './Card';
import { testimonies } from './data';

export const Testimony = () => {
    return (
        <div className='py-20 bg-neutral-800'>
            <MediaQuery>
                <Heading heading='what clients say' subheading=' about elite k9' />
                <div className="my-12">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            // 1024: {
                            //     slidesPerView: 3,
                            //     spaceBetween: 50,
                            // },
                        }}
                        modules={[Pagination]}
                        className="swiper_testi"
                    >
                        {testimonies.map((item: any, idx: number) => (
                            <SwiperSlide key={idx} className='swiper-slide-testi'>
                                <Card items={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </MediaQuery>

        </div >
    )
}
