"use client"

import { Cn } from '@/Components/lib/Helper';
import { CatagoryData } from '@/DataSource/StaticData';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const FilterCatagory = () => {
    const params = useSearchParams();
    const catagoryId = params.get('catagoryId');
    const ProductType = params.get('type') || 's';
    return (
        <div className='w-full md:w-[220px]'>
            <div className="w-full">
                <div className="flex flex-col gap-4 justify-start">
                    <div className="flex items-center justify-between">
                        <div className='mb-[px]'>
                            <span className="text-toptext border-border border px-2 py-1 text-[15px] font-normal  leading-[1.56px]">
                                Filter by Categories
                            </span>
                        </div>
                    </div>
                    <div className="flex md:items-center items-start relative md:flex-row flex-col md:gap-[32px] gap-4 justify-between">
                        <div className="md:w-[70%] flex flex-row flex-wrap md:gap-0 gap-1 md:flex-col  w-full">
                            {
                                CatagoryData?.map((item, index) => {
                                    return (
                                        <Link href={`/product?type=${ProductType}&catagoryId=${item?.link.split('/').join('')}`} className={Cn(`text-[14px] py-[5px]  px-3 md:px-1 ${catagoryId && item?.link.toLowerCase().includes(catagoryId.toLowerCase()) ? 'bg-gray-100' : ''}`)} key={index}>{item?.CatagoryName} </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterCatagory