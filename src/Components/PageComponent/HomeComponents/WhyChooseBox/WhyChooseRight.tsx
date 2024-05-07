"use client"

import { HtmlToText } from '@/Components/lib/Helper';
import { AboutTypes } from '@/DataSource/Types';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

const WhyChooseRight = ({ about: fetchData }: { about: AboutTypes }) => {

    return (
        <div className="flex flex-col w-full xl:w-[50%]  items-end">
            <div className="gap-4 flex w-full xl:w-[90%] flex-col">
                {fetchData ?
                    <div className="text-zinc-900 text-2xl 
                font-bold font-['Epilogue'] text-left leading-9">
                        Why Choose Charak Memorial Hospital?
                    </div>
                    : <Skeleton height={40} width={400} />
                }

                {fetchData ? <div className="w-full relative bg-emerald-50 
                rounded-md shadow">
                    <div className="md:w-[90%] p-5 text-zinc-900 text-lg md:text-[16px] 
                    font-normal font-['Inter'] leading-[32px]">
                        {HtmlToText(fetchData?.about_us?.why_choose_us)}
                    </div>
                </div>
                    :
                    <Skeleton height={300} />
                }
            </div>
        </div>
    )
}

export default WhyChooseRight