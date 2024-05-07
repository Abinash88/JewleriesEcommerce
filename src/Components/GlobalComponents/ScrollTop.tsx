import Link from 'next/link'
import React from 'react'
import { FaChevronUp } from 'react-icons/fa'

const ScrollTop = () => {
    return (
        <Link href={`#Header`} className='h-[50px] cursor-pointer hover:bg-gray-900 rounded-md flex items-center justify-center
          bg-green-700 fixed right-10 bottom-10 w-[50px] '>
            <FaChevronUp className='text-white text-xl' />
        </Link>
    )
}

export default ScrollTop