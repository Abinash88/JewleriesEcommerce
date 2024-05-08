import dynamic from 'next/dynamic'
const BuyContainer = dynamic(() => import("@/Components/PageComponent/HomeComponents/BuyContainer"))
const Catagory = dynamic(() => import("@/Components/PageComponent/HomeComponents/Catagory"))
import Hero from '@/Components/PageComponent/HomeComponents/Hero'
import React from 'react'
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
      <BuyContainer />
    </div>
  )
}

export default page