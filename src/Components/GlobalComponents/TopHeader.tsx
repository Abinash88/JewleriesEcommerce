"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { HeaderNavIcon } from '@/DataSource/StaticData';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
const TopHeader = () => {
    const [checkInputFocus, setCheckInputFocus] = useState(false)
    const [search, setSearch] = useState<string>("");
    const router = useRouter();


    useEffect(() => {
        if (typeof window === "undefined") return;
        const ClickEnterKey = (ev: KeyboardEvent) => {
            if (ev.key === "Enter") {
                if (search?.length >= 2 && checkInputFocus) {
                    router.push(`/search/${search}`)
                }
            }
        }

        document.addEventListener("keyup", ClickEnterKey)
        return () => document.removeEventListener("keyup", ClickEnterKey);

        //eslint-disable-next-line
    }, [search, checkInputFocus])

    return (
        <div className='w-full  flex border-b-2 border-primary items-center justify-end py-3 md:py-5'>
            <div className="flex w-[90%] mx-auto  justify-end gap-[15px]">
                <div className="flex items-center relative h-full w-[250px]">

                    <input onFocus={() => setCheckInputFocus(true)} onBlur={() => setCheckInputFocus(false)}
                        value={search} onChange={(e) => setSearch(e.target.value)} type="search"
                        className='border pl-10 py-2 focus:outline-none placeholder:text-[14px] 
                    pr-4 border-input_border_color text-[14px] h-full w-full' placeholder='Search' />
                    <FaSearch className='absolute text-gray-500 left-[7px] cursor-pointer' />
                </div>
                <div className='flex items-center gap-2'>
                    {
                        HeaderNavIcon?.map((item, index) => {
                            return (
                                <Link href={item?.link} key={index} className='text-[19px] hover:text-primary transition-all text-gray-400 cursor-pointer '>{item?.icon}</Link>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}

export default TopHeader