import Texts, { MainTextHead, SeconedHead } from '@/Components/Ui/Texts'
import Image from 'next/image'
import image from "../../../Assests/Home/Hands.png"
import React from 'react'


const MainAbout = async () => {




    return (

        <div className="w-full  py-[40px] flex items-center  ">

            <div className=" w-[95%] mx-auto flex-col mb-5 gap-[30px] md:w-[70%] flex justify-center">

                <div className="mb-6">
                    <MainTextHead className='w-full md text-text-foreground lg:text-[40px] pb-3 border-b-2 border-text-foreground' text='ABOUT US' />
                </div>
                <div className=" w-full h-full flex flex-col items-center gap-5">
                    <div className="flex items-start w-full gap-8">
                        <div className="">
                            <SeconedHead text='History' className='text-text-foreground font-["Roboto"] mb-2 text-left' />
                            <Texts text='Jewelfy sprouted from the close bond of three Kathmandu-based friends, united by their love for quality jewelry. Fueled by a shared vision to offer unique yet accessible pieces, they embarked on a journey to redefine online jewelry retailing. With a commitment to craftsmanship and customer satisfaction, Jewelfy emerged as a beacon of style and affordability in the bustling world of e-commerce.' className=' font-["Roboto"] leading-[150%] font-normal  tracking-3' />
                        </div>
                        <Image src={image} className='md:w-[285px] object-cover md:h-[240px] ' alt='' />
                    </div>

                    <div className="flex items-start w-full gap-8">
                        <div className="">
                            <SeconedHead text='History' className='text-text-foreground font-["Roboto"] mb-2 text-left' />
                            <Texts text='Jewelfy sprouted from the close bond of three Kathmandu-based friends, united by their love for quality jewelry. Fueled by a shared vision to offer unique yet accessible pieces, they embarked on a journey to redefine online jewelry retailing. With a commitment to craftsmanship and customer satisfaction, Jewelfy emerged as a beacon of style and affordability in the bustling world of e-commerce.' className=' font-["Roboto"] leading-[150%] font-normal  tracking-3' />
                        </div>
                        <Image src={image} className='md:w-[285px] object-cover md:h-[240px] ' alt='' />
                    </div>
                </div>
            </div>
        </div>

    )

}



export default MainAbout
