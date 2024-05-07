import React from 'react'
import TopHeaders from '../DoctorsComponent/TopHeaders'
import Background from "../../../Assests/HomeImages/charak_background.png"
const MainMediaCenter = dynamic(() => import("./MainMediaCenter"))
const Navigation = dynamic(() => import("./Navigation"))
import dynamic from 'next/dynamic'
import { PostsDataTypes } from '@/DataSource/Types'
import { fetchGetRequest } from '@/Components/lib/Helper'

const MainMediaBox = async ({ searchParam }: { searchParam: string | undefined }) => {
    const fetchData: PostsDataTypes = await fetchGetRequest({ endpoint: `posts/${searchParam ? `?page=${searchParam}` : ''}` })

    return (
        <div className='w-full'>
            <div className="w-full">
                <TopHeaders fetchQuery='posts/' desc='All Latest Updates from Charak' title='Latest from Media Center' BackgroundImage={Background} />
            </div>
            <div className="max_width w-full my-[63px]">
                <MainMediaCenter fetchData={fetchData} />
            </div>
            <div className="">
                <Navigation getParams={searchParam} fetchData={fetchData} />
            </div>
        </div>
    )
}

export default MainMediaBox