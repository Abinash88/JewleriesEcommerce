import { DoctorDetailTypes } from '@/DataSource/Types'
import Image from 'next/image'
import React from 'react'

const RightDoctorContent = ({ fetchData }: { fetchData: DoctorDetailTypes | undefined }) => {
    return (
        <div className='lg:w-[380px] w-full h-[549px]'>
            <Image width={400} height={600} src={fetchData?.offer_images?.[0]?.image?.file || ""} alt='' className='w-full object-cover  rounded-lg h-full' />
        </div>
    )
}

export default RightDoctorContent;