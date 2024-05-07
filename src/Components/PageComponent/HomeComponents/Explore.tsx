
import Image from 'next/image'
import React from 'react'
import { DepartmentTypes } from '@/DataSource/Types'
import Skeleton from 'react-loading-skeleton'
import { fetchGetRequest } from '@/Components/lib/Helper'
import Link from 'next/link'

const Explore = async () => {

    const fetchData: DepartmentTypes = await fetchGetRequest({ endpoint: "department/" });

    return (
        <div className='w-full '>
            <div className="max_width py-[40px] flex flex-col gap-[40px]">
                <div className="flex justify-center  w-full  flex-col gap-2 lg:items-center">
                    {fetchData ?
                        <h3 className="text-zinc-900 text-3xl font-bold text-left lg:text-center font-['Epilogue'] leading-[140%]">
                            Explore our Centres of Clinical Excellence</h3>
                        :
                        <Skeleton height={40} width={500} />
                    }
                    {fetchData ?
                        <p className="text-zinc-900 text-left w-full lg:text-center text-lg font-normal font-['Inter'] leading-7">
                            Learn about the world class health care we provide</p>
                        :
                        <Skeleton height={40} width={300} />
                    }
                </div>
                <div className="w-full flex lg:flex-row flex-col gap-[40px] lg:gap-[22px] items-center justify-between">
                    <div className="lg:w-[50%] w-full flex-1">
                        {fetchData ?
                            <div className="lg:w-[90%] w-full ">
                                <Image width={400} height={455} src={(fetchData?.offer_images && fetchData?.offer_images[0]?.image?.file) || ""} alt={"Department"} className='w-full rounded-md h-full object-cover' />
                            </div>
                            :
                            <Skeleton height={500} />
                        }
                    </div>
                    <div className="lg:w-[50%] w-full relative flex-1">
                        {!fetchData ?
                            <Skeleton height={95} count={5} />
                            :
                            <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-4 
                            place-items-center lg:place-items-end xl:grid-cols-4 gap-[10px] justify-center">
                                {
                                    fetchData?.departments?.map((item, index) => {
                                        return (<Link href={`/departments/${item?.slug}`} key={index} className=''>
                                            <div className="w-[145px] h-[115px] hover:border-reviews_zinc/50 transition-all 
                                            duration-100 cursor-pointer relative bg-white rounded-lg shadow border border-zinc-200">
                                                <div className=" flex items-center justify-center flex-col w-[95%] mx-auto h-full">

                                                    <Image width={200} height={200} alt={item?.name} className="w-[52px] h-[49px] 
                                                 rounded" src={item?.image?.file} />
                                                    <div className=" text-center text-zinc-900 
                                                text-xs font-normal font-['Inter'] leading-tight">{item?.name}</div>
                                                </div>
                                            </div>
                                        </Link>
                                        )
                                    })

                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore