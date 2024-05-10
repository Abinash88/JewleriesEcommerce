"use client"

import React, { useContext, useState } from 'react'
import { MainTextHead } from '@/Components/Ui/Texts';
import RightOrderSummary from '../BagsComponent/RightOrderSummary';
import MainOrderForm from './MainOrderForm';
import PopupMessage from '@/Components/Ui/PopupMessage';
import { MyContext } from '@/Components/Context/Main';

export interface ToggleTypes {
  toggle: boolean;
  popupType: 'SUCCESS' | 'CONFIRM' | 'FORM' | 'UPDATE'
}

const MainOrderBox = () => {
  const context = useContext(MyContext)

  return (
    <div className='w-full'>
      <div className="w-full mt-10 flex flex-col gap-[35px]">
        {context?.togglePopup.toggle && <PopupMessage />}
        <div className="flex flex-1 flex-col">
          <div className="flex gap-8">
            <MainTextHead text='My Order' className='border-b-2 flex-1  pb-4 border-text text-text  lg:text-[40px]' />
            <div className="w-[312px] lg:flex hidden"></div>
          </div>
          <div className="my-[50px] justify-start flex lg:flex-row flex-col gap-8 ">
            <div className="flex-1">
              <MainOrderForm />
            </div>
            <div className="">
              <RightOrderSummary hideCheckout />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainOrderBox