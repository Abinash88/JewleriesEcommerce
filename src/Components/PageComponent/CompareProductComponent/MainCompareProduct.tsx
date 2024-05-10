import React from 'react'
import TopHeaders from '../CatagoryComponent/TopHeaders'
import CompareProduct from "../../../Assests/Products/compare.png"
import MainProduct from './MainProduct'
import { CatagoryProduct } from '@/DataSource/StaticData'

const MainCompareProduct = () => {
    return (
        <div className='w-full flex flex-col gap-[30px]'>
            <TopHeaders BackgroundImage={CompareProduct} style='' />
            <div className="flex  py-8 md:flex-row flex-col items-center gap-5">
                <MainProduct product={CatagoryProduct[0]} />
                <MainProduct product={CatagoryProduct[1]} />
            </div>
        </div>
    )
}

export default MainCompareProduct