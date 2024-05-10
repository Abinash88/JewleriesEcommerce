import React from 'react'
const MainProfileForm = dynamic(() => import("./MainProfileForm"))
import dynamic from 'next/dynamic'
import { MainTextHead } from '@/Components/Ui/Texts'

const MainProfile = async () => {

    return (
        <div className='w-full'>
            <div className=' mt-[60px] max_width flex gap-10 flex-col items-center'>
                <div className="flex w-full md:w-[80%]  gap-8">
                    <MainTextHead text='MY PROFILE' className='border-b-2 flex-1 w-full pb-4 border-primary text-text  lg:text-[40px]' />
                </div>
                <div className="flex-1 w-full md:w-[80%] mb-[56px]">
                    <MainProfileForm />
                </div>
            </div>
        </div>
    )
}

export default MainProfile