"use client"

import Image from 'next/image'
import React from 'react'
import { Autoplay, FreeMode, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Skeleton from 'react-loading-skeleton'
import { MainDepartmentDataTypes } from '@/DataSource/Types'
import { HtmlToText } from '@/Components/lib/Helper'

const MainDepartment = ({ fetchData }: { fetchData: MainDepartmentDataTypes }) => {
    return (
        <div className='w-full'>
            <div className="w-full flex flex-col gap-[35px]">
                <div className=" flex flex-wrap items-start  w-full  gap-[35px]">
                    { !fetchData?.depart_images  || fetchData?.depart_images?.length === 0 ?
                        null
                        :
                        <div className="">
                            {
                                !fetchData ?
                                    <Skeleton height={300} />
                                    :
                                    <Swiper
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        modules={[Pagination, FreeMode, Scrollbar, Autoplay]}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={true}
                                        loop={true}
                                        className='lg:w-[450px]  w-full h-[229px] rounded-xl border-2 overflow-hidden'
                                    >
                                        {
                                            fetchData?.depart_images?.map((item, index) => {
                                                return (
                                                    <SwiperSlide key={index} className={`w-[90%] h-full`}>
                                                        <Image width={600} height={600} loading='lazy' src={item?.image?.file} alt='' className='w-full object-cover  h-full' />
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>
                            }
                        </div>}
                    <div className="">
                        {
                            !fetchData ?
                                <Skeleton height={30} count={5} />
                                :
                                <div className="text-justify float-start text-zinc-900 text-[16px] lg:text-[16px] font-normal font-['Inter'] leading-[25px] lg:leading-[30px]">{HtmlToText(fetchData?.description)}</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainDepartment