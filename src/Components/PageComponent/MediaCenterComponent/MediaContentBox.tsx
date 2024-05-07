"use client"

import { PostsDataTypes } from '@/DataSource/Types'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import dynamic from 'next/dynamic'
const BlogContent = dynamic(() => import("./BlogContent"), { ssr: false, loading: () => <Skeleton height={386} /> })

const MediaContentBox = ({ fetchData }: { fetchData: PostsDataTypes }) => {

    return (
        <div className='w-full'>
            {!fetchData ?
                < Skeleton count={5} style={{ marginBottom: "20px" }} height={350} />
                : <div className="MediaGridCenter">
                    {
                        fetchData?.results?.map((item, index) => {

                            if (item?.is_published && item?.post_type.toLowerCase() === "blog") {
                                return (
                                    <BlogContent key={index} item={item} />
                                )
                            }
                        })
                    }
                </div>}
        </div >
    )
}

export default MediaContentBox