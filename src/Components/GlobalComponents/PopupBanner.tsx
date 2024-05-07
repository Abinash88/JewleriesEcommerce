"use client"

import Image from 'next/image'
import React, { useEffect, useMemo } from 'react'
import { PopupBannerTypes } from '@/DataSource/Types'
import { HiOutlineXMark } from "react-icons/hi2";
import Skeleton from 'react-loading-skeleton';
import { Cn } from '../lib/Helper'

const PopupBanner = ({ setEnablePopup, enablePopup, className, popupData }
    :
    {
        setEnablePopup: React.Dispatch<React.SetStateAction<boolean>>;
        enablePopup: boolean;
        className?: string;
        popupData: PopupBannerTypes[];
    }) => {


    console.log(enablePopup);

    const offPopup = () => {
        sessionStorage.setItem("popup", JSON.stringify(false))
        setEnablePopup(false);
    }


    return (
        <div className={Cn(`w-full fixed top-0 left-0  justify-center h-screen flex z-50 items-center ${className}`)}>
            <div onClick={() => { offPopup() }} className="w-full absolute h-full bg-gray-700/50  "></div>
            <div className="md:w-[60%] w-[95%] h-auto lg:h-[70%] relative shadow-xl   rounded-md">
                <HiOutlineXMark onClick={() => { offPopup() }} className='md:text-[55px] text-[40px] p-2 z-50 rounded-full bg-slate-600/60 
            hover:scale-110 transform transition-all duration-300 cursor-pointer absolute top-3 right-3 text-white ' />
                {!popupData ?
                    <Skeleton height={700} />
                    :
                    <Image width={1500} height={1500} className='w-full rounded-md h-full relative z-10 object-cover'
                        src={popupData?.[0]?.image?.file || ""} alt={popupData?.[0]?.title || ""} />
                }
            </div>
        </div>
    )
}

export default PopupBanner