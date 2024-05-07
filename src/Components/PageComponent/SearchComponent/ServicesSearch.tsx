import React from 'react'
import SearchTitle from '@/Components/UiComponent/SearchTitle'
import { HtmlToText } from '@/Components/lib/Helper'
import { searchDataTypes } from '@/DataSource/Types'
import Link from 'next/link'
import Image from 'next/image'

const ServicesSearch = ({ fetchData }: { fetchData: searchDataTypes }) => {
    return (
        <div className='w-full'>
            {fetchData && fetchData?.services?.length >= 1 ?
                <div className="w-full">
                    <SearchTitle dataLength={fetchData?.services?.length} name='Services' />
                    <div className="w-full">
                        {
                            fetchData?.services?.map((item, index) => {
                                if (!item?.show_on_home)
                                    return (
                                        <Link href={`/services/${item?.slug}`} key={index} className='flex md:flex-row flex-col  mt-5 bg-gray-50 md:py-4 py-2 md:px-8 items-start md:items-center justify-between  px-4 gap-4'>
                                            <div className="w-[60px] h-[60px] ">
                                                <Image width={200} height={200} src={item?.image?.file || ""} className='w-full rounded-full h-full object-cover' alt={item?.name} />
                                            </div>
                                            <div className="flex-1">
                                                <h2 className='text-[18px] font-semibold mb-1 text-zinc-700'>{item?.name}</h2>
                                                <div className='text-gray-500 w-full lg:w-[80%] mr-auto '>{HtmlToText(item?.description?.substring(0, 200))}...</div>
                                            </div>
                                        </Link>
                                    )
                            })
                        }
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}

export default ServicesSearch