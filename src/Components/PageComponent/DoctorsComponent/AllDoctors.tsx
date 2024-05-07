"use client"

import React, { useEffect, useState } from 'react'
import SearchDoctors from './SearchDoctors'
import Image from 'next/image'
import Link from 'next/link'
import { DoctorTypes, MainDoctorDetailType } from '@/DataSource/Types'
import Skeleton from 'react-loading-skeleton'

const AllDoctors = ({ fetchData }: { fetchData: DoctorTypes }) => {

    const [search, setSearch] = useState<string>("");
    const [allDoctors, setAllDoctors] = useState<MainDoctorDetailType[]>()

    useEffect(() => {
        const searchDoctors = fetchData?.doctors?.filter((data) => data?.name.toLowerCase().includes(search.toLowerCase()) ||
            data?.department.toLowerCase().includes(search.toLowerCase()));
        setAllDoctors(searchDoctors);
        //eslint-disable-next-line
    }, [search])




    return (
        <div className='w-full'>
            <div className="w-full">
                <SearchDoctors search={search} setSearch={setSearch} />
                <div className="doctorsGrid md:place-items-start place-items-center mt-[40px]">
                    {allDoctors ?
                        allDoctors?.map((item, index) => {
                            return (
                                <div key={index} className=" h-auto hover:shadow transform w-full cursor-pointer  transition-all duration-300 p-2.5 rounded-xl border border-zinc-300 flex-col justify-start items-start gap-2.5 inline-flex">
                                    <Link href={`/doctor-detail/${item?.slug}`} className='w-full'>
                                        <div className="justify-center items-center gap-3 w-full inline-flex">
                                            <div className="md:w-[92px] w-[140px] md:h-[103px] relative bg-gray-100 rounded">
                                                <Image className="md:w-[88px] w-full object-cover h-[103px] left-[2px] top-0"
                                                    width={88} height={103} src={item?.image?.file || ""} alt='doctors' />
                                            </div>
                                            <div className="flex-col justify-start flex-1 w-full  items-start gap-2.5 inline-flex">
                                                <div className=" flex-col justify-start items-start flex">
                                                    <h4 className="text-zinc-900 hover:underline text-xs font-bold font-['Epilogue'] leading-relaxed">
                                                        {item?.name}
                                                    </h4>
                                                    <h6 className="text-gray-600 my-[4px] text-[10px] font-normal font-['Inter'] leading-none">
                                                        {
                                                            item?.degrees?.map((item, index) => {
                                                                return (
                                                                    <div key={index} className="">
                                                                        {item?.name}
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </h6>
                                                    <h6 className=" left-0 top-[40px] text-gray-600 text-[10px] font-normal font-['Inter'] leading-[10px]">
                                                        {item?.position}
                                                    </h6>
                                                </div>
                                                <div className="justify-start items-start gap-1 inline-flex">
                                                    <div className="h-7 px-2.5 py-1 bg-emerald-50 rounded justify-center items-center flex">
                                                        <div><span className="text-zinc-900 text-xs font-normal font-['Ek Mukta'] leading-tight">रु</span><span className="text-zinc-900 text-xs font-normal font-['Inter'] leading-tight">. </span><span className="text-zinc-900 text-xs font-medium font-['Inter']  leading-tight">{item?.visting_charge}</span></div>
                                                    </div>
                                                    <div className="px-2.5 py-1 bg-emerald-50 h-7 rounded justify-start items-center gap-1 flex">
                                                        <div className="w-4 h-4 relative" />
                                                        <h5 className="text-zinc-900 text-xs font-medium font-['Inter'] leading-tight">{item?.experience}+ Years</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                        :
                        <div className="flex items-center">
                            <Skeleton height={132} style={{ display: "flex", }} count={4} width={354} />
                            <Skeleton height={132} style={{ display: "flex", }} count={4} width={354} />
                            <Skeleton height={132} style={{ display: "flex", }} count={4} width={354} />
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}

export default AllDoctors