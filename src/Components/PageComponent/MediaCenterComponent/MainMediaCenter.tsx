"use client"

import Image from 'next/image'
import React from 'react'
import Surgery from "../../../Assests/HomeImages/Eplore/surgery.png"
import dynamic from 'next/dynamic'
import { PostsDataTypes } from '@/DataSource/Types'
import Skeleton from 'react-loading-skeleton'
import { HtmlToText } from '@/Components/lib/Helper'
import Link from 'next/link'
const MediaContentBox = dynamic(() => import("./MediaContentBox"))

const MainMediaCenter = ({ fetchData }: { fetchData: PostsDataTypes }) => {
    return (
        <div className='w-full'>
            {!fetchData ?
                < Skeleton style={{ marginBottom: "20px" }} height={350} />
                :
                fetchData?.results?.map((item, index) => {
                    if (item?.featured) {
                        return (<Link href={`/blogs/${item?.slug}`} key={index} className="flex w-full lg:flex-row flex-col  lg:h-[441px] items-center">
                            <div className=" relative w-full md:mb-0 mb-4 lg:w-[40%]">

                                <div key={index} className="lg:w-[509px] w-full lg:h-[356px] h-auto static lg:absolute right-[-40px] top-[50%] z-20  lg:transform  lg:translate-y-[-50%] bg-zinc-100 p-[20px] md:p-[36px] rounded-lg shadow">
                                    <h3 className="md:w-[437px] text-green-800 text-[28px] md:text-[32px] font-semibold font-['Epilogue'] leading-[140%]">{item?.title}</h3>
                                    <div className="md:w-[437px] text-zinc-900 text-base mt-[15px] mb-[24px] font-normal font-['Inter'] leading-relaxed">{HtmlToText(item?.content.substring(0, 150))}</div>
                                    <h5 className="text-zinc-700 text-base font-normal font-['Inter'] leading-relaxed">May 29, 2023</h5>
                                </div>
                            </div>
                            <div className="lg:flex-1 h-full w-full">
                                {!fetchData ?
                                    < Skeleton style={{ marginBottom: "20px" }} height={450} />
                                    :
                                    <Image src={Surgery} alt='images' loading='lazy' className='w-full rounded-lg h-full object-cover' />}
                            </div>
                        </Link>)
                    }

                })
            }
            <div className="w-full mt-[60px]">
                <MediaContentBox fetchData={fetchData} />
            </div>
        </div>
    )
}

export default MainMediaCenter