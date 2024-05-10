import MainMyOrder from '@/Components/PageComponent/OrderComponent/MainOrderBox'
import { fetchGetRequest } from '@/Components/lib/Helper'
import { Metadata } from 'next'
import React from 'react'



export async function generateMetadata(): Promise<Metadata> {

    return {
        title: '',
        //@ts-ignore
        authors: '',
        canonical: "",
        description: ``,

        keywords: [""],

        openGraph: {
            locale: "en_US",
            type: "website",
            title: "",
            description: "",
            url: "",
            siteName: "",
            images: "",
        },
        //@ts-ignore
        twitter: {
            title: "",
            description: "",
            site: "",
            images: "",
            card: "",
            creator: "",
        }
    }
}


const page = async () => {
    return (
        <div className='w-full fixed_head_style'>
            <div className="max_width">
                <MainMyOrder />
            </div>
        </div>
    )
}

export default page