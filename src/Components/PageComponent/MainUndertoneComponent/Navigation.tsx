"use client"

import { PostsDataTypes } from '@/DataSource/Types'
import Link from 'next/link'
import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


const Navigation = ({ fetchData, getParams }: { fetchData: PostsDataTypes, getParams: string | undefined }) => {

    let page = getParams ? parseInt(getParams) : 1

    const getPageNumber = (page: string) => {
        const splitData = page?.split("page=")[1]
        return splitData;
    }

    const totalData = fetchData?.count && parseInt(fetchData?.count);
    const dataPerPage: number = 10
    const totalPages = totalData && Math.ceil(totalData / dataPerPage)

    const pageNumbers: number[] = [];

    for (let i: number = page - 3; i <= page + 3; i++) {
        if (i < 1) continue;
        if (totalPages && i > totalPages) break;
        pageNumbers.push(i);
    }



    return (
        <div className='w-full flex justify-center mb-[60px]'>
            <div className="flex items-center  gap-[7px]">
                {
                    fetchData && fetchData?.previous ?
                        <Link href={getPageNumber(fetchData?.previous) ? `media-center/?page=${getPageNumber(fetchData?.previous)}` : `/media-center`} className={` cursor-pointer group transition3sec hover:bg-teal-800 flex items-center justify-center rounded-full w-[42px] h-11`}>
                            <FaChevronLeft className="text-teal-800 text-base text-[20px]  font-normal group-hover:text-white font-['Inter'] leading-relaxed" />
                        </Link>
                        :
                        <div className={` cursor-pointer group transition3sec hover:bg-teal-800 flex items-center justify-center rounded-full w-[42px] h-11`}>
                            <FaChevronLeft className="text-teal-800 text-base text-[20px]  font-normal group-hover:text-white font-['Inter'] leading-relaxed" />
                        </div>
                }

                {
                    //@ts-ignore
                    pageNumbers?.map((item, index) => {
                        return (
                            <Link scroll={false} href={item === 1 ? '/media-center' : `/media-center/?page=${item}`} key={item} className={`${!page && item === 0 ? "border-2      border-teal-800" : page && page === item ? "border-2 border-teal-800" : ""} 
                                cursor-pointer group transition3sec hover:bg-teal-800 flex items-center justify-center rounded-full w-[42px] h-11`}>
                                <span className="text-teal-800 text-base font-normal group-hover:text-white font-['Inter'] leading-relaxed">
                                    {item}
                                </span>
                            </Link>
                        )
                    })
                }
                {
                    fetchData && fetchData?.next ?
                        <Link href={`/media-center/?page=${getPageNumber(fetchData?.next)}`} className={` cursor-pointer group transition3sec hover:bg-teal-800 flex items-center justify-center rounded-full w-[42px] h-11`}>
                            <FaChevronRight className="text-teal-800 text-base text-[20px]  font-normal group-hover:text-white font-['Inter'] leading-relaxed" />
                        </Link>
                        :
                        <div className={` cursor-pointer group transition3sec hover:bg-teal-800 flex items-center justify-center rounded-full w-[42px] h-11`}>
                            <FaChevronRight className="text-teal-800 text-base text-[20px]  font-normal group-hover:text-white font-['Inter'] leading-relaxed" />
                        </div>
                }

            </div>

            <div className="">

            </div>
        </div>
    )
}

export default Navigation