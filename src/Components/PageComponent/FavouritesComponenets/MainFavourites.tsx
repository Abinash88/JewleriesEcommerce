"use client"

import React from 'react'
import { MainTextHead } from '@/Components/Ui/Texts'
import { CatagoryProduct } from '@/DataSource/StaticData'
import SingleProduct from '../CatagoryComponent/SingleProduct'
import NoProducts from '../BagsComponent/NoProducts'

const MainFavourites = () => {

    const isFav = false


    return (
        <div className=' w-full md:w-[80%] mx-auto flex flex-col gap-[40px] items-start mt-[60px]'>
            <div className="flex-1 w-full flex flex-col gap-10">
                <MainTextHead text='Shop Your Fvourites' className='text-center underline text-text  lg:text-[36px] font-["Poly"]' />
            </div>
            {isFav ?
                <div className="flex-1  md:place-items-start gap-4 grid grid-cols-1 sm:grid-cols-2 
                justify-center md:grid-cols-2 lg:grid-cols-3  w-full xl:grid-cols-4 place-items-center mt-[40px] ">
                    {
                        CatagoryProduct?.map((item, index) => {
                            return (
                                <SingleProduct item={item} index={index} key={index} />
                            )
                        })
                    }
                </div>
                :
                <div className="w-full flex  justify-center">
                    <NoProducts title='YOUR FAVOURITES IS EMPTY'  />
                </div>
            }
        </div >
    )
}

export default MainFavourites