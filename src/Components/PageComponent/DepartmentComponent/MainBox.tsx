import dynamic from 'next/dynamic'
import React from 'react'
import MainDepartment from './MainDepartment'
import TopHeaders from '../CatagoryComponent/TopHeaders'
const LeftSidebar = dynamic(() => import("./LeftSidebar"))
const DoctorSlider = dynamic(() => import("./DoctorSlider"))
// const DepartmentSlider = dynamic(() => import("./DepartmentSlider"))
import Background from "../../../Assests/Home/Hands.png"
import { MainDepartmentDataTypes } from '@/DataSource/Types'
import { fetchGetRequest } from '@/Components/lib/Helper'
const MainBox = async ({ slug }: { slug: string }) => {


    const fetchData: MainDepartmentDataTypes = await fetchGetRequest({ endpoint: `department/${slug}` })
    // const department: MainDepartmentDataTypes = await fetchGetRequest({ endpoint: `department/` })

    return (
        <div className="">
            <TopHeaders fetchQuery={`department`} BackgroundImage={Background} desc={`Home > Department > ${slug}`} title={`Department of ${fetchData?.name}`} />
            <div className='w-full mt-[60px] max_width  flex lg:flex-row flex-col-reverse items-start'>
                <div className="lg:w-[300px] w-full">
                    <LeftSidebar slug={slug} />
                </div>
                <div className="flex-1 w-full lg:w-[80%] mb-[56px]">
                    <MainDepartment fetchData={fetchData} />
                    <DoctorSlider slug={slug} />
                    {/* <DepartmentSlider department={department} /> */}
                </div>
            </div>
        </div>
    )
}

export default MainBox