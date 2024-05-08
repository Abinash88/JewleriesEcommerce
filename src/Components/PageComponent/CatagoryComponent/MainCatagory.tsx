import React from 'react'
import TopHeaders from './TopHeaders'
import AllDoctors from './Catagory'
import TopImage from '../../../Assests/Home/shortHairGirl.jpg'
import dynamic from 'next/dynamic'
// const MainCatagoryItems = dynamic(() => import('./DoctorsSideBar'))
const MainCatagory = async () => {


    return (
        <div className='w-full'>
            <TopHeaders fetchQuery='doctor' BackgroundImage={TopImage} desc='Your Health Care Experts' title='RINGS' />
            <div className="flex max_width  lg:flex-row flex-col py-[40px] items-start justify-center">
                <div className="flex-1  w-full">
                    <AllDoctors  />
                </div>
                {/* <MainCatagoryItems fetchData={fetchData} /> */}
            </div>
        </div>
    )
}

export default MainCatagory
