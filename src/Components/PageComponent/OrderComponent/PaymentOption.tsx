import { SeconedHead } from '@/Components/Ui/Texts'
import Image from 'next/image'
import React from 'react'
import Cash from "../../../Assests/Order/cash.png"
import Esewa from "../../../Assests/Order/esewa.png"
import { Button } from '@/Components/Ui/Button'

const PaymentOption = () => {
    return (
        <div className='w-full flex justify-start gap-10 flex-col '>
            <SeconedHead text='*Payment Options' className='text-left text-text' />
            <div className="flex gap-[50px] ">
                <div className="">
                    <span className='text-[18px] '>1.</span>
                    <Image src={Cash} alt='' className='w-[200px] h-[140px] ' width={400} height={400} />
                    <Button variant={'default'} className='w-full'>Cash on Dilivery</Button>
                </div>
                <div className="">
                    <span className='text-[18px] '>2.</span>
                    <Image src={Esewa} alt='' className='w-[200px] h-[140px] ' width={400} height={400} />
                    <Button variant={'default'} className='w-full'>Cash on Dilivery</Button>
                </div>
            </div>
        </div>
    )
}

export default PaymentOption