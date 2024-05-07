import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const page = () => {
    return (
        <div className='py-[80px] fixed_head_style w-full flex flex-col gap-3 items-center justify-center'>
            <h2 className='text-[80px] lg:text-[120px] w-full text-center text-red-500'>404!</h2>
            <h3 className='w-full text-center text-[40px] lg:text-[80px] font-semibold'>NOT FOUND!</h3>
            <Link className='flex items-center bg-green-800 hover:bg-green-900 text-white rounded-md gap-2 px-7  lg:px-10 py-2 lg:py-3 ' href={"/"}>
                <span>Go Back</span>
                <FaArrowRight className="text-[20px]" />
            </Link>
        </div>
    )
}

export default page