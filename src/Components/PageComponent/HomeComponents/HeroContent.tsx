"use client"

import PopupBanner from '@/Components/GlobalComponents/PopupBanner'
import { IdenetityTypes, PopupBannerTypes } from '@/DataSource/Types'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'


const HeroContent = ({ fetchData, popupBanner }:
    {
        fetchData: IdenetityTypes,
        popupBanner: PopupBannerTypes[]
    }) => {

    const [checkInputFocus, setCheckInputFocus] = useState(false)
    const [search, setSearch] = useState<string>("");
    const [enablePopup, setEnablePopup] = useState(false);
    const inputBox = useRef<HTMLInputElement>(null)
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

    useEffect(() => {
        const session = JSON.parse(sessionStorage.getItem("popup") || JSON.stringify(true));
        setTimeout(() => {
            setEnablePopup(session)
        }, 1000)
    }, [])

    return (
        <div className='w-full'>
            {fetchData && enablePopup &&
                <PopupBanner popupData={popupBanner} enablePopup={enablePopup}
                    className={`transition-opacity duration-200`}
                    setEnablePopup={setEnablePopup} />
            }
            <div className="max_width   absolute z-0 top-[50%] left-[50%] 
                transform translate-x-[-50%] translate-y-[-50%] items-center">
                <div className="md:w-[50%] w-full flex flex-col gap-2">
                    <div className="w-[520px] flex flex-col flex-wrap">
                        <span className="text-zinc-900  hero_title">
                            Prepared for the{" "}
                        </span>
                        <div className="">
                            <span className="text-green-800  hero_title">
                                Unexpected
                            </span>
                            <span className="text-zinc-900  hero_title">
                                {" "}
                            </span>
                            <span className="text-red-700  hero_title">
                                24/7
                            </span>
                        </div>
                    </div>
                    <div className="gap-4 flex flex-col">
                        <h3 className="w-[520px] text-zinc-900 
                            lg:text-[28px] text-[23px] xl:text-[32px] font-medium font-['Inter'] leading-[48px]">
                            Temple of Healing
                        </h3>{" "}
                        <div className="md:w-[367px] 
                                 w-full h-[51px] relative bg-white rounded-lg border border-zinc-200">
                            {search?.length >= 2 ?
                                <IoIosSearch onClick={() => {
                                    router.push(`/search/${search}`)
                                }}
                                    className='absolute z-30  top-[50%] left-3 transform translate-y-[-50%] 
                                        h-6 w-6 cursor-pointer text-sec_title_color' />
                                :
                                <IoIosSearch className='absolute z-30  top-[50%] left-3 transform translate-y-[-50%] 
                                     h-6 w-6 cursor-pointer text-sec_title_color' />
                            }
                            <input onFocus={() => setCheckInputFocus(true)} onBlur={() => setCheckInputFocus(false)} ref={inputBox}
                                value={search} onChange={(e) => setSearch(e?.target?.value)} className=" absolute 
                                text-neutral-500 text-[16px] font-normal placeholder:text-[16px] 
                                    focus:outline-none w-[80%] h-full right-4 font-['Inter'] leading-7" type="search"
                                placeholder="Search for Doctors and Services" ></input>
                            <div className="w-6 h-6 left-[20px] top-[14px] absolute" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroContent