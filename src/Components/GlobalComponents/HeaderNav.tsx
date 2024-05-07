import Link from 'next/link';
import React from 'react'
import { GoChevronDown } from 'react-icons/go';
import Skeleton from 'react-loading-skeleton';
import { DepartmentTypes, NavBarDataTypes } from '@/DataSource/Types';
import { Cn, fetchGetRequest } from '../lib/Helper';
import dynamic from 'next/dynamic';
import { IoIosSearch } from 'react-icons/io';
import { HeaderNavBar } from '@/DataSource/StaticData';
const SubLinks = dynamic(() => import("./SubLinks"))

const HeaderNav = ({ Navbar, setToggleNav, ToggleNav, Department: fetchData }:
    {
        ToggleNav: boolean;
        setToggleNav: React.Dispatch<React.SetStateAction<boolean>>,
        Navbar: NavBarDataTypes[] | undefined;
        Department: DepartmentTypes;
    }) => {

    return (
        <nav className='  mx-auto w-[90%] bg-red-500 flex justify-end lg:mx-0 lg:ml-auto'>
            {
                <ul className='flex lg:flex-row flex-col lg:w-[600px] ml-auto  items-start w-full 
                           justify-start lg:justify-end'>
                    {
                        HeaderNavBar?.map((item, index) => {
                            return (
                                <li className='lg:mx-1 hover:bg-gray-50 
                                            lg:hover:bg-transparent lg:border-b-0 border-b lg:w-auto w-full' key={index}>
                                    <Link className='px-[8px] hover:text-title_green_color lg:w-auto 
                                                w-full block py-[15px] links h-full lg:py-[7px] text-[16px] lg:text-[12px]'
                                        href={item?.link}>{item?.name}</Link>
                                </li>
                            )
                        })
                    }

                </ul>
            }
        </nav>
    )
}

export default HeaderNav