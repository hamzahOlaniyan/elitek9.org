'use client'
import React from "react";
import Image from "next/image";
import heroImg from "./img/hero1.jpg";
import heroImg2 from "./img/hero2.jpg";
import heroImg3 from "./img/hero3.jpg";
import heroImg4 from "./img/hero4.jpg";
import heroImg5 from "./img/hero5.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaPhoneAlt } from "react-icons/fa";

const slides = [heroImg, heroImg2, heroImg3, heroImg4, heroImg5]

const HeroHome = () => {
  return (
    <div className="flex items-center relative">
      <div className="z-40 absolute w-full h-full bg-black/30 flex flex-col items-center justify-center ">
        <div className="w-3/4 lg:w-full relative top-3 flex flex-col items-center justify-center">
          <div className="text-shadow text-center [text-shadow:_0_1px_15px_#000] text-white space-y-3">
            <h1 className="text-[46px] sm:text-[54px] font-light uppercase leading-[2.4rem] sm:leading-[3rem]">Professional <strong className="font-bold">Dog Training</strong></h1>
            <p className="text-lg sm:text-2xl font-medium">Are you and your dog ready to experience professional dog training?</p>
          </div>
          <a
            href="https://wa.me/+2202220333"
            className="text-2xl text-white bg-teal-600 hover:bg-teal-500 flex gap-2 rounded-md justify-center items-center w-fit p-2 px-4 mt-6 shadow-md shadow-black/50 duration-300 transition-colors active:scale-95">
            <div className="[text-shadow:_0_0px_5px_#076b65] flex items-center gap-1"><FaPhoneAlt /><p className='font-bold '>+220 222 0333</p></div>
          </a>
        </div>
      </div >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper w-full h-[55vh] lg:h-[70vh] flex justify-center items-center relative"
      >
        <div className="">
          {slides.map((image: any, idx: number) => (
            <SwiperSlide key={idx}><Image src={image} alt={'image'} fill={true} className="h-full w-full object-cover object-center block bg-blend-overlay" /></SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div >
  );
};

export default HeroHome;
