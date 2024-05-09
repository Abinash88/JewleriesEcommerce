import React from 'react'
const MainFaqs = dynamic(() => import("@/Components/PageComponent/CareersComponent/MainFaqs"))
import dynamic from 'next/dynamic'
import { Metadata } from 'next'


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
        <div className='w-full'>
            <div className="max_width">
                <MainFaqs />
            </div>
        </div>
    )
}

export default page