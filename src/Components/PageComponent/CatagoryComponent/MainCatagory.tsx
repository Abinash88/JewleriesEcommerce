'use client'

import React, { useEffect } from 'react'
import TopHeaders from './TopHeaders'
import Catagory from './Catagory'
import TopImage from '../../../Assests/Home/shortHairGirl.jpg'
import { useRouter, useSearchParams } from 'next/navigation'

const MainCatagory = () => {
    const params = useSearchParams();
    const productType = params.get('type') || '';
    const catagoryId = params.get('catagoryId') || '';
    const router = useRouter();
    useEffect(() => {
        if (!catagoryId && !productType) {
            router.push(`product?type=rings&catagoryId=stone`)
        }
        //eslint-disable-next-line
    }, [productType, catagoryId]);

    return (
        <div className='w-full'>
            <TopHeaders fetchQuery='doctor' BackgroundImage={TopImage} desc='Your Health Care Experts' title={productType} />
            <div className="flex max_width  lg:flex-row flex-col py-[40px] items-start justify-center">
                <Catagory />
            </div>
        </div>
    )
}

export default MainCatagory
