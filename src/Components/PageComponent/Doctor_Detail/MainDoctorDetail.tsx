import React from 'react'
const LeftDoctorContent = dynamic(() => import("./LeftDoctorContent"))
const RightDoctorContent = dynamic(() => import("./RightDoctorContent"))
import TopAboutDoctor from './TopAboutDoctor'
import dynamic from 'next/dynamic'
import { DoctorDetailTypes } from '@/DataSource/Types'
import Skeleton from 'react-loading-skeleton'
import { fetchGetRequest } from '@/Components/lib/Helper'

const MainDoctorDetail = async ({ params }: { params: { id: string } }) => {
    const fetchData: DoctorDetailTypes = await fetchGetRequest({ endpoint: `doctor/${params?.id}` })

    return (
        <div className='w-full'>
            <div className="w-full pb-[60px]">
                {
                    fetchData ?
                        <TopAboutDoctor fetchData={fetchData} />
                        :
                        <Skeleton height={119} />
                }
                <div className="flex items-start gap-[61px] lg:flex-row flex-col justify-between w-full">

                    <LeftDoctorContent fetchData={fetchData} />
                    {
                        fetchData ?
                            <RightDoctorContent fetchData={fetchData} />
                            :
                            <Skeleton style={{ marginTop: "40px" }} width={380} height={549} />
                    }
                </div>
            </div>
        </div>
    )
}

export default MainDoctorDetail