import { SmallHead } from '@/Components/Ui/Texts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FaBagShopping } from 'react-icons/fa6'
import { TbArrowsDoubleSwNe } from "react-icons/tb";

const SingleProduct = ({ item, index }: { item: any, index: number }) => {
    return (
        <div key={index} className=" w-full bg-white sm:w-[220px] group 
        hover:shadow transform  cursor-pointer  transition-all duration-300 flex-col justify-center items-start ">
            <div className=" w-full sm:w-[220px] relative h-[200px] mb-2">
                <div className="absolute w-full h-full">
                    <button className='absolute top-2 right-2'>
                        <FaRegHeart className='text-[17px] text-text' />
                    </button>
                    <div className="flex  absolute bottom-2  p-1 shadow-lg right-2 group-hover:md:right-2  gap-2">
                        <button type='button'>
                            <TbArrowsDoubleSwNe className='text-[17px] text-text' />
                        </button>
                        <button title='Add to Bag' type='button'>
                            <FaBagShopping className='text-[17px] text-text' />
                        </button>
                    </div>
                </div>
                <Image src={item?.image} alt='' className='size-full object-cover' width={500} height={500} />
            </div>
            <Link href={`/product-detail/${'asfd'}`} className=" w-full py-1">
                <SmallHead text={item?.name} className='text-text w-full  ml-2  hover:underline md:text-[18px]' />
                <SmallHead text={`Rs. ${item?.price}`} className='text-text  ml-2  w-full md:text-[18px]' />
            </Link>
        </div>
    )
}

export default SingleProduct