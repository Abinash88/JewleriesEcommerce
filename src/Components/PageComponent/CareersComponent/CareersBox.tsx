import { vacancyTypes } from '@/DataSource/Types'
import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import Skeleton from 'react-loading-skeleton'

const CareersBox = ({ careersData, enableCareers, setPosition, openModal, toggleCareersBox }:
    {
        careersData: vacancyTypes[] | undefined; enableCareers: boolean[] | undefined;
        setPosition: React.Dispatch<React.SetStateAction<string>>; openModal: () => void,
        toggleCareersBox: (index: number) => void
    }) => {
    return (
        <div className='w-full'>
            <div className="flex w-full flex-col items-center lg:items-start gap-[45px]">
                {careersData ?
                    careersData?.length <= 0 ?
                        <div className='w-full flex justify-center flex-col gap-5 items-center py-6'>
                            <h2 className='text-gray-500 font-semibold text-[20px]'>No data Found!</h2>
                            <Link href="/careers" className='font-semibold text-gray-500 hover:underline border px-2 '>Show All</Link>
                        </div>
                        :
                        careersData?.map((item, index) => {
                            return (
                                <div key={index} className={`p-3`}>
                                    <h5 className="text-teal-800 mb-[12px] text-sm font-normal font-['Inter'] leading-snug">{item?.time} / {item?.location}</h5>
                                    <div className="w-full flex items-center justify-between">
                                        <h3 onClick={() => toggleCareersBox(index)} className="text-zinc-900 cursor-pointer hover:text-black mb-[3px] text-xl md:text-2xl font-semibold font-['Epilogue'] leading-9">{item?.title} | Open Positions: {item?.no_of_vacancy}</h3>
                                        <FaChevronRight className={`${enableCareers && enableCareers[index] ? "rotate-180" : ""} text-gray-500 text-[20px] transition-all transform`} />
                                    </div>
                                    <div className={`${enableCareers && enableCareers[index] ? "hidden" : ""} w-full mt-8`}>
                                        <p className="text-zinc-400 md:w-[70%] w-full mb-[17px] text-base font-normal font-['Inter'] leading-relaxed">
                                            {item?.description.substring(0, 200)}...
                                        </p>
                                    </div>
                                    <div className={`${enableCareers && enableCareers[index] ? 'max-h-[10000px] h-auto' : 'max-h-[0px]'} overflow-hidden  w-full border-b-2 flex md:flex-row flex-col items-start md:items-start pb-[30px] justify-between`}>
                                        <div className="flex-1">
                                            <div className="mb-7 mt-5 ">
                                                <h3 className='font-bold  text-[18px] mb-3  w-full p-2'>Job Description</h3>
                                                <p className=" text-zinc-400 mb-[17px] text-base font-normal font-['Inter'] leading-relaxed">{item?.description}</p>
                                            </div>

                                            <div className="my-4">
                                                <h3 className='font-bold text-gray-600  text-[18px] mb-3  w-full p-2'>Requirement</h3>
                                                <p className=" text-zinc-400 mb-[17px] text-base font-normal font-['Inter'] leading-relaxed">{item?.requirements}</p>
                                            </div>

                                        </div>
                                        <div className="md:mb-0 w-[300px] mt-10 lg:w-[400px] flex items-center justify-start md:justify-end mb-[25px]">
                                            <button onClick={() => {
                                                setPosition(item?.title)
                                                openModal()
                                            }} className='bg-green-800 hover:bg-green-900 text-[14px] lg:text-[16px] 
                                            text-white font-semibold font-["Inter] rounded-lg md:px-7 py-3 px-5 lg:px-10 md:py-4'>
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    :
                    <Skeleton height={200} count={4} style={{ marginTop: "20px", width: "1200px" }} />
                }
            </div>
        </div>
    )
}

export default CareersBox