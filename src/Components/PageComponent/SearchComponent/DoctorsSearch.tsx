import React from 'react'
import SearchTitle from '@/Components/UiComponent/SearchTitle'
import { searchDataTypes } from '@/DataSource/Types'
import Link from 'next/link'
import Image from 'next/image'

const DoctorsSearch = ({ fetchData }: { fetchData: searchDataTypes }) => {
    return (
        <div className='w-full'>
            {fetchData && fetchData?.doctors?.length >= 1 ?
                <div className="w-full">
                    <SearchTitle dataLength={fetchData?.doctors?.length} name='Doctors' />
                    <div className="w-full">
                        {
                            fetchData?.doctors?.map((item, index) => {
                                return (
                                    <Link href={`/services/${item?.slug}`} key={index} className='flex md:flex-row flex-col 
                                    w-full mt-5 bg-gray-50 md:py-4 py-2 md:px-8 items-start md:items-center justify-between px-4 gap-4'>
                                        <div className="w-[60px] h-[60px] ">
                                            <Image width={200} height={200} src={item?.image?.file || ""} loading='lazy'
                                                className='w-full rounded-full h-full object-cover' alt={item?.name} />
                                        </div>
                                        <div className="flex-1 flex items-center">
                                            <div className="flex flex-col items-center">
                                                <h2 className='text-[18px] font-semibold mb-1 text-zinc-700'>{item?.name}</h2>
                                                <div className='text-gray-500 w-full lg:w-[80%] mr-auto '>{item?.department}</div>
                                            </div>
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

export default DoctorsSearch