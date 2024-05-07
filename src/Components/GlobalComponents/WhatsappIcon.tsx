import Image from 'next/image'
import React from 'react'
import Whatsapp from "../../Assests/whatsapp.png"
import Link from 'next/link'
import { fetchGetRequest } from '../lib/Helper'

const WhatsappIcon = async () => {
    const numbers = await fetchGetRequest({ endpoint: 'important-numbers/' })
    // const findWhatsapp = numbers.find((item) => item?.name.toLowerCase().includes('whatsapp'));
    return (
        <div className='fixed bottom-10 w-[70px] h-[70px] drop-shadow-xl hover:-translate-y-2 transition-all duration-500 z-50 right-8'>
            {/* <Link href={`https://wa.me/${?.number}`} target='_blank' className={`w-full h-full `}>
                <Image src={Whatsapp} className='w-full h-full' width={200} height={200} alt='whatsapp icon' />
            </Link> */}
        </div>
    )
}


export default WhatsappIcon