'use client'


import Texts, { MainTextHead, SeconedHead } from '@/Components/Ui/Texts'
import Image from 'next/image'
import image from "../../../Assests/Home/shortHairGirl.jpg"
import React, { useState } from 'react'
import { Button } from '@/Components/Ui/Button'
import { Cn } from '@/Components/lib/Helper'


const MainAbout = () => {

    const [toggleAbout, setToggleAbout] = useState(false);

    return (

        <div className="w-full  py-[40px] flex items-center  ">

            <div className=" w-[95%] mx-auto flex-col items-center mb-5 gap-[30px] lg:w-[70%] flex justify-center">

                <div className="mb-10 w-full">
                    <MainTextHead className='w-full md text-text-foreground lg:text-[40px] pb-3 border-b-2 border-text-foreground' text='ABOUT US' />
                </div>
                <div className=" w-full h-full flex flex-col items-center gap-5">
                    <div className="flex items-start md:flex-row flex-col w-full gap-8">
                        <div className="">
                            <SeconedHead text='History:' className='text-text-foreground font-["Roboto"] mb-2 text-left' />
                            <Texts text='Jewelfy sprouted from the close bond of three Kathmandu-based friends, united by their love for quality jewelry. Fueled by a shared vision to offer unique yet accessible pieces, they embarked on a journey to redefine online jewelry retailing. With a commitment to craftsmanship and customer satisfaction, Jewelfy emerged as a beacon of style and affordability in the bustling world of e-commerce.' className=' font-["Roboto"] leading-[170%] font-normal  tracking-3' />
                        </div>
                        <Image src={image} className='md:w-[285px] object-cover md:h-[290px] ' alt='' />
                    </div>

                    <div className="flex items-start md:flex-row flex-col w-full gap-8">
                        <div className="">
                            <SeconedHead text='Our Vision:' className='text-text-foreground font-["Roboto"] mb-2 text-left' />
                            <Texts text='Jewelfy sprouted from the close bond of three Kathmandu-based friends, united by their love for quality jewelry. Fueled by a shared vision to offer unique yet accessible pieces, they embarked on a journey to redefine online jewelry retailing. With a commitment to craftsmanship and customer satisfaction, Jewelfy emerged as a beacon of style and affordability in the bustling world of e-commerce.' className=' font-["Roboto"] leading-[170%] font-normal  tracking-3' />
                        </div>
                        <Image src={image} className='md:w-[285px] object-cover md:h-[290px] ' alt='' />
                    </div>
                </div>
                <div className={Cn(`size-full fixed inset-0 bg-gray-300 ${toggleAbout ? "" : "hidden"}`)}>
                    <AboutPopupBox setToggleAbout={setToggleAbout} />
                </div>
                <Button onClick={() => { setToggleAbout(!toggleAbout) }} className='' variant={'default'}>
                    Read More
                </Button>
            </div>
        </div>

    )

}



export default MainAbout



export const AboutPopupBox = ({ setToggleAbout }: { setToggleAbout: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div className="size-full flex items-center flex-col   overflow-auto justify-start ">
            <div className=" w-[90%] py-5 mx-auto flex flex-col items-center gap-5">
                <div className="flex items-start md:flex-row flex-col w-full gap-8">
                    <div className="">
                        <SeconedHead text='History:' className='text-text-foreground font-["Roboto"] mb-2 text-left' />
                        <Texts text='Jewelfy sprouted from the close bond of three Kathmandu-based friends, united by their love for quality jewelry. Fueled by a shared vision to offer unique yet accessible pieces, they embarked on a journey to redefine online jewelry retailing. With a commitment to craftsmanship and customer satisfaction, Jewelfy emerged as a  beacon of style and affordability in the bustling world of e-commerce.' className=' font-["Roboto"] leading-[170%] font-normal  tracking-3' />

                    </div>
                </div>

                <div className="flex items-start md:flex-row flex-col w-full gap-8">
                    <div className="">
                        <SeconedHead text='Our Vision:' className='text-text-foreground font-["Roboto"] mb-2 text-left' />
                        <Texts text='Jewelfy sprouted from the close bond of three Kathmandu-based friends, united by their love for quality jewelry. Fueled by a shared vision to offer unique yet accessible pieces, they embarked on a journey to redefine online jewelry retailing. With a commitment to craftsmanship and customer satisfaction, Jewelfy emerged as a beacon of style and affordability in the bustling world of e-commerce.' className=' font-["Roboto"] leading-[170%] font-normal  tracking-3' />
                    </div>
                </div>
            </div>
            <Button onClick={() => { setToggleAbout(false) }} className='font-["Roboto"]' variant={'default'}>
                Back
            </Button>
        </div>

    )
}