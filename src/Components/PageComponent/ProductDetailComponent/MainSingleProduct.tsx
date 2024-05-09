import Image from 'next/image';
import React from 'react'
import product from "../../../Assests/productRing.png"
import Texts, { MainTextHead, SeconedHead } from '@/Components/Ui/Texts';
import { CiStar } from "react-icons/ci";
import { Button } from '@/Components/Ui/Button';
import { descriptionData } from '@/DataSource/StaticData';

const MainSingleProduct = () => {

    return (
        <div className='w-full mb-[32px]'>
            <div className="  flex gap-[36px] lg:flex-row flex-col items-center lg:items-start justify-center lg:justify-between">
                <div className="flex-1 w-[60%] ">
                    <div className="w-full">
                        <Image src={product} alt='' width={250} height={250} className='w-full h-full object-cover bg-gray-50' />
                    </div>
                </div>
                <div className="md:w-[60%]  w-full flex-col  flex items-center lg:items-start relative ">
                    <div className="p-2.5 w-full justify-start items-start gap-2.5 flex-col flex">
                        <MainTextHead text='Pearl Open Hoop Earring' className='font-["Roboto"] text-left lg:text-[40px] text-text' />
                        <Texts text='Rs. 580' className='font-["Roboto"] md:text-[20px]' />
                        <div className="flex items-center justify-start gap-2">
                            <Texts text='Rating:' className='font-["Roboto"] text-[11px] md:text-[12px]' />
                            <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }, (item, index) => {
                                    return (<CiStar key={index} className='text-text text-[18px]' />)
                                })
                                }
                            </div>
                        </div>

                        <Button className='font-["Roboto"] mx-auto w-[230px] md:w-[270px] font-normal my-7 h-[35px]'>
                            ADD TO BAG
                        </Button>
                    </div>
                    <div className="w-full">
                        <Texts text='Description:' className='font-["Roboto"] text-text md:text-[20px]' />
                        <ul className='flex flex-col gap-3 mt-4'>
                            {
                                descriptionData?.map((item, index) => {
                                    return (<li key={index} className='flex items-center '>
                                        <span className='font-["Roboto"] text-text text-[11px] md:text-[12px] w-[150px]'>{item?.name}</span>
                                        <span className='font-["Roboto"] text-text text-[11px] md:text-[12px]'>{item?.value}</span>
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSingleProduct