import { HtmlToText, fetchGetRequest } from '@/Components/lib/Helper'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const AboutDetail = async () => {

    const fetchData = await fetchGetRequest({ endpoint: 'about-us/' })
    return (
        <div className='w-full mt-[40px]'>

            <div className="w-full">
                <h3 className="text-zinc-900 mb-[20px] text-[32px] font-bold font-['Epilogue'] leading-[48px]">{fetchData ? "About Us" : <Skeleton width={200} height={60} />}</h3>
                <div className="flex items-start lg:w-[95%]  flex-col w-full gap-4">

                    {
                        fetchData ?
                            <div className="text-sm font-normal text-justify font-['Inter'] leading-[140%] text-zinc-900">
                                {HtmlToText(fetchData?.about_us?.description)}
                            </div>
                            :
                            <div className="w-full">
                                <Skeleton count={6} />
                            </div>
                    }
                </div>

            </div>

        </div>
    )
}

export default AboutDetail