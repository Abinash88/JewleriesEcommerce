"use client"

import React from 'react'
import { FreeMode, Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import Image from 'next/image';
import { MainDepartmentDataTypes } from '@/DataSource/Types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const MainDocterSlider = ({ doctors, slug }: { doctors: MainDepartmentDataTypes, slug: string }) => {
    return (
        <div className=" w-full flex relative items-start justify-start mt-[16px]">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[FreeMode, Scrollbar, Navigation]}
                autoplay={true}
                navigation={{
                    nextEl: ".nextbutton",
                    prevEl: ".prevbutton"
                }}
                pagination={true}
                loop={true}
                breakpoints={{
                    440: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1280: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1536: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                }}
                className='w-[90%] borderbg-red-500 grid grid-cols-3 overflow-hidden'
            >
                {doctors?.doctors && doctors?.doctors?.length >= 1 ?
                    doctors?.doctors?.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className=" h-auto hover:shadow transform w-full cursor-pointer hover:translate-y-[-4px] transition-all duration-300 p-2.5 rounded-xl border border-zinc-300 flex-col justify-start items-start gap-2.5 inline-flex">
                                <Link href={`/doctor-detail/${item?.slug}`} className='w-full'>
                                    <div className="justify-center items-center gap-3 w-full inline-flex">
                                        <div className="md:w-[92px] w-[140px] md:h-[103px] relative bg-gray-100 rounded">
                                            <Image className="md:w-[88px] w-full object-cover h-[103px] left-[2px] top-0"
                                                width={88} height={103} src={item?.image?.file || ""} alt='doctors' />
                                        </div>
                                        <div className="flex-col justify-start flex-1 w-full  items-start gap-2.5 inline-flex">
                                            <div className=" flex-col justify-start items-start flex">
                                                <h4 className="text-zinc-900 hover:underline text-xs font-bold font-['Epilogue'] leading-relaxed">
                                                    {item?.name}
                                                </h4>
                                                <h6 className="text-gray-600 my-[4px] text-[10px] font-normal font-['Inter'] leading-none">
                                                    {
                                                        item?.degrees?.map((item, index) => {
                                                            return (
                                                                <div key={index} className="">
                                                                    {item?.name}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </h6>
                                                <h6 className=" left-0 top-[40px] text-gray-600 text-[10px] font-normal font-['Inter'] leading-[10px]">
                                                    {item?.position}
                                                </h6>
                                            </div>
                                            <div className="justify-start items-start gap-1 inline-flex">
                                                <div className="h-7 px-2.5 py-1 bg-emerald-50 rounded justify-center items-center flex">
                                                    <div><span className="text-zinc-900 text-xs font-normal font-['Ek Mukta'] leading-tight">रु</span><span className="text-zinc-900 text-xs font-normal font-['Inter'] leading-tight">. </span><span className="text-zinc-900 text-xs font-medium font-['Inter']  leading-tight">{item?.visting_charge}</span></div>
                                                </div>
                                                <div className="px-2.5 py-1 bg-emerald-50 h-7 rounded justify-start items-center gap-1 flex">
                                                    <div className="w-4 h-4 relative" />
                                                    <h5 className="text-zinc-900 text-xs font-medium font-['Inter'] leading-tight">{item?.experience}+ Years</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                    :
                    <div className='w-full py-4 text-center h-full'>
                        <h3 className='lg:text-[22px] text-[18px] font-semibold'>No Doctor Found in this Department.!</h3>
                    </div>
                }
            </Swiper>
            <div className={`${doctors?.doctors && doctors?.doctors?.length >= 1 ? "" : "hidden"} prevbutton  absolute left-0 top-[50%] transform translate-y-[-50%]  cursor-pointer bg-teal-100 w-[40px] h-[40px] transition3sec
             rounded-full flex items-center z-20 justify-center hover:bg-green-900 group`}>
                <FaChevronLeft className='text-green-900 text-[18px] group-hover:text-white transition3sec' />
            </div>
            <div className={`${doctors?.doctors && doctors?.doctors?.length >= 1 ? "" : "hidden"} nextbutton absolute z-20 right-0 top-[50%] transform translate-y-[-50%]  cursor-pointer bg-teal-100 w-[40px] h-[40px] transition3sec
             rounded-full flex items-center justify-center hover:bg-green-900 group`}>
                <FaChevronRight className='text-green-900 text-[18px] group-hover:text-white transition3sec' />
            </div>
        </div>
    )
}

export default MainDocterSlider