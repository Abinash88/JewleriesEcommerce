import React from 'react'
import TopHeaders from '../CatagoryComponent/TopHeaders'
import Background from "../../../Assests/Products/undertone.png"
const MainAccordian = dynamic(() => import("./MainAccordian"))
import dynamic from 'next/dynamic'

const MainUndertone = async () => {

    return (
        <div className='w-full'>
            <div className="w-full">
                <TopHeaders BackgroundImage={Background} />
            </div>
            <div className="max_width w-full my-[63px]">
                <MainAccordian />
            </div>

        </div>
    )
}

export default MainUndertone