import React from 'react'
import MainDoctorDetail from './MainDoctorDetail'

const MainDetailContainer = async ({ params }: { params: { id: string } }) => {


    return (
        <div className='w-full'>
            <MainDoctorDetail params={params} />
        </div>
    )
}

export default MainDetailContainer