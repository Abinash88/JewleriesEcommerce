import dynamic from 'next/dynamic'
const Explore = dynamic(() => import("@/Components/PageComponent/HomeComponents/Explore"))
const Testimonials = dynamic(() => import("@/Components/PageComponent/HomeComponents/Testimonials"), { ssr: true, loading: () => <Skeleton height={500} /> })
const WhyChoose = dynamic(() => import("@/Components/PageComponent/HomeComponents/WhyChoose"))
import Hero from '@/Components/PageComponent/HomeComponents/Hero'
import React from 'react'
const Blogs = dynamic(() => import("@/Components/PageComponent/HomeComponents/Blogs"))
const VideoLibary = dynamic(() => import("@/Components/PageComponent/HomeComponents/VidoeLibary"))
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Metadata } from 'next'
import { fetchGetRequest } from '@/Components/lib/Helper'
import Skeleton from 'react-loading-skeleton'
const PartnerSlider = dynamic(() => import("@/Components/PageComponent/HomeComponents/PartnerSlider"))



const page = () => {

  return (
    <div className='overflow-hidden w-full'>
      <Hero />
      <WhyChoose />
      <PartnerSlider />
      <Explore />
      <Testimonials />
      <Blogs />
      <VideoLibary />
    </div>
  )
}

export default page