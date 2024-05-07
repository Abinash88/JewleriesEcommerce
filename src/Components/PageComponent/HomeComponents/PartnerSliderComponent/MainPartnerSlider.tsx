"use client"

import Image from 'next/image'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CorrporatePartnerTypes } from '@/DataSource/Types'

const MainPartnerSlider = ({ fetchData }: { fetchData: CorrporatePartnerTypes[] }) => {
    return (
        <div className='w-full'>
            <Swiper
                spaceBetween={50}
                slidesPerView={2}
                modules={[Navigation, Autoplay]}
                autoplay={true}
                loop={true}
                breakpoints={{
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    900: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    1500: {
                        slidesPerView: 7,
                        spaceBetween: 20,
                    }
                }}
                className='flex items-center gap-5  justify-center h-[200px]'
            >
                {
                    fetchData?.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className={` cursor-grab h-[90%] !flex items-center  m-auto p-2 rounded-md `}>
                                <Image width={600} height={600} src={item?.image?.file} alt={item?.name} className='w-[100px] md:w-[150px]  h-[100px] md:h-[150px] m-auto object-cover' />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default MainPartnerSlider