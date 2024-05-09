import Texts, { SeconedHead } from '@/Components/Ui/Texts'
import Image from 'next/image'
import React from 'react'
import Rings from "../../../Assests/productRing.png"

const RightOrderSummary = () => {
  return (
    <div className='wfull'>
      <div className=" w-[312px] border font-['Roboto'] border-primary ">
        <div className="h-[10px]  w-full bg-primary"></div>
        <div className="py-5">
          <SeconedHead text='ORDER SUMMARY' className='lg:text-[20px] text-text mb-2' />
          <div className="w-full ">
            <div className="flex items-center gap-2 py-4 px-4">
              <Image src={Rings} alt='' className='w-[70px] h-[73px]' width={200} height={200} />
              <div className="flex flex-col gap-2">
                <Texts text='Peral Open Hoop Earrings' className=" font-['Roboto'] md:text-[15px]" />
                <div className="flex text-[12px] items-center gap-1">
                  <span className=" font-['Roboto']">Rs. 580</span>
                  <span className=" font-['Roboto']"> x </span>
                  <span className=" font-['Roboto']">1</span>
                  <span className=" font-['Roboto']">=</span>
                  <span className=" font-['Roboto']">580</span>
                </div>
              </div>
            </div>
            <div className="border-t py-4  border-primary">
              <div className="px-4 text-[12px] flex gap-5 items-start">
                <div className="flex flex-col gap-2">
                  <span className=" font-['Roboto']">Sub-total</span>
                  <span className=" font-['Roboto']">Dilivery Charge</span>
                  <span className=" font-['Roboto']">Total</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className=" font-['Roboto']">Rs. 580</span>
                  <span className=" font-['Roboto']">Rs. 100</span>
                  <span className=" font-['Roboto']">Rs. 600</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default RightOrderSummary