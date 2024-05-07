import React from 'react'
const MainVideoList = dynamic(() => import("./MainVideoList"), { loading: () => <Skeleton height={350} /> })
import TopVidoeBox from './TopVidoeBox'
import dynamic from 'next/dynamic'
import Skeleton from 'react-loading-skeleton'
import { fetchGetRequest } from '@/Components/lib/Helper'
import { VideoDataTypes } from '@/DataSource/Types'

const MainVideo = async () => {

    const fetchData: VideoDataTypes = await fetchGetRequest({ endpoint: "gallery/" })

    return (
        <div className='w-full flex py-[60px] flex-col '>
            <TopVidoeBox fetchData={fetchData} />
            <MainVideoList fetchData={fetchData} />
        </div>
    )
}

export default MainVideo