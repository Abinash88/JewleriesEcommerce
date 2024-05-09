import { MainTextHead } from '@/Components/Ui/Texts';
import React from 'react'
import MainForm from './MainForm';
import Link from 'next/link';
import { Button } from '@/Components/Ui/Button';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";


const AccountForm = async () => {

    return (
        <div className='w-[90%] md:w-[80%] py-[60px] max_width'>
            <MainTextHead text='Create Account' className='underline font-["Roboto"] text-text  lg:text-[40px]' />
            <div className="mt-8 flex flex-col gap-4">
                <MainForm />
                <div className="w-full justify-start flex-col mt-5 flex gap-4 items-center">
                    <Button variant={'outline'} className='gap-2 w-[220px] bg-transparent'>
                        <FcGoogle className='text-[20px]' />
                        <span className='font-["Roboto"] text-text '>Login with Google</span>
                    </Button>
                    <Button variant={'outline'} className='gap-2 w-[220px] bg-transparent '>
                        <FaFacebook className='text-blue-500 text-[20px]' />
                        <span className='font-["Roboto"] text-text '>Login with Facebook</span>
                    </Button>
                </div>
                <p className='text-center text-text font-["Roboto"]'> have a account login <Link href={'/login'} className='underline  font-["Roboto"] text-text'>here</Link></p>
            </div>
        </div>
    )
}

export default AccountForm;