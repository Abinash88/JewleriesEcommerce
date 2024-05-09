import React from 'react'
import { Metadata } from 'next';
import MainDetailContainer from '@/Components/PageComponent/ProductDetailComponent/MainDetailContainer';

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
        <div className='w-full'>
            <div className=" ">
                <MainDetailContainer params={params} />
            </div>
        </div>
    )
}

export default page