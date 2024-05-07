import React from 'react'
const LeftTopService = dynamic(() => import("./LeftTopService"))
const AboutDetail = dynamic(() => import("./AboutDetail"))
import { AboutData } from '@/DataSource/StaticData'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { HtmlToText, fetchGetRequest } from '@/Components/lib/Helper'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { AboutTypes } from '@/DataSource/Types'


const AboutLeft = async () => {


  const fetchData: AboutTypes = await fetchGetRequest({ endpoint: 'about-us/' })
  const aboutContent = [{ desc: fetchData?.about_us?.mission }, { desc: fetchData?.about_us?.vision }, { desc: fetchData?.about_us?.values }]

  return (
    <div className='w-full'>

      <LeftTopService />
      <AboutDetail />

      <div className="grid grid-cols-3 mt-[40px] gap-[20px]">
        {
          AboutData[0]?.pointBox.map((item, index) => {
            if (!fetchData) return (<Skeleton key={index} width={'100%'} height={300} />)
            return (
              <div key={index} className={`
              ${index === 0 ? "xl:col-span-1 col-span-3 bg-emerald-100 " : index === 1 ? " col-span-3 xl:col-span-2 bg-cyan-100" : " col-span-3 lg:col-span-3 bg-opacity-10 bg-red-500"} flex items-start justify-between lg:items-center lg:flex-row flex-col w-full xl:h-[310px] h-auto p-[30px] rounded-[20px] relative`}>
                <div className={` lg:w-[80%] relative z-10`}>
                  <h3 className="text-zinc-700 text-[32px] font-bold font-['Epilogue'] leading-[41.60px]">{item?.title}</h3>
                  <div className="text-zinc-700  text-left w-[85%] text-base font-normal font-['Inter'] leading-relaxed">{HtmlToText(aboutContent[index]?.desc)}</div>
                </div>
                <div className={`${index === 0 ? "w-[120px] h-[100px] flex items-end  float-start right-0 bottom-0 " : index === 1 ? "w-[245px] h-[200px] right-2 bottom-4" : "w-[166px] h-[200px] right-4 bottom-3"} xl:absolute  z-0`}>
                  <Image className={` w-full h-full object-cover`} width={500} height={500} src={item?.image} alt={`${item?.title} image`} />
                </div>
              </div>
            )
          })


        }
      </div>
    </div>
  )
}

export default AboutLeft