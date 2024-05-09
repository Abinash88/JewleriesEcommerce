import { Button } from '@/Components/Ui/Button'
import { SeconedHead } from '@/Components/Ui/Texts'
import Link from 'next/link'
import React from 'react'

const NoProducts = () => {
    return (
        <div className='flex flex-col w-full justify-center gap-5'>
            <SeconedHead text='YOUR SHOPPING BAG IS EMPTY' />
            <Link href={'/product'} className=' flex justify-center'>
                <Button variant={'default'} className='font-["Roboto"] font-normal'>
                    CONTINUE SHOPPING
                </Button>
            </Link>
        </div>
    )
}

export default NoProducts