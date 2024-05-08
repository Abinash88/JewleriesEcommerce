
import { AboutFooterLink, HeaderNavBar } from '@/DataSource/StaticData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Cn } from '../lib/Helper'
import { SeconedHead, SmallHead } from '../Ui/Texts'
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'

const Footer = async () => {



    return (
        <div className='w-full bg-primary '>
            <div className=" flex flex-col">
                <div className="max_width md:flex-row flex-col py-[40px] flex md:justify-start  items-start">
                    <div className=" flex-1">
                        <SmallHead text='Shop' className='font-["Roboto"] mb-2 text-[16px] text-white' />
                        <ul className={Cn(`flex flex-col items-start w-full 
                           justify-center transition-all duration-500 `)}>
                            {
                                HeaderNavBar?.map((item, index) => {
                                    return (
                                        <li className='  
                                           w-full' key={index}>
                                            <Link className='font-["Roboto"]  lg:w-auto w-full block py-[15px]
                                            links h-full hover:text-white text-background lg:py-[7px] text-[14px]  transition-all'
                                                href={item?.link}>{item?.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="w-full items-start justify-center h-full flex-1 flex ">
                        <div className=" flex items-start  flex-col justify-start  ">
                            <SmallHead text='About' className='font-["Roboto"] text-[16px] mb-2 text-white text-left' />
                            <ul className={Cn(`flex flex-col  ml-auto  items-start w-full 
                           justify-center transition-all duration-500`)}>
                                {
                                    AboutFooterLink?.map((item, index) => {
                                        return (
                                            <li className='  w-full' key={index}>
                                                <Link className=' font-["Roboto"]  lg:w-auto w-full
                                            links h-full hover:text-white text-background  lg:py-[7px]  text-[14px] transition-all'
                                                    href={item?.link}>{item?.name}</Link>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>

                    </div>
                    <div className=" flex flex-col items-end justify-end flex-1 gap-[16px]">
                        <div className="">
                            <SmallHead text='Contact' className='font-["Roboto"] text-[16px] mb-2 text-white text-left' />

                            <Link className=' font-["Roboto"]  lg:w-auto w-full
                                            links h-full hover:text-white text-background  lg:py-[7px]  text-[14px] transition-all'
                                href={`mainto:jewelrynp@gmail.com`}>jewelrynp@gmail.com</Link>
                            <div className="flex items-center gap-3">
                                <Link href={'https://pintrest.com'}>
                                    <FaPinterest className='text-background text-[20px]' />
                                </Link>
                                <Link href={'https://instagram.com'}>
                                    <FaInstagram className='text-background text-[20px]' />
                                </Link>
                                <Link href={'https://facebook.com'}>
                                    <FaFacebook className='text-background text-[20px]' />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="border-t-2  border-white">
                    <div className="w-[90%]  mx-auto flex items-center gap-2 ">

                        <div className="flex-1"></div>
                        <div className="flex-1">
                            <SeconedHead text='Small Wonders. Endless Glamour' className='flex-1 font-["Waterfall"] text-white ' />
                        </div>
                        <div className="flex-1 flex justify-end">
                            <p className='text-white text-[15px]'>@2024 Jewelry.np</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer