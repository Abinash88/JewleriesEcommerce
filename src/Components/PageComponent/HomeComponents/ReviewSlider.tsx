"use client"

import Image from 'next/image'
import React from 'react'
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ReviewsTypes } from '@/DataSource/Types';
import { Cn } from '@/Components/lib/Helper';

const ReviewSlider = ({ fetchData }: { fetchData: ReviewsTypes[] }) => {
    return (
        <div className="xl:w-[60%] w-full !h-auto ml-auto flex justify-end">
            {
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Navigation, FreeMode, Autoplay]}
                    autoplay={true}
                    navigation={{
                        prevEl: ".prev",
                        nextEl: ".next",
                    }}
                    loop={true}

                    className='w-full  xl:w-[750px]   md:h-[450px] h-auto  overflow-visible'>
                    {fetchData && fetchData?.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className={Cn(`w-[100%] my-auto rounded-lg overflow-hidden md:!h-[90%] !h-auto  relative swiper-slide      md:flex-row flex-col flex items-center  bg-reviews_zinc justify-between`)}>
                                <div className="md:w-[45%]  w-full h-[350px] md:h-full">
                                    <Image loading='lazy' width={400} height={350} src={item?.image?.file} alt={item?.name} className='w-full object-cover h-full' />
                                </div>
                                <div className="md:w-[55%]  w-full  h-auto flex md:absolute static  top-[50%] transform md:translate-y-[-50%] right-0 flex-col p-4 pt-6 md:pt-0">
                                    <p className=" text-white text-base font-normal font-['Inter'] leading-relaxed"> {item?.description}</p>
                                    <h3 className="text-white mt-[18px] text-xl font-bold font-['Inter'] leading-[30px]"> {item?.name}</h3>
                                    <h4 className="text-white text-base font-normal font-['Inter'] leading-relaxed">{item?.address}</h4>
                                </div>
                            </SwiperSlide>
                        )
                    })
                    }

                </Swiper>
            }
        </div>
    )
}

export default ReviewSlider