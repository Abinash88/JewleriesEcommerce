import { HtmlToText, fetchGetRequest } from '@/Components/lib/Helper';
import { PostsDataTypes } from '@/DataSource/Types';
import React from 'react'
import Skeleton from 'react-loading-skeleton';

const MainPrivacy = async () => {

    const fetchData: PostsDataTypes = await fetchGetRequest({ endpoint: "posts/?category=Privacy" });

    return (
        <div className='w-full py-[60px] max_width'>
            <h3 className='w-full text-[35px] text-gray-700 mb-[30px] font-semibold  text-center'>
                {fetchData ? "Privacy & Policy" : <Skeleton height={60} width={300} />}
            </h3>
            <div className="w-full py-5">
                {
                    !fetchData ?
                        <Skeleton count={7} height={50} />
                        :
                        fetchData?.results?.map((item, index) => {
                            if (item?.post_type === "pages" && item?.categories?.[0].name === "Privacy") {
                                return (<div className='w-full ' key={index}>
                                    {
                                        HtmlToText(item?.content)
                                    }
                                </div>)
                            }
                        })
                }
            </div>
        </div>
    )
}

export default MainPrivacy;