
import React from 'react'
import { GoChevronRight } from "react-icons/go";

const TopBreadCrumps = () => {
    return (
        <div className='w-full'>
            <div className="w-full flex items-start gap-1 py-[30px]">
                <div className="text-teal-800 text-sm font-normal font-['Epilogue'] leading-snug">Home</div>
                <div className="w-4 h-4 relative" >
                    <GoChevronRight className='w-full h-full' />
                </div>
                <div className="text-teal-800 text-sm font-normal font-['Epilogue'] leading-snug">Doctors Available</div>
                <div className="w-4 h-4 relative" >
                    <GoChevronRight className='w-full h-full' />
                </div>
                <div className="text-zinc-700 text-sm font-normal font-['Epilogue'] leading-snug">Detail</div>
            </div>
        </div>
    )
}

export default TopBreadCrumps