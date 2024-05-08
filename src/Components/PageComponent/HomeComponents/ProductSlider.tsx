import React from 'react'
import MainPartnerSlider from './PartnerSliderComponent/MainPartnerSlider'
import { SeconedHead } from '@/Components/Ui/Texts'

const ProductSlider = async () => {

    return (
        <div className='w-full'>
            <div className="w-full flex flex-col py-5 md:py-10 ">
                <div className="max_width mb-4">
                    <SeconedHead text='Product Highlight' className='text-left' />
                </div>
                <MainPartnerSlider />
            </div>
        </div>
    )
}

export default ProductSlider