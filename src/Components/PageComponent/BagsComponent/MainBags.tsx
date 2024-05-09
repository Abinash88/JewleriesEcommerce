import React from 'react'
import MainBagsData from './MainBagsData'
const MainBags = async ({ slug }: { slug: string }) => {


    return (
        <div className="w-full">
            <div className='w-full my-[60px] max_width flex lg:flex-row flex-col-reverse items-start'>
                <MainBagsData />
            </div>
        </div>
    )
}

export default MainBags