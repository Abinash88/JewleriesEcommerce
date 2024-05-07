"use client"

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { VideoDataTypes } from '@/DataSource/Types';
import Image from 'next/image';
import { IoPlayOutline } from 'react-icons/io5';
import Skeleton from 'react-loading-skeleton';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { HiOutlineXMark } from 'react-icons/hi2';
import ReactPlayer from 'react-player';

const VideoSlider = ({ fetchData }: { fetchData: VideoDataTypes }) => {

    const [videoPlay, setVideoPlay] = useState<string | undefined>(undefined);


    const openVideoBox = (index: number) => {
        const setVideo = fetchData?.results?.[index]?.video_url || fetchData?.results?.[index]?.video?.file
        setVideoPlay(setVideo)
    }

    return (
        <div className='w-full'>
            <div className="relative w-full">
                {
                    fetchData ?
                        <Swiper
                            spaceBetween={80}
                            slidesPerView={1}
                            modules={[Navigation]}
                            autoplay={true}
                            navigation={{
                                nextEl: ".nextEl",
                                prevEl: ".prevEl",
                            }}
                            loop={true}
                            breakpoints={{
                                480: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                }
                            }}
                            className="w-full  gap-[80px] h-[400px]">
                            {
                                fetchData?.results?.map((item, index) => {
                                    return (
                                        <SwiperSlide onClick={() => openVideoBox(index)} key={index} className={` cursor-pointer rounded-md overflow-hidden`}>
                                            <div className="w-full h-[227px] relative group">
                                                <Image src={item?.thumbnail?.file} alt={item?.categories?.name || ""} width={400} height={400} className='w-full object-cover h-full' />
                                                <IoPlayOutline onClick={() => openVideoBox(index)} className='text-[40px] group-hover:scale-110 transform absolute top-[50%] 
                                                    left-[50%] z-20  text-white translate-x-[-50%] translate-y-[-50%] ' />
                                                {/* <div className="w-[66px] flex items-center absolute h-7 justify-center z-20 top-2 left-2 bg-gray-100 rounded-[14px]">
                                                        <span className=" text-zincp-700 text-xs font-normal font-['Inter'] leading-tight">01:30:45</span>
                                                    </div> */}
                                            </div>
                                            <div className="mt-[16px] w-[90%]">
                                                <h4 className="w-[376px] text-zinc-950 text-[15px] md:text-lg font-bold font-['Epilogue'] leading-7">
                                                    {item?.description?.substring(0, 70)}...
                                                </h4>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }

                        </Swiper>
                        :
                        <Skeleton height={300} />
                }
                <div className="sliderNav absolute flex items-center gap-[18px] z-30 bottom-0 md:bottom-8 xl:bottom-0 right-0 md:right-[50px]">
                    {!fetchData ?
                        <Skeleton height={300} width={70} borderRadius={100} />
                        :
                        <div className="prevEl cursor-pointer border-green-900 border-2 w-[52px] h-[52px] transition3sec
                             rounded-full flex items-center justify-center hover:bg-green-900 group">
                            <FaChevronLeft className='text-green-900 text-[22px] group-hover:text-white transition3sec' />
                        </div>
                    }
                    {!fetchData ?
                        <Skeleton height={70} width={70} borderRadius={100} />
                        :
                        <div className="nextEl cursor-pointer border-green-900 border-2 w-[52px] h-[52px] transition3sec
                             rounded-full flex items-center justify-center hover:bg-green-900 group">
                            <FaChevronRight className='text-green-900 text-[22px] group-hover:text-white transition3sec' />
                        </div>
                    }

                </div>
            </div>
            {videoPlay &&
                <div className={` z-50 fixed  top-0 left-0 right-0 bottom-0 w-screen flex items-center justify-center  h-[100vh]`}>
                    <div onClick={() => setVideoPlay(undefined)} className="absolute top-0 right-0  bg-black/80 backdrop-blur-md bottom-0 left-0">
                    </div>
                    <div className="w-[90%] md:w-[80%] relative h-[80%] mx-auto">
                        <HiOutlineXMark onClick={() => setVideoPlay(undefined)} className='lg:text-[50px] z-40 bg-gray-500/60  text-[40px] cursor-pointer p-2 rounded-full text-white absolute -top-10 md:-top-6 right-0 md:-right-6' />

                        <ReactPlayer controls height={`100%`} width={'100%'} style={{ position: "relative", borderRadius: "10px", }} loop playing={true} url={videoPlay} />
                    </div>
                </div>
            }
        </div>
    )
}

export default VideoSlider