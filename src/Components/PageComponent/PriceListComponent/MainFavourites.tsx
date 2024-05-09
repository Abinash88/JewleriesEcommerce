"use client"

import React from 'react'
import { SeconedHead } from '@/Components/Ui/Texts'
import { CatagoryProduct } from '@/DataSource/StaticData'
import SingleProduct from '../CatagoryComponent/SingleProduct'

const MainFavourites = () => {




    return (
        <div className='w-[80%] mx-auto flex flex-col gap-[40px] items-start mt-[60px]'>
            <div className="flex-1 w-full flex flex-col gap-10">
                <SeconedHead text='Shop Your Fvourites' className='text-center underline  font-["Poly"]'/>
            </div>
            <div className="flex-1 md:place-items-start gap-4 grid grid-cols-1 sm:grid-cols-2 
                justify-center md:grid-cols-2 lg:grid-cols-3  w-full xl:grid-cols-4 place-items-center mt-[40px] ">
                     {
                        CatagoryProduct?.map((item, index) => {
                            return (
                                <SingleProduct  item={item} index={index} key={index} />
                            )
                        })

                    }
            </div>
        </div >
    )
}

export default MainFavourites