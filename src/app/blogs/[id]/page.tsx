import MainDetail from '@/Components/PageComponent/BlogDetailComponent.tsx/MainDetail'
import { fetchGetRequest } from '@/Components/lib/Helper';
import { MainPostDatas } from '@/DataSource/Types';
import { Metadata } from 'next';
import React from 'react'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {

    const { id } = params;

    const fetchData: MainPostDatas = await fetchGetRequest({ endpoint: `posts/${id}` })
    return {
        title: fetchData?.title || "Blogs - Charak Memorial Hospital",
        //@ts-ignore
        authors: fetchData?.seo?.meta_author || "admin",
        canonical: fetchData?.seo?.canonical || "",

        keywords: fetchData?.seo?.keywords || "",
        openGraph: {
            locale: "en_US",
            type: fetchData?.seo?.og_type || "website",
            title: `${fetchData?.seo?.og_title}` || "",
            description: fetchData?.seo?.og_description || "",
            url: fetchData?.seo?.og_url || "",
            siteName: fetchData?.seo?.og_site_name || "",
            //@ts-ignore
            images: fetchData?.seo?.og_image?.file || "",
        },
        twitter: {
            title: fetchData?.seo?.twitter_title || "",
            description: fetchData?.seo?.meta_title || "",
            //@ts-ignore
            images: fetchData?.seo?.twitter_image?.file || "",
            card: fetchData?.seo?.twitter_card || "",
            creator: fetchData?.seo?.twitter_creator || "",
        }

    }
}


const page = ({ params }: { params: { id: string } }) => {
    return (
        <div className='w-full'>
            <MainDetail slug={params?.id} />
        </div>
    )
}

export default page