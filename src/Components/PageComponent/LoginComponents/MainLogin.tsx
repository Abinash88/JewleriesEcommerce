import React from 'react'
import TopHeaders from '../CatagoryComponent/TopHeaders'
import AccountForm from '../AccountComponent/AccountForm'
import image from "../../../Assests/Products/others.png"
import MainLoginForm from './MainLoginForm'
import { MainTextHead } from '@/Components/Ui/Texts'
import Link from 'next/link'

const MainLogin = () => {
    return (
        <div className='w-full  max_width'>
            <h3 className='w-full'>
                <TopHeaders BackgroundImage={image} style='md:h-auto h-[80px]' />
            </h3>
            <div className="w-full py-10 flex flex-col gap-10">
                <MainTextHead text='Login Account' className='underline font-["Roboto"] text-text  lg:text-[40px]' />
                <MainLoginForm />
                <p className='text-center text-text font-["Roboto"]'>Do not have account signup <Link href={'/account'} className='underline  font-["Roboto"] text-text'>here</Link></p>
            </div>
        </div>
    )
}

export default MainLogin