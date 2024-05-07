"use client"

import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FaCheck, FaChevronDown } from 'react-icons/fa'
import { DoctorSpecialist } from '@/DataSource/StaticData'
import { IoIosSearch } from 'react-icons/io'

const SearchDoctors = ({ setSearch, search }
    :
    { setSearch: React.Dispatch<React.SetStateAction<string>>; search: string }) => {
    const [selected, setSelected] = useState(DoctorSpecialist[0])

    const clearFilter = () => {
        setSearch("")
    }

    return (
        <div className='w-full '>
            <div className="w-full">
                <div className="flex flex-col justify-start">
                    <div className="flex items-center justify-between">
                        <div className='mb-[29px]'>
                            <span className="text-zinc-900  lg:text-lg font-bold font-['Inter'] leading-[1.56px]">
                                Search Doctors
                            </span>
                        </div>
                        <button onClick={clearFilter} className="w-[79px]">
                            <span className="text-teal-800 text-sm font-normal font-['Inter'] leading-[1.57px]">Clear filter</span>
                        </button>
                    </div>
                    <div className="flex md:items-center items-start relative md:flex-row flex-col md:gap-[32px] gap-4 justify-between">
                        <div className="md:w-[70%]  w-full">
                            <div className="w-full h-[43px] relative">
                                <IoIosSearch className='absolute top-[50%] z-20 left-2 transform translate-y-[-50%] 
                                h-5 w-5 cursor-pointer text-sec_title_color' />
                                <input value={search} onChange={(e) => setSearch(e.target.value)} type="search"
                                    placeholder='Doctor Name' className='w-full h-full pr-5 pl-10  focus:outline-none 
                                    relative bg-gray-100 rounded-md ' />
                            </div>
                        </div>

                        <div className="md:w-[30%] w-[100%] flex justify-end">
                            <Listbox value={selected} onChange={setSelected}>
                                <div className="relative  w-full h-[43px]">
                                    <Listbox.Button className="relative z-20 w-full h-full cursor-pointer  rounded-md
                                    bg-gray-100 py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 
                                    focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 
                                    focus-visible:ring-offset-orange-300 sm:text-sm">
                                        <span className="block font-semibold font-['inter'] text-gray-600 truncate">
                                            {selected.name}
                                        </span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <FaChevronDown
                                                className="h-4 w-4 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full 
                                        overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 
                                        ring-black/5 focus:outline-none sm:text-sm">
                                            {DoctorSpecialist?.map((person, index) => (
                                                <Listbox.Option
                                                    key={index}
                                                    className={({ active }) =>
                                                        `relative select-none py-2 cursor-pointer pl-10 pr-4 
                                                        ${active ? 'bg-gray-100 text-reviews_zinc'
                                                            :
                                                            'text-gray-900'
                                                        }`
                                                    }
                                                    value={person}
                                                >
                                                    {({ selected }) => (
                                                        <>
                                                            <span
                                                                className={`block truncate font-semibold text-gray-600 
                                                                ${selected ? 'font-medium' : 'font-normal'
                                                                    }`}
                                                            >
                                                                {person.name}
                                                            </span>
                                                            {selected ? (
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-reviews_zinc">
                                                                    <FaCheck className="h-5 w-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchDoctors