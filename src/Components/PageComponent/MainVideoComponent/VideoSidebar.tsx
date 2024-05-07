"use client"

import { ChangeToRealDate } from '@/Components/lib/Helper'
import { VideoDataTypes } from '@/DataSource/Types'
import Image from 'next/image'
import React from 'react'
import { MdCheckCircleOutline } from "react-icons/md";

const VideoSidebar = ({ fetchData, openVideoBox }:
    {
        fetchData: VideoDataTypes,
        openVideoBox: (index: number) => void;
    }) => {

    return (
        <div className='w-full flex  items-start justify-start flex-col'>
            <h3 className='w-full text-[35px] text-gray-700 mb-7 font-["Epilogue"] font-bold text-left'>Related Video</h3>

            <div className="w-full flex flex-col items-start gap-3">
                {fetchData &&
                    fetchData?.results?.slice(0, 5)?.map((item, index) => {
                        return (<div onClick={() => openVideoBox(index)} key={index} className='w-full hover:bg-gray-50 py-1 cursor-pointer h-[80px] flex gap-3'>
                            <div className="h-full w-[120px]">
                                <Image width={500} height={500} className='w-full h-full object-cover rounded-md'
                                    src={item?.thumbnail?.file} alt={item?.title} />
                            </div>
                            <div className="flex-1 flex flex-col gap-1">
                                <h4>{item?.title}</h4>
                                <div className="flex items-center gap-1">
                                    <p className=' text-[10px] font-semibold  text-zinc-400'>Charak Hospital</p>
                                    <MdCheckCircleOutline className=' text-[10px] text-zinc-400' />
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className=' text-[10px] text-zinc-400'>3M Views</p>
                                    <li className=' text-[10px] text-zinc-400 '>{ChangeToRealDate(item?.created_at)}</li>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>

            {/* {videoPlay &&
                <div className={` z-50 fixed  top-0 left-0 right-0 bottom-0 w-screen flex items-center  h-[100vh]`}>
                    <div onClick={() => setVideoPlay("")} className="absolute top-0 right-0  bg-black/80 backdrop-blur-md bottom-0 left-0">
                        <HiOutlineXMark className='lg:text-[100px] text-[80px] cursor-pointer p-5 rounded-full text-white absolute top-5 right-5' />
                    </div>

                    <ReactPlayer controls height={`auto`} width={'80%'} style={{ position: "relative", borderRadius: "10px", margin: "auto" }} loop playing={true} url={videoPlay} />
                </div>
            } */}
        </div>
    )
}

export default VideoSidebar