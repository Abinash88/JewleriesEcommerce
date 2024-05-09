"use client"

import React, { useState } from 'react'
import FilterCatagory from './FilterCatagory'
import Link from 'next/link'
import { CatagoryData, CatagoryProduct } from '@/DataSource/StaticData'
import Image from 'next/image'
import { SmallHead } from '@/Components/Ui/Texts'
import { FaHeart, FaStreetView } from 'react-icons/fa'
import { FaRegHeart } from "react-icons/fa";
import { FaBagShopping } from 'react-icons/fa6'
import { useSearchParams } from 'next/navigation'
import SingleProduct from './SingleProduct'

const AllCatagory = () => {
    const params = useSearchParams();
    const catagoryId = params.get('')

    const [toggle, setToggle] = useState(false);

    return (
        <div className='w-full'>
            <div className="w-full md:flex-row flex-col flex items-start">
                <FilterCatagory />
                <div className=" flex-1 md:place-items-start gap-4 grid grid-cols-1 sm:grid-cols-2 
                justify-center md:grid-cols-2 lg:grid-cols-3  w-full xl:grid-cols-4 place-items-center mt-[40px]">
                    {
                        CatagoryProduct?.map((item, index) => {
                            if (catagoryId && !item?.catagory.toLowerCase().includes(catagoryId?.toLowerCase())) return
                            return (
                                <SingleProduct item={item} index={index} key={index} />
                            )
                        })

                    }
                </div>
            </div>
        </div >
    )
}

export default AllCatagory