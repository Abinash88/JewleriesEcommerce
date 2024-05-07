
import React from 'react'

import { fetchGetRequest } from '@/Components/lib/Helper';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ReviewsTypes } from '@/DataSource/Types';
import Skeleton from 'react-loading-skeleton';
import dynamic from 'next/dynamic';
const ReviewSlider = dynamic(() => import("./ReviewSlider"))

const Testimonials = async () => {

    const fetchData: ReviewsTypes[] = await fetchGetRequest({ endpoint: "testimonials/" });

    return (
        <div className='w-full'>
            <div className="max_width  py-[40px]">
                {!fetchData ?
                    <Skeleton height={478} />
                    :
                    <div className="w-full  xl:h-[478px]  h-auto flex items-center rounded-lg bg-reviews_bg_zinc">
                        <div className="flex items-center relative xl:py-0 py-6 xl:flex-row flex-col gap-[40px] xl:gap-0 w-[90%] mx-auto justify-between">

                            <div className="flex flex-col xl;w-[40%] w-full h-full gap-[12px]">
                                <h3 className="section_title text-white">From the people </h3>
                                <p className="section_desc text-white ">We love hearing from our patient! You’re the reason we’re here and the reason we do what we do.</p>
                            </div>

                            <ReviewSlider fetchData={fetchData} />

                            <div className="sliderNav absolute flex items-center gap-[18px] z-30 bottom-7 md:bottom-8 xl:bottom-0 right-[50px]">
                                <div className="prev cursor-pointer bg-teal-100 w-[52px] h-[52px] transition3sec
                             rounded-full flex items-center justify-center hover:bg-green-900 group">
                                    <FaChevronLeft className='text-green-900 text-[22px] group-hover:text-white transition3sec' />
                                </div>
                                <div className="next cursor-pointer bg-teal-100 w-[52px] h-[52px] transition3sec
                             rounded-full flex items-center justify-center hover:bg-green-900 group">
                                    <FaChevronRight className='text-green-900 text-[22px] group-hover:text-white transition3sec' />
                                </div>
                            </div>
                        </div>

                    </div>}
            </div>
        </div >
    )
}

export default Testimonials