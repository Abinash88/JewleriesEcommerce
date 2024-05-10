"use client"

import Image from 'next/image'
import React from 'react'
import Texts, { MainTextHead, SeconedHead } from '@/Components/Ui/Texts'
import Rings from "../../../Assests/productRing.png"
import RightOrderSummary from './RightOrderSummary'
import MainBagProducts from './MainBagProducts'
import NoProducts from './NoProducts'

const Main = () => {
    let isProduct = true
    return (
        <div className='w-full'>
            <div className="w-full flex flex-col gap-[35px]">
                <div className="flex flex-1 flex-col">
                    <div className="flex gap-8">
                        <MainTextHead text='My Bags' className='border-b-2 flex-1  pb-4 border-text text-text  lg:text-[40px]' />
                        <div className="w-[312px] lg:flex hidden"></div>
                    </div>
                    {
                        isProduct ?
                            <div className="mt-[50px] justify-start flex lg:flex-row flex-col gap-8  ">
                                <div className="flex-1">
                                    <MainBagProducts />
                                </div>
                                <div className="">
                                    <RightOrderSummary />
                                </div>
                            </div>
                            :
                            <div className="flex justify-center my-10">
                                <NoProducts title='YOUR SHOPPING BAG IS EMPTY' />
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Main