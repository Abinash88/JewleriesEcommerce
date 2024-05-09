import { Cn } from '@/Components/lib/Helper'
import Image, { StaticImageData } from 'next/image'
import React from 'react'


const TopHeaders = ({ BackgroundImage, style }: { BackgroundImage: StaticImageData, style?: string }) => {

    return (
        <div className={Cn(` w-[90%]  mx-auto relative   ${style}`)}>
            <Image src={BackgroundImage} alt='background image' className='w-full object-cover  h-full' />
        </div>
    )
}

export default TopHeaders
