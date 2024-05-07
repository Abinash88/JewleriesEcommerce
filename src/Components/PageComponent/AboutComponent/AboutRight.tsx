import { fetchGetRequest } from '@/Components/lib/Helper'
import { AboutTypes } from '@/DataSource/Types'
import Image from 'next/image'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const AboutRight = async () => {

    const fetchData: AboutTypes = await fetchGetRequest({ endpoint: 'about-us/' })

    return (
        <div className='w-full flex items-start flex-col gap-[44px]'>
            <div className="w-full h-[549px]  rounded-lg overflow-hidden">
                {
                    fetchData ? <Image src={fetchData?.offer_images?.[0]?.image?.file || ""} width={500} height={700} alt='surgery image' className='w-full h-full rounded-lg object-cover' />
                        :
                        < Skeleton style={{ height: "100%" }} />
                }
            </div>
            <div className="w-full h-[814px]  rounded-lg overflow-hidden">
                {
                    fetchData ?
                        <Image src={fetchData?.offer_images?.[1]?.image?.file || ""} width={500} height={700} alt='surgery image' className='w-full h-full rounded-lg object-cover' />
                        :
                        < Skeleton style={{ height: "100%" }} />
                }
            </div>
        </div>
    )
}

export default AboutRight