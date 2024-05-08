import dynamic from 'next/dynamic'
const Explore = dynamic(() => import("@/Components/PageComponent/HomeComponents/Explore"))
const Testimonials = dynamic(() => import("@/Components/PageComponent/HomeComponents/Testimonials"), { ssr: true, loading: () => <Skeleton height={500} /> })
const Catagory = dynamic(() => import("@/Components/PageComponent/HomeComponents/Catagory"))
import Hero from '@/Components/PageComponent/HomeComponents/Hero'
import React from 'react'
const Blogs = dynamic(() => import("@/Components/PageComponent/HomeComponents/Blogs"))
const VideoLibary = dynamic(() => import("@/Components/PageComponent/HomeComponents/VidoeLibary"))
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Metadata } from 'next'
import { fetchGetRequest } from '@/Components/lib/Helper'
import Skeleton from 'react-loading-skeleton'
const ProductSlider = dynamic(() => import("@/Components/PageComponent/HomeComponents/ProductSlider"))



const page = () => {

  return (
    <div className='overflow-hidden w-full'>
      <Hero />
      <Catagory />
      <ProductSlider />
      <Explore />
      <Testimonials />
      <Blogs />
      <VideoLibary />
    </div>
  )
}

export default page