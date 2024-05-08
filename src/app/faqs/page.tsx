import React from 'react'
const MainFaqs = dynamic(() => import("@/Components/PageComponent/CareersComponent/MainFaqs"))
import dynamic from 'next/dynamic'

const page = async () => {


    return (
        <div className='w-full'>
            <div className="max_width">
                <MainFaqs />
            </div>
        </div>
    )
}

export default page