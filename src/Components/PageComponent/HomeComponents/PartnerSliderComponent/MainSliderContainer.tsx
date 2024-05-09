"use client"

import Image from 'next/image'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ProductHighlight } from '@/DataSource/StaticData'

const MainSliderContainer = () => {
    return (
        <div className='w-full py-7 px-5 bg-foreground'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation, Autoplay]}
                autoplay={false}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1000: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1500: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    }
                }}
                className='flex items-center gap-5  justify-center '
            >
                {
                    ProductHighlight?.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className={` w-[247.21px] !h-[244.89px]  cursor-grab  !flex items-center  m-auto p-2 rounded-md `}>
                                <Image width={600} height={600} src={item?.image} alt={'product'} className='w-full  h-full  object-cover' />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default MainSliderContainer