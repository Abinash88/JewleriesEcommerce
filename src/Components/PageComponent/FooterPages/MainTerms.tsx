import { HtmlToText, fetchGetRequest } from '@/Components/lib/Helper';
import { PostsDataTypes } from '@/DataSource/Types';
import React from 'react'
import Skeleton from 'react-loading-skeleton';

const MainTerms = async () => {

    const fetchData: PostsDataTypes = await fetchGetRequest({ endpoint: "posts/?category=Terms" });
    return (
        <div className='w-[90%] md:w-[80%] py-[60px] max_width'>
            <h3 className='w-full text-[35px] text-gray-700 mb-[30px] font-semibold  text-center'>
                {fetchData ? "Terms & Conditions" : <Skeleton height={60} width={300} />}
            </h3>
            <div className="w-full py-5">
                {
                    !fetchData ?
                        <Skeleton count={7} height={50} />
                        :
                        fetchData?.results?.map((item, index) => {
                            if (item?.title === "Terms" && item?.post_type === "pages") {
                                return (<div className='w-full text-justify' key={index}>
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

export default MainTerms;