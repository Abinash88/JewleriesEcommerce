import MainProfile from '@/Components/PageComponent/ProfileComponent/MainProfile'
import { Metadata } from 'next'
import React from 'react'


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
    <div className='fixed_head_style'>
      <MainProfile />
    </div>
  )
}

export default page