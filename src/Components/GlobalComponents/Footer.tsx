
import { FooterBottomData } from '@/DataSource/StaticData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ChildNavsTypes, IdenetityTypes, iconsTypes } from '@/DataSource/Types'
import Skeleton from 'react-loading-skeleton'
import { fetchGetRequest } from '../lib/Helper'

const Footer = async () => {

    const fetchData: iconsTypes[] = await fetchGetRequest({ endpoint: 'socials/' });
    const footerNav: ChildNavsTypes[] = await fetchGetRequest({ endpoint: "api/menu-items/top_header/" });
    const identity: IdenetityTypes = await fetchGetRequest({ endpoint: 'identity/' })


    return (
        <div className='w-full bg-neutral-50'>
            <div className="max_width py-[40px] flex flex-col items-center">
                <div className="md:w-[345px] mb-8 w-[70%] h-auto mx-auto  lg:h-[76px]">
                    {!identity ?
                        <Skeleton height={76} width={400} />
                        :
                        <Link href={'/'}>
                            <Image width={345} height={76} priority className='w-full h-auto' src={identity?.logo_light?.file} alt='chark-Logo' />
                        </Link>
                    }
                </div>
                <div className="w-full flex items-center flex-col justify-center ">
                    {!fetchData ?
                        <Skeleton height={40} style={{ margin: " 20px auto" }} width={300} />
                        :
                        <p className="lg:w-[500px] w-full text-center mt-[11px] text-zinc-700 
                        text-wrap block text-md md:text-lg font-semibold font-['Inter'] leading-7">
                            Nagdhunga, Pokhara-8,  Kaski,
                            <br className="md:hidden flex" />
                            Gandaki Province
                        </p>
                    }
                    <div className="mt-[22px]">
                        <ul className='flex items-center w-full md:flex-row flex-col gap-2 md:gap-[48px]'>
                            {!fetchData ?
                                <Skeleton height={40} width={800} />
                                :
                                footerNav?.map((item, index) => {
                                    return (
                                        <li className="text-zinc-700   hover:text-black transition-all duration-300 
                                        text-base font-normal font-['Epilogue'] leading-[30px]" key={index}>
                                            <Link href={item?.slug}>
                                                {item?.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                {!fetchData ?
                    <Skeleton height={40} width={1000} />
                    : <div className="w-full flex mt-[43px] lg:flex-row flex-col gap-4 lg:gap-0 items-center justify-between">
                        <p className="text-gray-700 text-wrap text-sm flex-1 font-normal font-['Inter'] md:text-left text-center leading-snug">© 2023 Charak Memorial Hospital | <Link className='hover:underline' href={"https://www.aarambhait.com"}>Developed by Aarambha IT</Link></p>
                        <div className="flex items-center justify-center gap-[26px] flex-1">
                            {
                                FooterBottomData?.map((item, index) => {
                                    return (<div key={index} className='flex items-center relative  w-auto gap-4'>
                                        <Link className="text-gray-700 text-sm hover:underline  font-normal font-['Inter'] leading-snug" href={item?.link}><span> {item?.name}</span> <span className={`${index === FooterBottomData?.length - 1 ? "hidden" : ""} w-[8px]  relative z-20 h-[8px] rounded-full bg-sec_title_color`}></span></Link>
                                    </div>)
                                })
                            }
                        </div>

                        <div className=" flex items-center justify-end flex-1 gap-[16px]">
                            {
                                fetchData?.map((item, index) => {
                                    return (<Link href={item?.url} key={index} className={`transition-all duration-300 text-[19px] cursor-pointer hover:scale-125 transform`}>
                                        <Image width={100} height={100} src={item?.icon?.file} alt={item?.name} className='w-[24px] object-cover h-[24px]' />
                                    </Link>)
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Footer