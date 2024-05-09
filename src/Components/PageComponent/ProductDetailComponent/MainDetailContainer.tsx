import React from 'react'
import MainDoctorDetail from './MainProductDetail'
import TopHeaders from '../CatagoryComponent/TopHeaders'
import others from "../../../Assests/Products/others.png"

const MainDetailContainer = async ({ params }: { params: { id: string } }) => {


    return (
        <div className='w-full flex flex-col gap-[45px]'>
            <TopHeaders BackgroundImage={others} style=' h-[80px] md:h-[128px]' />
            <MainDoctorDetail params={params} />
        </div>
    )
}

export default MainDetailContainer