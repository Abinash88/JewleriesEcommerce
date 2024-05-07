"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Emergency = ({ numbers }: { numbers:any }) => {
    const findAbmulance = numbers.find((state) => state.name.toLowerCase().includes("ambulance"));
    const findOffice = numbers.find((state) => state.name.toLowerCase().includes("office"));
    return (
        <div>
            <div className="flex items-center justify-center lg:w-auto  gap-[10px] lg:gap-[10px]">
                <Link title={findOffice?.name} className={`  hover:bg-red-100 p-[7px] rounded-full transition5sec`}
                    href={`tel:${findOffice?.number}`}>
                    <Image src={''} className='lg:w-[20px] lg:h-[20px] md:h-[30px] w-[25px] h-[25px] md:w-[30px] object-cover' alt='phone-icon' />
                </Link>
                <Link title={findAbmulance?.name} className={` p-[7px] hover:bg-green-100 rounded-full transition5sec`}
                    href={`tel:${findAbmulance?.number}`}>
                    <Image src={''} className='lg:w-[20px] lg:h-[20px] md:h-[30px] w-[25px] h-[25px] md:w-[30px] object-cover' alt='phone-icon' />
                </Link>
            </div>
        </div>
    )
}

export default Emergency