"use client"

import React, { useState } from 'react'
import SearchDoctors from './SearchDoctors'
import Link from 'next/link'
import { CatagoryData, CatagoryProduct } from '@/DataSource/StaticData'
import Image from 'next/image'
import { SmallHead } from '@/Components/Ui/Texts'
import { FaHeart, FaStreetView } from 'react-icons/fa'
import { FaRegHeart } from "react-icons/fa";
import { FaBagShopping } from 'react-icons/fa6'
import { useSearchParams } from 'next/navigation'

const AllDoctors = () => {
    const params = useSearchParams();
    const catagoryId = params.get('')

    const [toggle, setToggle] = useState(false);

    return (
        <div className='w-full'>
            <div className="w-full flex items-start">
                <SearchDoctors />
                <div className=" flex-1 md:place-items-start gap-4 grid grid-cols-4 place-items-center mt-[40px]">
                    {
                        CatagoryProduct?.map((item, index) => {
                            if (catagoryId && !item?.catagory.toLowerCase().includes(catagoryId?.toLowerCase())) return
                            return (
                                <div key={index} className=" h-auto  hover:shadow transform  cursor-pointer  transition-all duration-300   flex-col justify-start items-start ">
                                    <div className="w-[220px] relative h-[200px] mb-3">
                                        <div className="absolute w-full h-full">
                                            <button className='absolute top-2 right-2' onClick={() => { setToggle(!toggle) }}>
                                                {
                                                    toggle ?
                                                        <FaHeart className='text-[17px] text-primary ' />
                                                        :
                                                        <FaRegHeart className='text-[17px] text-white' />
                                                }
                                            </button>
                                            <div className="flex absolute bottom-2 right-2 gap-2">
                                                <FaStreetView className='text-[17px] text-white' />
                                                <FaBagShopping className='text-[17px] text-white' />

                                            </div>
                                        </div>
                                        <Image src={item?.image} alt='' className='size-full object-cover' width={500} height={500} />
                                    </div>
                                    <div className="px-1 ">
                                        <SmallHead text={item?.name} className='text-text text-[18px]' />
                                        <SmallHead text={`Rs. ${item?.price}`} className='text-text text-[18px]' />
                                    </div>
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        </div >
    )
}

export default AllDoctors