"use client"

import React from 'react'
import { FreeMode, Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { DepartmentTypes } from '@/DataSource/Types';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';

const DepartmentSlider = ({ department }: { department: DepartmentTypes }) => {
    return (
        <div className='w-full mt-[40px]'>
            <div className="w-full">
                {!department ?
                    <Skeleton height={50} />
                    :
                    <h3 className="text-zinc-900  text-[25px] lg:text-[32px] font-bold font-['Epilogue'] leading-[56px]"> Departments</h3>}
                {!department ?
                    <Skeleton height={100} />
                    :
                    department?.departments?.length >= 1 ?
                        <div className="w-full flex relative items-start justify-start mt-[16px]">
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                modules={[FreeMode, Scrollbar, Navigation]}
                                autoplay={true}
                                navigation={{
                                    nextEl: ".nextDepart",
                                    prevEl: ".prevDepart"
                                }}
                                pagination={true}
                                loop={true}
                                breakpoints={{
                                    440: {
                                        slidesPerView: 1,
                                        spaceBetween: 10
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 10
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 10
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 20
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                        spaceBetween: 30
                                    },
                                    1536: {
                                        slidesPerView: 6,
                                        spaceBetween: 40
                                    },
                                }}
                                className='w-[90%] mx-auto borderbg-red-500 grid grid-cols-3 overflow-hidden'
                            >
                                {
                                    department?.departments?.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index} className="cursor-pointer p-2.5 rounded-xl flex-col justify-center items-start gap-2.5 flex">
                                                <Link href={`/departments/${item?.slug}`} className="w-[145px] h-[115px] flex flex-col items-center 
                                                justify-center gap-3 mx-auto hover:border-reviews_zinc/50 transition-all duration-100 cursor-pointer relative 
                                              bg-white rounded-lg shadow border border-zinc-200">
                                                    <Image loading='lazy' width={100} height={100} alt={item?.name}
                                                        className="w-[52px] h-[49px] rounded" src={item?.image?.file} />
                                                    <div className="  text-center text-zinc-900 text-xs font-normal font-['Inter'] leading-tight">{item?.name}</div>
                                                </Link>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>

                            <div className="prevDepart absolute left-0 top-[50%] transform translate-y-[-50%] cursor-pointer bg-teal-100 w-[40px] h-[40px] transition3sec
                             rounded-full flex items-center justify-center hover:bg-green-900 group">
                                <FaChevronLeft className='text-green-900 text-[18px] group-hover:text-white transition3sec' />
                            </div>
                            <div className="nextDepart  absolute  right-0 top-[50%] transform translate-y-[-50%]  cursor-pointer bg-teal-100 w-[40px] h-[40px] transition3sec
                             rounded-full flex items-center justify-center hover:bg-green-900 group">
                                <FaChevronRight className='text-green-900 text-[18px] group-hover:text-white transition3sec' />
                            </div>
                        </div>
                        :
                        <div className='w-full py-4 text-center h-full'>
                            <h3 className='lg:text-[22px] text-[18px] font-semibold'>No Data Found in this Department!</h3>
                        </div>
                }
            </div>
        </div>
    )
}

export default DepartmentSlider 