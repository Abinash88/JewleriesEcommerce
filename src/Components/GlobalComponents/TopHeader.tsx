"use client"

import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { NavBarDataTypes, NumberTypes } from '@/DataSource/Types';
import { useRouter } from 'next/navigation';
import { HeaderNavIcon } from '@/DataSource/StaticData';
const TopHeader = ({ setToggleNav, Navbar, numbers }:
    {
        setToggleNav: React.Dispatch<React.SetStateAction<boolean>>;
        Navbar: NavBarDataTypes[] | undefined;
        numbers: NumberTypes[]
    }) => {
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
        <div className='w-[90%] mx-auto flex  items-center justify-end    py-5'>
            <div className="flex  justify-end gap-[15px]">
                <input onFocus={() => setCheckInputFocus(true)} onBlur={() => setCheckInputFocus(false)}
                    value={search} onChange={(e) => setSearch(e.target.value)} type="search"
                    className='border pl-10 py-2 focus:outline-none placeholder:text-[14px] 
                                    pr-4 border-input_border_color text-[14px] h-full w-full' placeholder='Search' />
                <div className='flex items-center gap-2'>
                    {
                        HeaderNavIcon?.map((item, index) => {
                            return (
                                <div key={index} className='text-[19px] text-gray-500 cursor-pointer '>{item?.icon}</div>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}

export default TopHeader