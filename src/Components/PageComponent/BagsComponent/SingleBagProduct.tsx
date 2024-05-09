import Texts, { SmallHead } from '@/Components/Ui/Texts'
import { descriptionData } from '@/DataSource/StaticData';
import Image from 'next/image'
import React from 'react'
import { CiHeart, CiStar } from 'react-icons/ci'
import { CiTrash } from "react-icons/ci";

const SingleBagProduct = ({ item }: { item: any }) => {
    return (
        <div className="flex flex-col border-b-2 border-text">
            <div className=" h-auto w-full md:flex-row flex-col group overflow-hidden transform 
         cursor-pointer  transition-all duration-300 gap-2   flex items-start ">
                <div className=" w-full sm:w-[220px]  relative h-[200px] mb-3">
                    <Image src={item?.image} alt='' className='size-full object-cover' width={500} height={500} />
                </div>
                <div className="flex-1 flex  flex-col w-full items-start gap-2">
                    <div className="flex w-full justify-between">
                        <div className="">
                            <div className="px-1 ">
                                <SmallHead text={item?.name} className='text-text font-["Roboto"] lg:text-[32px] ' />
                            </div>
                        </div>
                        <div className="">
                            <SmallHead text={`Rs. ${item?.price}`} className='text-text font-["Roboto"] md:text-[18px]' />
                        </div>
                    </div>
                    <div className="flex flex-col w-full justify-between gap-4">

                        <div className="flex items-center  w-full gap-1">
                            <Texts text={`Rating:`} className='text-text md:text-[12px] font-["Roboto"] ' />
                            {Array.from({ length: 5 }, (item, index) => {
                                return (<CiStar key={index} className='text-text text-[15px]' />)
                            })
                            }
                        </div>
                        <div className="md:w-full flex flex-col ">
                            <Texts text='Description:' className='font-["Roboto"] text-text ' />
                            <ul className='flex flex-col gap-2 w-full mt-4'>
                                {
                                    descriptionData?.map((item, index) => {
                                        return (<li key={index} className='flex items-center justify-between md:justify-start w-full md:w-auto '>
                                            <span className='font-["Roboto"] text-text text-[11px] md:text-[12px] md:w-[150px]'>{item?.name}</span>
                                            <span className='flex-1 md:hidden border-b border-dashed px-1'></span>
                                            <span className='font-["Roboto"] text-text text-[11px] md:text-[12px]'>{item?.value}</span>
                                        </li>)
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 flex w-full  justify-between">
                <div className="text-[16px] flex ">
                    <button type='button' className='flex text-[24px] items-center justify-center font-["Roboto"] border border-text text-center  size-[30px]'>
                        <span>-</span>
                    </button>
                    <div className='flex items-center bg-gray-100 justify-center font-["Roboto"] border border-text text-center  size-[30px]'>
                        <span>0</span>
                    </div>
                    <button type='button' className='flex text-[24px] items-center justify-center font-["Roboto"] border border-text text-center  size-[30px]'>
                        <span>+</span>
                    </button>
                </div>
                <div className="flex items-center gap-4">
                    <button className='flex items-center gap-2  text-[12px] '>
                        <CiHeart className='text-[15px]  text-gray-500' />
                        <span className='font-["Roboto"]'>Save to wislist</span>
                    </button>
                    <button className='flex items-center gap-2  text-[12px] '>
                        <CiTrash className='text-[15px] text-gray-500' />
                        <span className='font-["Roboto"]'>Remove</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SingleBagProduct