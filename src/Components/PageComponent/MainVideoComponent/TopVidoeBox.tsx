"use client"

import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import Video from './Video'
import Skeleton from 'react-loading-skeleton'
import { VideoDataTypes } from '@/DataSource/Types'
const VideoSidebar = dynamic(() => import("./VideoSidebar"), { loading: () => <Skeleton height={80} count={5} /> })

const TopVidoeBox = ({ fetchData }: { fetchData: VideoDataTypes }) => {

    const [videoPlay, setVideoPlay] = useState<string>("");

    const openVideoBox = (index: number) => {
        const checkVideoOrUrl = fetchData?.results?.[index]?.video_url || fetchData?.results?.[index]?.video?.file
        setVideoPlay(checkVideoOrUrl)
    }

    return (
        <div className='w-full flex lg:flex-row  gap-8 flex-col items-start'>
            <div className="md:flex-1 w-full">
                <Video videoPlay={videoPlay} fetchData={fetchData} />
            </div>
            <div className="h-full  w-full lg:w-[337px]">
                <VideoSidebar openVideoBox={openVideoBox} fetchData={fetchData} />
            </div>
        </div>
    )
}

export default TopVidoeBox