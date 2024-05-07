
import { fetchGetRequest } from '@/Components/lib/Helper'
import { NavBarDataTypes } from '@/DataSource/Types'
import Link from 'next/link'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ServicesSidebar = async () => {

    const Navbar: NavBarDataTypes[] = await fetchGetRequest({ endpoint: 'api/menu-items/' })

    const checkTheServicesData = () => {
        return Navbar?.map((item, index) => {
            if (item?.slug === "services") {
                return item?.child_navs;
            }
        }).filter((item, _) => item)[0]
    }



    return (
        <div className='w-full'>
            <div className='w-full'>
                {!Navbar ?
                    <Skeleton height={30} style={{ marginRight: '10px' }} />
                    :
                    <h3 className="text-zinc-900  text-[25px] lg:text-[32px] font-bold font-['Epilogue'] leading-[48px]">
                        Our Services
                    </h3>
                }
                <div className="mt-[5px] w-full lg:w-[70%] flex flex-col">
                    {
                        !Navbar ?
                            <Skeleton count={5} height={50} />
                            :
                            checkTheServicesData()?.slice(0, 5)?.map((item, index) => {
                                return (
                                    <Link href={`/services/${item?.slug}`} key={index} className='cursor-pointer hover:text-green-600 py-[15px] border-t-2'>
                                        {item?.name}
                                    </Link>
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default ServicesSidebar