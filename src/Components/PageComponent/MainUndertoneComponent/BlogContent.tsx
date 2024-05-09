"use client"

import { HtmlToText } from '@/Components/lib/Helper'
import { MainPostDatas } from '@/DataSource/Types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogContent = ({ item }: { item: MainPostDatas }) => {
    return (
        <div className='border-2 cursor-pointer transition-all duration-300 rounded-lg hover:shadow-md'>
            <div className="w-full  h-[214px]">
                <Link href={`/blogs/${item?.slug}`}>
                    <Image width={400} height={400} src={item?.image?.file} alt={item?.title} className='w-full object-cover h-full' />
                </Link>
            </div>
            <div className="p-[16px]">
                <Link href={`/blogs/${item?.slug}`}>
                    <h3 className="w-[80%]  text-zinc-700 hover:text-gray-900 text-[20px] 
                font-semibold font-['Inter'] leading-relaxed">{item?.title}</h3>
                </Link>
                <div className="w-[80%]  mb-[10px] mt-[5px] text-zinc-900 text-[15px] 
                font-normal font-['Inter'] leading-tight">{HtmlToText(item?.content.substring(0, 100))}</div>
                <h4 className="text-zinc-400 text-xs font-normal font-['Inter'] leading-tight">{ }</h4>
            </div>
        </div>
    )
}

export default BlogContent