import React from 'react'
const MainAbout = dynamic(() => import("@/Components/PageComponent/AboutComponent/MainAbout"))
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


const page = () => {

    return (
        <div className='w-full fixed_head_style '>
            <div className="max_width">
                <MainAbout />
            </div>
        </div>
    )

}



export default page