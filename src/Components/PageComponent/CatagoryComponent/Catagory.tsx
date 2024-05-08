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
                                <div key={index} className=" h-auto w-full group hover:shadow transform  cursor-pointer  transition-all duration-300   flex-col justify-start items-start ">
                                    <div className=" w-full sm:w-[220px] relative h-[200px] mb-3">
                                        <div className="absolute w-full h-full">
                                            <button className='absolute top-2 right-2' onClick={() => { setToggle(!toggle) }}>
                                                {
                                                    toggle ?
                                                        <FaHeart className='text-[17px] text-primary ' />
                                                        :
                                                        <FaRegHeart className='text-[17px] text-white' />
                                                }
                                            </button>
                                            <div className="flex  absolute bottom-2 md:right-[-50px] right-2 group-hover:md:right-2 transition-all duration-500 gap-2">
                                                <button type='button'>
                                                    <FaStreetView className='text-[17px] text-white' />
                                                </button>
                                                <button type='button'>
                                                    <FaBagShopping className='text-[17px] text-white' />
                                                </button>

                                            </div>
                                        </div>
                                        <Image src={item?.image} alt='' className='size-full object-cover' width={500} height={500} />
                                    </div>
                                    <Link href={'/single-product'} className="px-1 ">
                                        <SmallHead text={item?.name} className='text-text md:text-[18px]' />
                                        <SmallHead text={`Rs. ${item?.price}`} className='text-text md:text-[18px]' />
                                    </Link>
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        </div >
    )
}

export default AllCatagory