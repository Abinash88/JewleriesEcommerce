import { HtmlToText } from '@/Components/lib/Helper'
import { MainPostDatas } from '@/DataSource/Types'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const BlogContent = ({ fetchData }: { fetchData: MainPostDatas | undefined }) => {
    return (
        <div className='w-full '>
            <div id='blogsDetail' className="w-full ">
                {
                    HtmlToText(fetchData?.content) || <Skeleton height={40} count={10} style={{ marginTop: "20px" }} />
                }
            </div>
        </div>
    )
}

export default BlogContent