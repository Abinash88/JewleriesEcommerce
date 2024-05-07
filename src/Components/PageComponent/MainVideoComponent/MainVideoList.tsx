import { VideoDataTypes } from '@/DataSource/Types';
import React from 'react'
import VideoSlider from '../HomeComponents/VideoSlider';

const MainVideoList = ({ fetchData }: { fetchData: VideoDataTypes }) => {

    return (
        <div className='w-full'>
            <div className='w-full py-[60px]'>
                <div className="mb-5">
                    <h3 className='w-full text-[35px] text-gray-900 font-["Epilogue"]  font-bold text-left'>More from Libary</h3>
                </div>
                <VideoSlider fetchData={fetchData} />
            </div>
        </div>
    )
}

export default MainVideoList