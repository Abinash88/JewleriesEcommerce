import React from 'react'
import MainPartnerSlider from './PartnerSliderComponent/MainPartnerSlider'

const ProductSlider = async () => {

    return (
        <div className='w-full'>
            <div className="w-full flex flex-col py-5 md:py-10 max_width">
                <h3 className="text-zinc-900 text-3xl font-bold text-left lg:text-center font-['Epilogue'] mb-7 leading-[140%]">
                    Product Highlight
                </h3>
                <MainPartnerSlider />
            </div>
        </div>
    )
}

export default ProductSlider