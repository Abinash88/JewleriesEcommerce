"use client"

import { hospitalServices } from '@/DataSource/Types';
import Image from 'next/image'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const WhyChooseLeft = ({ hospital: fetchData }: { hospital: hospitalServices }) => {

    const chooseColor = (index: number): string => {
        return index === 0 ? "#FCFEF3" : index === 1 ? "#EDFAFE" : index === 2 ? "#F8F7FD" : index === 3 ? "#FEF5F3" : ""
    }

    const chooseHomeServices = () => {
        if (fetchData)
            return fetchData?.services?.map((item, _) => {
                if (item?.show_on_home) {
                    return item;
                }
            }).filter(item => item)
    }


    return (
        <div className="flex flex-col items-start  xl:w-[50%] w-full gap-4">
            <div className="w-full">

                <h5 className="left-[100px] top-[16px] text-zinc-900 text-2xl font-bold font-['Epilogue'] leading-9">
                    {fetchData ? "  We can help you know about..." : <Skeleton height={40} width={400} />}
                </h5>
            </div>
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 place-items-start relative gap-[15px] rounded">
                {chooseHomeServices() ?
                    chooseHomeServices()?.map((item, index) => {
                        if (item?.show_on_home)
                            return (
                                <div style={{ boxShadow: '2px 2px solid #E5E5E5', backgroundColor: chooseColor(index) }} key={index}
                                    className={` ${index === 0 ? "" : index === 1 ? "" : index === 2 ? "" : index === 3 ? "" : null} 
                                            w-full flex  items-center relative justify-between gap-2 pl-4 h-[113px]  shadow`}>
                                    <div className="">
                                        <div className="w-[80%]  text-zinc-900 text-[17px] md:text-xl font-bold font-['Epilogue']  md:leading-[140%]">
                                            {item?.name}
                                        </div>
                                        <div className=" text-zinc-900 w-[80] text-[15px] md:text-[16px] font-normal font-['Inter'] leading-tight">
                                            {item?.description}
                                        </div>
                                    </div>
                                    <Image alt={item?.name} width={100} height={100} className={` w-[100px] h-[80px] p-2 object-contain`} src={item?.image?.file} />
                                </div>
                            )
                    })
                    :
                    <Skeleton width={500} height={100} direction="ltr" count={2} />
                }
            </div>
        </div >
    )
}

export default WhyChooseLeft