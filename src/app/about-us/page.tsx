import React from 'react'
const MainAbout = dynamic(() => import("@/Components/PageComponent/AboutComponent/MainAbout"))
import dynamic from 'next/dynamic'



const page = () => {

    return (
        <div className='w-full fixed_head_style '>
            <div className="max_width">
                <MainAbout />
            </div>
        </div>
    )

}



export default page
