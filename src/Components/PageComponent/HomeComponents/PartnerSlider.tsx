import React from 'react'
import MainPartnerSlider from './PartnerSliderComponent/MainPartnerSlider'
import { fetchGetRequest } from '@/Components/lib/Helper'
import { CorrporatePartnerTypes } from '@/DataSource/Types';
import Skeleton from 'react-loading-skeleton';

const PartnerSlider = async () => {

    const fetchData: CorrporatePartnerTypes[] = await fetchGetRequest({ endpoint: "coorperate-partners/" });

    return (
        <div className='w-full'>
            <div className="w-full flex flex-col py-5 md:py-10 max_width">
                <h3 className="text-zinc-900 text-3xl font-bold text-left lg:text-center font-['Epilogue'] mb-7 leading-[140%]">
                    {fetchData ? "Our Corporate Partner" : <Skeleton width={300} height={60} />}
                </h3>
                <MainPartnerSlider fetchData={fetchData} />
            </div>
        </div>
    )
}

export default PartnerSlider