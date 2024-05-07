import { fetchGetRequest } from '@/Components/lib/Helper'
import { AboutData } from '@/DataSource/StaticData'
import { AboutTypes } from '@/DataSource/Types'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const LeftTopService = async () => {
    const fetchData: AboutTypes = await fetchGetRequest({ endpoint: 'about-us/' })

    return (
        <div className='w-full flex aboutGridBox gap-[20px] md:gap-[30px] 2xl:gap-[48px] flex-wrap justify-between '>
            {
                AboutData[0]?.aboutPoint?.map((item, index) => {
                    if (!fetchData) return <Skeleton height={72} />;
                    return (
                        <div key={index} className='w-full'>
                            <div className=' px-3.5 py-[17px] w-full bg-emerald-50 rounded-lg justify-between 
                            md:justify-start items-center gap-8 inline-flex' key={index}>
                                <div className="text-zinc-900 flex flex-col flex-1 gap-1 text-base font-semibold 
                                font-['Inter'] leading-tight">
                                    <h5>{item?.number}+</h5>
                                    <h5>{item?.title}</h5>
                                </div>
                                <span className='text-reviews_zinc text-[28px]'>{item?.icon}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default LeftTopService