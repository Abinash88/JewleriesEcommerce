import React from 'react'
import TopHeaders from '../DoctorsComponent/TopHeaders'
const MainServiceBox = dynamic(() => import("./MainServiceBox"))
const ServicesSidebar = dynamic(() => import("./ServicesSidebar"))
const DepartmentSlider = dynamic(() => import("../DepartmentComponent/DepartmentSlider"))
// import DoctorSlider from '../DepartmentComponent/DoctorSlider'
import { fetchGetRequest } from '@/Components/lib/Helper'
import dynamic from 'next/dynamic'

const MainServices = async ({ slug }: { slug: string }) => {

    const department = await fetchGetRequest({ endpoint: `department/` })
    const fetchData = await fetchGetRequest({ endpoint: `hospital-services/${slug}` });
    return (
        <div className='w-full'>
            <TopHeaders fetchQuery={`department`} BackgroundImage={''} desc='Home > Services' title={`Services ${fetchData?.name}`} />
            <div className='w-full mt-[60px] max_width  flex lg:flex-row flex-col-reverse items-start'>
                <div className="lg:w-[400px] w-full">
                    <ServicesSidebar />
                </div>
                <div className="flex-1 w-full lg:w-[80%] mb-[56px]">
                    <MainServiceBox fetchData={fetchData} />
                    {/* <DoctorSlider /> */}
                    <DepartmentSlider department={department} />
                </div>
            </div>
        </div>
    )
}

export default MainServices