import { fetchGetRequest } from '@/Components/lib/Helper'
import { BodTypes } from '@/DataSource/Types'
import dynamic from 'next/dynamic'

import React from 'react'

const AboutLeft = dynamic(() => import("./AboutLeft"))

const AboutRight = dynamic(() => import("./AboutRight"))

const BordOfDIrector = dynamic(() => import("./BordOfDIrector"))



const MainAbout = async () => {

    const fetchData: BodTypes[] = await fetchGetRequest({ endpoint: 'bod/' })



    return (

        <div className='w-full py-[40px]'>

            <div className="w-full flex items-start gap-[25px] lg:flex-row flex-col justify-center">

                <div className="flex-1">

                    <AboutLeft />

                </div>

                <div className="lg:w-[305px] w-full h-full">

                    <AboutRight />

                </div>

            </div>

            <BordOfDIrector fetchData={fetchData} />

        </div>

    )

}



export default MainAbout
