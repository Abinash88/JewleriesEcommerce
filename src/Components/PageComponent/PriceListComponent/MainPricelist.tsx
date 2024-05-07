"use client"

import React, { useEffect, useState } from 'react'
import PriceListSidebar from './PriceListSidebar'
import { PriceListTypes } from '@/DataSource/Types'
import Skeleton from 'react-loading-skeleton'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const MainPricelist = ({ fetchData }: { fetchData: PriceListTypes[] | undefined }) => {

    const [search, setSearch] = useState<string>("");
    const [priceList, setPriceList] = useState<PriceListTypes[]>()
    const [totalList, setTotalList] = useState<number>(10)
    const [showList, setShowList] = useState(0)

    useEffect(() => {
        const searchPriceList = fetchData?.filter((data) => data?.item_name?.toLowerCase()?.includes(search?.toLowerCase()) ||
            data?.price.toString()?.includes(search?.toLowerCase()));
        setPriceList(searchPriceList);
        //eslint-disable-next-line 
    }, [search])

    useEffect(() => {
        if (totalList > 10) {
            setShowList(0);
        }
        if (search?.length >= 1) {
            setShowList(0)
        }
    }, [totalList, search?.length])



    return (
        <div className='w-full flex lg:flex-row flex-col gap-[40px] items-start mt-[60px]'>
            <div className="flex-1 w-full flex flex-col gap-10">
                <div className="w-full text-center">
                    {!fetchData ?
                        <Skeleton width={300} height={50} />
                        :
                        <h3 className='font-["Epilogue"] font-semibold  text-[20px] md:text-[28px]'> Hospital Service Price List</h3>
                    }

                </div>
                <div className="w-full flex items-center md:flex-row gap-5 flex-col justify-between">
                    {!fetchData ?
                        <Skeleton width={300} height={50} />
                        :
                        <div className='flex gap-3 md:w-auto md:flex-row flex-col  w-full relative items-center'>
                            <h4 className=" text-[17px] text-gray-500 font-semibold">Entites :</h4>
                            <select value={totalList} onChange={(e) => setTotalList(parseInt(e.target.value))} name="entities"
                                className='w-[200px] focus:outline-none border-2 rounded-md py-2 px-3' id="entities">
                                <option className='' value={`10`}>10</option>
                                <option className='' value={`20`}>20</option>
                                <option className='' value={`50`}>50</option>
                            </select>
                        </div>
                    }

                    {!fetchData ?
                        <Skeleton width={300} height={50} />
                        :
                        <div className="flex gap-3 md:w-auto md:flex-row flex-col  w-full relative items-center">
                            <label htmlFor="Search" className=" text-[17px] text-gray-500 font-semibold">Search:</label>
                            <input onChange={(e) => setSearch(e.target.value)} type="text" id='Search'
                                className='px-4 py-2 md:w-auto w-full focus:outline-none border-2 rounded-full ' placeholder='Search here...' />
                        </div>
                    }
                </div>
                <div className="w-full">
                    {!priceList ?
                        <Skeleton count={7} style={{ marginTop: "6px" }} height={50} />
                        :
                        <table border={1} className="flex-1 border priceList flex flex-col w-full">
                            <thead className='w-full  px-3 py-2 '>
                                <tr className='w-full flex justify-start  text-left  items-center'>
                                    <th className='text-[16px] md:text-[18px] w-[100px]  font-semibold '>SN.</th>
                                    <th className='text-[16px] md:text-[18px] flex-1 font-semibold '>Service Type</th>
                                    <th className='text-[16px] md:text-[18px] flex-1 text-right font-semibold '>Rate</th>
                                </tr>
                            </thead>
                            <tbody className='w-full  bg-greeen-500 mt-2 flex flex-col'>
                                {

                                    priceList?.slice(showList * totalList, (showList + 1) * totalList)?.map((item, index) => {
                                        return (
                                            <tr key={index} className='w-full flex px-3 py-2 justify-start text-left  items-center'>
                                                <td className='text-[16px] md:text-[18px] w-[100px] text-gray-800 font-normal'>{index + 1}</td>
                                                <td className='text-[16px] md:text-[18px]  flex-1 text-gray-800 font-normal'>{item?.item_name}</td>
                                                <td className='text-[16px] md:text-[18px] text-right flex-1 text-gray-800 font-normal'>{item?.price}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    }
                </div>

                {priceList && totalList >= priceList?.length ?
                    null
                    :
                    <div className="w-full mt-10 flex  items-center justify-between">
                        {priceList && showList === 0 ?
                            <div className=""></div>
                            :
                            <div onClick={() => {
                                setShowList((prev) => Math.max(prev - 1, 0))
                            }} className=" text-[16px] text-gray-600 flex items-center 
                            gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
                                <FaArrowLeft className='text-[20px] ' />
                                <span>Previous</span>
                            </div>
                        }

                        {priceList && showList >= Math.floor((priceList?.length || 0) / totalList) ?
                            null
                            :
                            <div onClick={() => {
                                setShowList((prev) => Math.min(prev + 1, Math.floor((priceList?.length || 0) / totalList)))
                            }} className=" text-[16px] text-gray-600 flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
                                <span>Next</span>
                                <FaArrowRight className='text-[20px] ' />
                            </div>
                        }
                    </div>
                }
            </div>
            <div className="lg:w-[330px] w-full lg:pl-[50px]">
                <PriceListSidebar />
            </div>
        </div >
    )
}

export default MainPricelist