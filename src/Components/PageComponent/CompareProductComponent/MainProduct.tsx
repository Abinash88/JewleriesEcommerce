import { Button } from '@/Components/Ui/Button'
import { SeconedHead } from '@/Components/Ui/Texts'
import { CatagoryProductTypes } from '@/DataSource/Types'
import Image from 'next/image'
import React from 'react'

const MainProduct = ({ product }: { product: CatagoryProductTypes }) => {
    return (
        <div className='w-full flex flex-col items-center mb-[32px]'>
            <div className=" w-full flex gap-[36px] border border-primary flex-col items-center  justify-center ">
                <div className="flex-1 w-full h-[490px] ">
                    <div className="size-full ">
                        <Image src={product?.image} alt='' width={500} height={500} className='size-full object-cover bg-gray-50' />
                    </div>
                </div>
                <div className=" py-2 w-full flex-col  flex items-center lg:items-start relative ">
                    <div className="p-2.5 w-full  justify-start items-start gap-4 flex-col flex">
                        <SeconedHead text='Name' className='text-left font-["Poly"] ' />
                        <SeconedHead text='Price' className='text-left font-["Poly"] ' />
                        <SeconedHead text='Rate' className='text-left font-["Poly"] ' />
                        <SeconedHead text='Color' className='text-left font-["Poly"] ' />
                        <SeconedHead text='Product Type' className='text-left font-["Poly"] ' />
                    </div>
                </div>
            </div>
            <Button className='font-["Roboto"] mx-auto w-full sm:w-[60%] md:w-[270px] font-normal  h-[35px]'>
                ADD TO BAG
            </Button>
        </div>
    )
}

export default MainProduct