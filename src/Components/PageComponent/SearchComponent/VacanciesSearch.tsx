import SearchTitle from '@/Components/UiComponent/SearchTitle'
import { HtmlToText } from '@/Components/lib/Helper'
import { searchDataTypes } from '@/DataSource/Types'
import Link from 'next/link'
import React from 'react'

const VacanciesSearch = ({ fetchData }: { fetchData: searchDataTypes }) => {
    return (
        <div className='w-full'>
            {fetchData && fetchData?.vacancies?.length >= 1 ?
                <div className="w-full">
                    <SearchTitle dataLength={fetchData?.vacancies?.length} name='Vacancies' />
                    <div className="w-full">
                        {
                            fetchData?.vacancies?.map((item, index) => {
                                return (
                                    <Link href={`/vacancies/${item?.slug}`} key={index} className='flex md:flex-row flex-col  mt-5 bg-gray-50 md:py-4 py-2 md:px-8 items-start md:items-center justify-between  px-4 gap-4'>
                                        <div className="flex-1">
                                            <h2 className='text-[18px] font-semibold mb-1 text-zinc-700'>{item?.title}</h2>
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

export default VacanciesSearch