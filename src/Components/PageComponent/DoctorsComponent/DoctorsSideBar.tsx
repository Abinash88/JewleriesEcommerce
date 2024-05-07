import Image from 'next/image'
import React from 'react'
import Surgery from "../../../Assests/HomeImages/Eplore/surgery.png"
import { DoctorTypes } from '@/DataSource/Types'
import Skeleton from 'react-loading-skeleton'

const DoctorsSideBar = ({ fetchData }: { fetchData: DoctorTypes }) => {
    return (
        <div className='lg:w-[310px] w-full z-20 lg:sticky top-[40px] mt-[55px] lg:ml-[35px] h-[523px]'>
            <div className="w-full h-full">
                {!fetchData ?
                    <Skeleton height={523} width={310} />
                    :
                    <Image width={350} height={300} src={fetchData?.offer_images?.[0]?.image.file || Surgery} alt='surger image' className='w-full h-full object-cover rounded-xl' />
                }
            </div>
        </div>
    )
}

export default DoctorsSideBar
