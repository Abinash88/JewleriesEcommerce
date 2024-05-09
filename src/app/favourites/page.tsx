import TopHeaders from '@/Components/PageComponent/CatagoryComponent/TopHeaders'
import React from 'react'
import Background from "../../Assests/Products/favourites.png";
import MainFavourites from '@/Components/PageComponent/PriceListComponent/MainFavourites';
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


const page = async () => {


    return (
        <div className='wfull fixed_head_style'>
            <TopHeaders style='h-[220px]' BackgroundImage={Background} />
            <div className="max_width mb-16">
                <MainFavourites />
            </div>
        </div>
    )
}

export default page