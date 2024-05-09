import TopHeaders from '@/Components/PageComponent/CatagoryComponent/TopHeaders'
import React from 'react'
import Background from "@/Assests/Products/others.png"
import { Metadata } from 'next'
import MainLogin from '@/Components/PageComponent/LoginComponents/MainLogin'


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
    <div className='w-full '>
      <MainLogin />
    </div>
  )
}

export default page