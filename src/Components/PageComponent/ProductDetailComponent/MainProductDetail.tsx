import React from 'react'
const BottomMoreProduct = dynamic(() => import("./BottomMoreProduct"))
import MainSingleProduct from './MainSingleProduct'
import dynamic from 'next/dynamic'

const MainProductDetail = async ({ params }: { params: { id: string } }) => {

    return (
        <div className='w-full'>
            <div className="w-full ">
                <MainSingleProduct />
                <div className=" mt-[60px]  w-full">
                    <BottomMoreProduct />
                </div>
            </div>
        </div>
    )
}

export default MainProductDetail