
import Link from 'next/link'
import React from 'react'
import { VideoDataTypes } from '@/DataSource/Types';
import Skeleton from 'react-loading-skeleton';
import { fetchGetRequest } from '@/Components/lib/Helper';
import dynamic from 'next/dynamic';
const VideoSlider = dynamic(() => import("./VideoSlider"))

const VideoLibary = async () => {
    const fetchData: VideoDataTypes = await fetchGetRequest({ endpoint: "gallery/" });

    return (
        <div className='w-full'>
            <div className="max_width md:pb-[0px] pb-[40px]   pt-[40px]">
                <div className="flex items-center mb-[40px] justify-between">
                    {fetchData ?
                        <h3 className="section_title w-[60%]">What&apos;s new from us?</h3>
                        :
                        <Skeleton width={500} height={50} />
                    }

                    {fetchData ?
                        <Link href={'/video'} className="green_btn">
                            <span className='md:flex hidden'> More from libary</span>
                            <span className='md:hidden flex'> See More</span>
                        </Link>
                        :
                        <Skeleton width={500} height={50} />
                    }
                </div>

                <VideoSlider fetchData={fetchData} />
            </div>
        </div >
    )
}

export default VideoLibary