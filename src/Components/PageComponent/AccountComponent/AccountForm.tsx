import { MainTextHead } from '@/Components/Ui/Texts';
import React from 'react'
import MainForm from './MainForm';
import Link from 'next/link';

const AccountForm = async () => {

    return (
        <div className='w-[90%] md:w-[80%] py-[60px] max_width'>
            <MainTextHead text='Create Account' className='underline font-["Roboto"] text-text  lg:text-[40px]' />
            <div className="mt-8 flex flex-col gap-4">
                <MainForm />
                <p className='text-center text-text font-["Roboto"]'> have a account login <Link href={'/login'} className='underline  font-["Roboto"] text-text'>here</Link></p>
            </div>
        </div>
    )
}

export default AccountForm;