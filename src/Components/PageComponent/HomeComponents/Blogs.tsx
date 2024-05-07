
import { ChangeToRealDate, fetchGetRequest } from '@/Components/lib/Helper'
import { PostsDataTypes } from '@/DataSource/Types'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const Blogs = async () => {

    const fetchData: PostsDataTypes = await fetchGetRequest({ endpoint: "posts/" });


    const filterBlogs = (blogs: PostsDataTypes | undefined) => {
        return blogs?.results?.map((item, _) => {
            if (item?.is_published && item?.post_type.toLowerCase() === "blog") {
                return item
            }
        }).filter((item, _) => item);
    }


    return (
        <div className='w-full'>
            <div className="max_width py-[40px]">
                <div className="flex items-center w-full mb-[40px] gap-5 lg:gap-0 justify-between">
                    {fetchData ?
                        <h3 className="section_title w-[60%] text-sec_title_color">What&apos;s new from us?</h3>
                        :
                        <Skeleton width={500} height={50} />
                    }
                    {
                        fetchData ?
                            <Link href={'/media-center'} className="green_btn flex items-center gap-[5px]" >
                                <span> Read more </span><span className='hidden lg:block'>articles</span>
                            </Link>
                            :
                            <Skeleton width={200} height={50} />
                    }
                </div>

                <div className="w-full">
                    {
                        fetchData ?
                            <div className="BlogAutoGrid w-full">
                                {
                                    filterBlogs(fetchData)?.slice(0, 4)?.map((item, index) => {
                                        return (
                                            <Link href={`/blogs/${item?.slug}`} key={index} className='md:h-[241px] h-[300px] pb-3 hover:shadow-lg transition-all duration-300  cursor-pointer bg-gray-50 rounded-lg overflow-hidden'>
                                                <div className="w-full h-[70%] md:h-[146px]">
                                                    <Image width={300} height={300} src={item?.image?.file as StaticImageData} alt={item?.title || ""} className='w-full object-cover h-full' />
                                                </div>
                                                <div className="mt-[7px] mx-auto w-[90%]">
                                                    <div className="flex items-center justify-between">
                                                        <h5 className="w-[125px] text-teal-600 hover:underline  text-sm font-normal font-['Inter'] leading-snug">{item?.categories[0].name}</h5>
                                                        <span className="text-zinc-400 text-xs font-normal font-['Inter'] leading-snug">{item?.created_at && ChangeToRealDate(item?.created_at)}</span>
                                                    </div>
                                                    <h4 className="w-[236px] mt-[7px] text-zinc-950 text-base font-semibold font-['Epilogue'] leading-snug">{item?.title}</h4>
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                            :
                            <Skeleton height={300} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Blogs