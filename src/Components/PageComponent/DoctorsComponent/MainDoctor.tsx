import React from 'react'
import TopHeaders from './TopHeaders'
import AllDoctors from './AllDoctors'
import Background from "../../../Assests/HomeImages/charak_background.png"
import { fetchGetRequest } from '@/Components/lib/Helper'
import { DoctorTypes } from '@/DataSource/Types'
import dynamic from 'next/dynamic'
const DoctorsSideBar = dynamic(() => import('./DoctorsSideBar'))
const MainDoctor = async () => {

    const fetchData: DoctorTypes = await fetchGetRequest({ endpoint: 'doctor/' })

    return (
        <div className='w-full'>
            <TopHeaders fetchQuery='doctor' BackgroundImage={Background} desc='Your Health Care Experts' title='Doctors at Charak' />
            <div className="flex max_width  lg:flex-row flex-col py-[40px] items-start justify-center">
                <div className="flex-1  w-full">
                    <AllDoctors fetchData={fetchData} />
                </div>
                <DoctorsSideBar fetchData={fetchData} />
            </div>
        </div>
    )
}

export default MainDoctor
