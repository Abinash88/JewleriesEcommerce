import { fetchGetRequest } from '@/Components/lib/Helper'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const TopHeaders = async ({ BackgroundImage, title, desc, fetchQuery }: { BackgroundImage: StaticImageData, title: string, desc: string, fetchQuery: string }) => {

    const fetchData = await fetchGetRequest({ endpoint: fetchQuery })

    return (
        <div className='w-full h-[230px] relative overflow-hidden'>

                <div className="w-full h-full flex items-center  ">
                    <div className="w-[30%] h-full">
                        <Image src={BackgroundImage} alt='background image' className='w-full object-cover object-left h-full' />
                    </div>
                    <div className=" flex-1 h-full relative bg-secondary-foreground items-center justify-center flex">
                        <div className="w-full text-center ">
                            <h2 className="text-toptext font-normal text-[60px] "> {title}</h2>
                        </div>
                    </div>
                    <div className=" w-[30%] h-full">
                        <Image src={BackgroundImage} alt='background image' className='w-full object-cover object-left h-full' />
                    </div>
                </div>
        </div>
    )
}

export default TopHeaders