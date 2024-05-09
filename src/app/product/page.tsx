import Catagory from '@/Components/PageComponent/CatagoryComponent/MainCatagory'
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
        <div className='w-full fixed_head_style'>
            <Catagory />
        </div>
    )
}

export default page