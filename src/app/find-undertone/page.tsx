import React from 'react'
import { Metadata } from 'next'
import { fetchGetRequest } from '@/Components/lib/Helper'
import dynamic from 'next/dynamic'
const MainUndertone = dynamic(() => import('@/Components/PageComponent/MainUndertoneComponent/MainUndertone'))


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


const page = () => {
    return (
        <div className='w-full fixed_head_style'>
                <MainUndertone />
        </div>
    )
}

export default page