import React from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { Cn } from '../lib/Helper'

const SliderBtn = ({ style, next, prev }: { style: string, next: () => void, prev: () => void }) => {
    return (
        <div className="w-[300px] mt-[30px] ml-auto flex items-center justify-end gap-5">
            <div onClick={() => { prev() }} className={Cn(`w-[52px] h-[52px] flex items-center justify-center relative bg-white rounded-[26px] border cursor-pointer transition-all duration-300 hover:bg-teal-700 hover:text-white border-teal-700 ${style}`)}>
                <GoChevronLeft className='w-[31px] h-[31px]' />
            </div>
            <div onClick={() => { next() }} className={Cn(`${style} w-[52px] h-[52px] flex items-center justify-center relative bg-white rounded-[26px] border cursor-pointer transition-all duration-300 hover:bg-teal-700 hover:text-white border-teal-700`)}>
                <GoChevronRight className='w-[31px] h-[31px]' />
            </div>
        </div>
    )
}

export default SliderBtn