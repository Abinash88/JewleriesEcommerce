import { fetchGetRequest } from '@/Components/lib/Helper'
import { AboutTypes } from '@/DataSource/Types'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const TopHeaders = async ({ BackgroundImage, title, desc, fetchQuery }: { BackgroundImage: StaticImageData, title: string, desc: string, fetchQuery: string }) => {

    const fetchData: AboutTypes = await fetchGetRequest({ endpoint: fetchQuery })

    return (
        <div className='w-full h-[193px] relative overflow-hidden'>

            {fetchData ?
                <div className="w-full h-full">
                    <div className="w-full left-0 absolute h-full">
                        <Image src={BackgroundImage} alt='background image' className='w-full object-cover object-left h-full' />
                    </div>
                    <div className="max_width  relative  items-start flex-col pt-[50px] flex">
                        <div className="md:w-full  w-[70%]">
                            <h3 className="text-teal-800  top_header_title"> {title}</h3>
                            <p className="text-zinc-900  top_header_paragraph"> {desc}</p>
                        </div>
                    </div>
                </div>
                :
                < Skeleton style={{ height: "100%", width: '100%' }} />
            }
        </div>
    )
}

export default TopHeaders