
import Image from 'next/image'
import React from 'react'
import { MainTextHead } from '@/Components/Ui/Texts'
import { Button } from '@/Components/Ui/Button'
import GirlHand from "../../../Assests/Home/Hands.png"
import Link from 'next/link'

const Explore = async () => {


    return (
        <div className='w-full mb-[40px] '>
            <div className="max_width  flex flex-col gap-[40px]">
                <div className="w-full flex bg-foreground lg:flex-row flex-col gap-[40px] lg:gap-[22px] items-center justify-between">
                    <div className="lg:w-[50%] h-[382px] w-full relative flex-1">
                        <div className="absolute inset-0 size-full bg-[#54675363] z-20"></div>
                        <Image src={GirlHand} alt='' className='w-full h-full object-cover ' width={1200} height={1200} />
                    </div>
                    <div className="lg:w-[50%] gap-5 w-full flex flex-col items-center lg:mb-0 mb-7 justify-center px-4 relative flex-1">
                        <MainTextHead className=' leading-[140%] md text-text-foreground' text='Wanna know if you are a sliver or a gold girly?' />

                        <div className="relative w-[100px] md:w-[140px]  mx-auto">
                            <Link href={'/catagory'} className='relative w-full hover:text-white font-roboto text-[13px] md:text-[15px] text-text-foreground
                             bg-primary flex items-center gro justify-center h-[35px] md:h-[45px] z-20 mx-auto'>
                                CLICK HERE
                            </Link>
                            <span className='absolute w-full h-full bottom-[-7px] right-[-7px] bg-background z-0'></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore