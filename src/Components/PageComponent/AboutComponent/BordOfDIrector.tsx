"use client"

import { BodTypes } from '@/DataSource/Types'
import Image from 'next/image'
import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import BodMessage from './BodMessage'

const BordOfDIrector = ({ fetchData }: { fetchData: BodTypes[] }) => {

    const [Message, setMessage] = useState<BodTypes>();

    return (
        <div className='w-full pt-[82px]'>
            <div className="w-full">
                <h2 className="mb-[32px] text-zinc-900 text-[27px] md:text-[32px] font-bold font-['Epilogue'] leading-[48px]">Board of Directors</h2>
                <div className="DirectorGrid">
                    {fetchData ?
                        fetchData?.map((item, index) => {

                            return (
                                <div onClick={() => setMessage(item)} key={index} className='h-auto relative cursor-pointer hover:!scale-110 transition3sec bg-white rounded-md shadow'>
                                    <div className="w-full h-[290px] mb-[13px]">
                                        <Image width={300} height={300} src={item?.image?.file} loading='lazy' className='w-full h-full object-cover' alt={item?.name} />
                                    </div>
                                    <div className="flex flex-col px-[14px] pb-2 gap-[1px]">
                                        <h3 className="text-zinc-900 text-lg font-bold font-['Epilogue'] leading-7">{item?.name}</h3>
                                        <h6 className="text-teal-800 text-xs font-normal font-['Inter'] leading-relaxed">{item?.designation}</h6>
                                    </div>

                                </div>
                            )
                        })
                        :
                        <Skeleton />
                    }
                    {Message?.message &&
                        <BodMessage setMessage={setMessage} message={Message} />
                    }
                </div>
            </div>
        </div>
    )
}

export default BordOfDIrector