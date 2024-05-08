
import Image from 'next/image'
import React from 'react'
import { MainTextHead } from '@/Components/Ui/Texts'
import { Button } from '@/Components/Ui/Button'
import Girl from "../../../Assests/Home/girl_neckles.jpg"

const Explore = async () => {


    return (
        <div className='w-full mb-[40px] '>
            <div className="max_width  flex flex-col gap-[40px]">
                <div className="w-full flex bg-foreground lg:flex-row flex-col gap-[40px] lg:gap-[22px] items-center justify-between">
                    <div className="lg:w-[50%] h-[382px] w-full  flex-1">
                        <Image src={Girl} alt='' className='w-full h-full object-cover ' width={1200} height={1200} />
                    </div>
                    <div className="lg:w-[50%] gap-5 w-full flex flex-col  justify-center relative flex-1">
                        <MainTextHead className=' leading-[140%] text-text-foreground' text='Wanna know if you are a sliver or a gold girly?' />
                        <Button className='w-[140px] before:absolute before:size-full before:bottom-[-10px] before:z-0 before:right-[-10px] bg-primary before:bg-background flex items-center justify-center h-[45px]  mx-auto z-50 relative'>
                            <span className='  my-auto  text-text-foreground text-[15px] font-["Roboto"] relative z-10 '>CLICK HERE</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore