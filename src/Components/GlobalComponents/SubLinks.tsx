import { ChildNavsTypes, MainDepartmentDataTypes, NavBarDataTypes } from '@/DataSource/Types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SubLinks = (
    {
        data,
        setToggleNav,
        item,
        endpoint,
        department,
    }
        :
        {
            department?: MainDepartmentDataTypes[] | undefined,
            data: ChildNavsTypes[] | ChildNavsTypes[] | undefined,
            setToggleNav: React.Dispatch<React.SetStateAction<boolean>>,
            item: NavBarDataTypes,
            endpoint: string
        }) => {


    return (
        <div className={`lg:gap-[20px] w-full  submenueGrid lg:w-auto`}>

            {department ?
                department?.map((sub, index) => {
                    return (
                        <Link onClick={() => {
                            setToggleNav(false)
                        }}
                            href={`${endpoint}${sub?.slug}`} key={index}
                            className={` "lg:rounded-md justify-start rounded-md w-full lg:w-auto lg:justify-between
                           lg:py-2 py-[12px]  flex gap-2 items-center transition3sec  
                            border-b-2 lg:border-none hover:text-green-50 text-left hover:bg-title_green_color 
                            px-2 lg:px-3 text-[16px] lg:text-[12px]`}>
                            <span>{sub?.name}</span>
                            <Image width={50} height={50} src={sub?.image?.file || ""} className='w-[50px] bg-white lg:block hidden 
                            h-[50px] rounded-full object-cover' alt={sub?.name} />
                        </Link>
                    )
                })
                :
                data ?
                    data?.map((sub, index) => {
                        return (
                            <Link onClick={() => {
                                setToggleNav(false)
                            }}
                                href={`${endpoint}${sub?.slug}`} key={index}
                                className={` "lg:rounded-md justify-start rounded-md w-full lg:w-auto lg:justify-between
                               lg:py-2 py-[12px]  flex gap-2 items-center transition3sec  
                                border-b-2 lg:border-none hover:text-green-50 text-left hover:bg-title_green_color 
                                px-2 lg:px-3 text-[16px] lg:text-[12px]`}>
                                <span>{sub?.name}</span>
                                <Image width={50} height={50} src={sub?.menu_image?.file || ""} className='w-[50px] lg:block hidden 
                                h-[50px] rounded-full bg-white object-cover' alt={sub?.name} />
                            </Link>
                        )
                    })
                    :
                    <Skeleton />
            }
        </div>
    )
}

export default SubLinks