import { fetchGetRequest } from '@/Components/lib/Helper'
import { MainPostDatas, PostsDataTypes } from '@/DataSource/Types'
import Link from 'next/link'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const Sidebar = async ({ singleData }: { singleData: MainPostDatas | undefined }) => {
    const fetchData: PostsDataTypes = await fetchGetRequest({ endpoint: 'posts/' })
    return (
        <div className='w-full'>
            <div className="w-full">
                <h3 className="text-teal-800 mb-[36px] text-2xl font-semibold font-['Epilogue'] uppercase leading-9">
                    {fetchData ? 'The Latest' : <Skeleton borderRadius={10} height={50} />}
                </h3>

                <div className="flex flex-col  gap-[11px]">
                    {fetchData ?
                        fetchData?.results.slice(0, 5)?.map((item, index) => {
                            if (singleData?.slug !== item?.slug)
                                return (
                                    <Link href={`/blogs/${item?.slug}`} key={index} className='border-t-2 flex flex-col gap-[12px] p-[10px]'>
                                        <h4 className=" text-zinc-700 hover:text-zinc-900 text-lg lg:text-xl font-semibold font-['Inter'] leading-[30px]">
                                            {item?.title}
                                        </h4>
                                        <p className="text-zinc-400 text-sm font-normal font-['Inter'] leading-snug">5 min read</p>
                                    </Link>
                                )
                        })
                        :
                        <Skeleton height={120} count={4} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar