'use client'

import React, { useEffect } from 'react'
import TopHeaders from './TopHeaders'
import Catagory from './Catagory'
import rings from '../../../Assests/Products/rings.png'
import necklaces from '../../../Assests/Products/necklaces.png'
import earrings from '../../../Assests/Products/earrings.png'
import bracelets from '../../../Assests/Products/bracelets.png'
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

    const SelectProductyType = () => {
        switch (productType.toLowerCase()) {
            case 'rings':
                return rings;
            case 'bracelets':
                return bracelets;
            case 'earrings':
                return earrings;
            case 'necklaces':
            default:
                return necklaces;
        }
    }

    return (
        <div className='w-full'>
            <TopHeaders BackgroundImage={SelectProductyType()} />
            <div className="flex max_width  lg:flex-row flex-col py-[40px] items-start justify-center">
                <Catagory />
            </div>
        </div>
    )
}

export default MainCatagory
