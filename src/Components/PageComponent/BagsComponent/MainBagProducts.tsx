import { CatagoryProduct } from '@/DataSource/StaticData'
import React from 'react'
import SingleProduct from '../CatagoryComponent/SingleProduct'
import SingleBagProduct from './SingleBagProduct'

const MainBagProducts = () => {
    return (
        <div className='flex flex-col gap-5'>
            {
                CatagoryProduct?.map((item, index) => {
                    return (
                        <SingleBagProduct item={item} key={index} />
                    )
                })

            }
        </div>
    )
}

export default MainBagProducts