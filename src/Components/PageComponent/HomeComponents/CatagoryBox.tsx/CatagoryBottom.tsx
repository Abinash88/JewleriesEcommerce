"use client"

import { Cn } from '@/Components/lib/Helper';
import React from 'react';
import { CatagoryData } from '../../../../DataSource/StaticData';
import Image from 'next/image';
import Link from 'next/link';

const CatagoryBottom = () => {

    return (
        <div className="flex flex-col w-full   items-end">
            <div className="gap-10 flex w-full flex-wrap items-end justify-center">
                {
                    CatagoryData?.map((item, index) => {
                        return (<Link href={item?.link} key={index} className='flex justify-center gap-3 flex-col'>
                            <div className={Cn(` overflow-hidden rounded-b-md rounded-t-full ${item?.style}`)}>
                                <Image src={item?.image} className='w-full h-full object-cover' alt={item?.CatagoryName} />
                            </div>
                            <h3 className='text-[15px]  text-text text-center'>{item?.CatagoryName}</h3>
                        </Link>)
                    })
                }
            </div>
        </div>
    )
}

export default CatagoryBottom