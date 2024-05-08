import { fetchGetRequest } from '@/Components/lib/Helper'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const TopHeaders = ({ BackgroundImage, title, desc, fetchQuery }: { BackgroundImage: StaticImageData, title: string, desc: string, fetchQuery: string }) => {


    return (
        <div className='w-full md:h-[260px] relative overflow-hidden'>

            <div className="w-full h-full bg-secondary-foreground  relative flex items-center justify-center ">
                <div className="w-[25%] md:w-[30%] h-full">
                    <Image src={BackgroundImage} alt='background image' className='w-full object-cover object-left h-full' />
                </div>
                <div className=" flex-1 h-full relative items-center justify-center flex">
                    <div className="w-full h-full text-center flex items-center justify-center ">
                        <h2 className="text-toptext font-normal text-[28px] md:text-[40px] lg:text-[60px] uppercase "> {title}</h2>
                    </div>
                </div>
                <div className=" w-[25%] md:w-[30%] h-full">
                    <Image src={BackgroundImage} alt='background image' className='w-full object-cover object-left h-full' />
                </div>
            </div>
        </div>
    )
}

export default TopHeaders