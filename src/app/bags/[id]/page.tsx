import React from 'react'
import MainBags from '@/Components/PageComponent/BagsComponent/MainBags'
import { Metadata } from 'next';


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

const page = ({ params }: { params: { id: string } }) => {

    return (
        <div className='w-full fixed_head_style'>
            <div className="">
                <MainBags slug={params?.id} />
            </div>
        </div>
    )
}

export default page