"use client"

import { VideoDataTypes } from '@/DataSource/Types'
import dynamic from 'next/dynamic'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false, loading: () => <Skeleton height={500} /> })

const Video = ({ fetchData, videoPlay }: { fetchData: VideoDataTypes, videoPlay: string }) => {



    return (
        <div className="w-full">
            <div className='w-full lg:w-[90%] mx-auto flex-1  lg:h-[560px] hover:shadow-md '>
                <ReactPlayer controls width={`100%`} height={'100%'} style={{ borderRadius: "10px", }}
                    loop playing={true} url={videoPlay || fetchData?.results?.[0]?.video?.file} />
            </div>

        </div>
    )
}

export default Video