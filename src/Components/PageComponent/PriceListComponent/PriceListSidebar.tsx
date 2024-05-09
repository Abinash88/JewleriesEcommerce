import Image from 'next/image'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Bacakground from "../../../Assests/Home/6967926.jpg"

const PriceListSidebar = () => {
    return (
        <div className='w-full h-[531px]'>
            {
                true ? <Image src={Bacakground} width={500} height={700} alt='surgery image' className='w-full h-full rounded-lg object-center object-cover' />
                    :
                    < Skeleton style={{ height: "100%" }} />
            }
        </div>
    )
}

export default PriceListSidebar