import MainSearch from '@/Components/PageComponent/SearchComponent/MainSearch'
import { fetchGetRequest } from '@/Components/lib/Helper'
import { SeoTypes, searchDataTypes } from '@/DataSource/Types'
import { Metadata } from 'next'
import React from 'react'


export async function generateMetadata(): Promise<Metadata> {

    const fetchData: SeoTypes = await fetchGetRequest({ endpoint: `seo/Search` })

    return {
        title: fetchData?.meta_title || 'Contact - Charak Memorial Hospital',
        //@ts-ignore
        authors: fetchData?.meta_author || 'Charak Memorial Hospital',
        canonical: fetchData?.canonical || "",
        description: fetchData?.meta_description || `CHARAK MEMORIAL HOSPITAL PVT. LTD. (CMH) was founded with the principles of Social equity in health care. CMH is registered and established on 10th of Mangsir 2069 and is thriving to provide health services in hygienic way as well as modernization in its system. The Hospital is located presently in a centre of Pokhara, best suited for providing prompt health services.`,

        keywords: fetchData?.keywords || [""],

        openGraph: {
            locale: "en_US",
            type: fetchData?.og_type || "website",
            title: fetchData?.og_title || "Charak Memorial Hospital",
            description: fetchData?.og_description || "",
            url: fetchData?.og_url || "",
            siteName: fetchData?.og_site_name || "",
            //@ts-ignore
            images: fetchData?.og_image || "",
        },


        twitter: {
            title: fetchData?.twitter_title || "",
            description: fetchData?.meta_title || "",
            site: fetchData?.twitter_site || "",
            //@ts-ignore
            images: fetchData?.twitter_image?.file || "",
            card: fetchData?.twitter_card || "",
            creator: fetchData?.twitter_creator || "",
        }
    }
}


const page = async ({ params }: { params: { id: string } }) => {
    const fetchData: searchDataTypes = await fetchGetRequest({ endpoint: `search/?search=${params?.id}` });
    return (
        <div className='w-full fixed_head_style'>
            <div className="max_width">
                <MainSearch slug={params?.id} fetchData={fetchData} />
            </div>
        </div>
    )
}

export default page