import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const page = () => {
    return (
        <div className='py-[80px] fixed_head_style w-full flex flex-col gap-3 items-center justify-center'>
            <h2 className='text-[80px] lg:text-[120px] w-full text-center text-primary'>404!</h2>
            <h3 className='w-full text-center text-[40px] lg:text-[60px] text-text-foreground font-semibold'>NOT FOUND!</h3>
            <Link className='flex items-center bg-primary hover:bg-green-900 text-white rounded-md gap-2 px-6  lg:px-8 py-2 lg:py-[8px] ' href={"/"}>
                <span>Go Back</span>
                <FaArrowRight className="text-[16px]" />
            </Link>
        </div>
    )
}

export default page