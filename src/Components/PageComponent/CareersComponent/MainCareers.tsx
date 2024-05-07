"use client"

import { vacancyTypes } from '@/DataSource/Types'
import { useSearchParams } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import { searchDataTypes } from "../../../DataSource/Types"
import { IoIosSearch } from 'react-icons/io'
import Skeleton from 'react-loading-skeleton'
import CareersPoupForm from './CareersPoupForm'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
const CareersBox = dynamic(() => import("./CareersBox"))

const MainCareers = ({ searchCareers, fetchData }: { searchCareers: searchDataTypes, fetchData: vacancyTypes[] }) => {

    const param = useSearchParams();
    const getParam = param.get('search');
    const [careersData, setCareersData] = useState<vacancyTypes[]>();
    const [checkInputFocus, setCheckInputFocus] = useState(false)
    const router = useRouter();
    const [enableCareers, setEnableCareers] = useState<boolean[] | undefined>();
    const [searchData, setSearchData] = useState('')
    const [position, setPosition] = useState<string>("")
    let [isOpen, setIsOpen] = useState(false)


    useEffect(() => {
        if (getParam && fetchData) {
            setCareersData(searchCareers?.vacancies)
        } else {
            setCareersData(fetchData);
        }

        //eslint-disable-next-line
    }, [getParam, searchCareers?.vacancies])


    useEffect(() => {
        const dataCount = fetchData && Array.from({ length: fetchData?.length }, () => false)
        setEnableCareers(dataCount)
        //eslint-disable-next-line
    }, [])

    const toggleCareersBox = (index: number) => {
        let newData = enableCareers && [...enableCareers];
        if (newData)
            newData[index] = !newData[index]

        setEnableCareers(newData);
    }


    const ClickToSearch = useCallback(() => {
        if (searchData?.length >= 2 && checkInputFocus) {
            router.push(`/careers/?search=${searchData}`)
            setSearchData("")
        }
        //eslint-disable-next-line
    }, [searchData, checkInputFocus])


    useEffect(() => {
        if (typeof window === "undefined") return;
        const ClickEnterKey = (ev: KeyboardEvent) => {
            if (ev.key === "Enter") {
                ClickToSearch()
            }
        }

        document.addEventListener("keyup", ClickEnterKey)
        return () => document.removeEventListener("keyup", ClickEnterKey);
        //eslint-disable-next-line
    }, [searchData, checkInputFocus])


    function openModal() {
        setIsOpen(true)
    }

    return (
        <div className='w-full my-[60px] '>
            <CareersPoupForm position={position} setIsOpen={setIsOpen} isOpen={isOpen} openModal={openModal} />
            <div className="flex mb-[60px] gap-5 items-center lg:flex-row flex-col justify-between">
                <h3 className="text-zinc-700 text-[32px] font-bold font-['Epilogue'] leading-[56px]">{fetchData ? "Open positions" :
                    <Skeleton height={60} width={300} />}</h3>
                <div className="lg:w-[527px] relative w-full h-[43px]">
                    {fetchData ?
                        <div className="">
                            {!searchData ?
                                <div className='cursor-pointer absolute top-[10px] left-2 z-10'>
                                    <IoIosSearch className='text-[24px]  text-zinc-600' />
                                </div>
                                :
                                <div onClick={ClickToSearch} className='cursor-pointer absolute top-[10px] left-2 z-10'>
                                    <IoIosSearch className='text-[24px]  text-zinc-600' />
                                </div>
                            }
                            <input onFocus={() => setCheckInputFocus(true)} onBlur={() => setCheckInputFocus(false)}
                                onChange={(e) => setSearchData(e.target.value)} type="search" className='contactInput !pl-10 !rounded-full pr-3' placeholder='Search your Positions' />
                        </div>
                        : <Skeleton height={60} borderRadius={100} width={527} />
                    }
                </div>
            </div>

            <CareersBox enableCareers={enableCareers} openModal={openModal} setPosition={setPosition} toggleCareersBox={toggleCareersBox} careersData={careersData} />
        </div >
    )
}

export default MainCareers