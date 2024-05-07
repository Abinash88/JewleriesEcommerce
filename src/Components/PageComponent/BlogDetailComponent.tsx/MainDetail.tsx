
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import BlogContent from './BlogContent'
import Sidebar from './Sidebar'
import { MainPostDatas } from '@/DataSource/Types'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import { ChangeToRealDate, fetchGetRequest } from '@/Components/lib/Helper'

const MainDetail = async ({ slug }: { slug: string }) => {

  const fetchData: MainPostDatas = await fetchGetRequest({ endpoint: `posts/${slug}` })

  return (
    <div className='w-full'>
      <div className="max_width mb-[40px] fixed_head_style">
        {fetchData ?
          <div className="flex items-center py-[28px] gap-[8px]">
            <Link href={"/media-center"} className="text-zinc-900 text-base font-normal font-['Inter'] leadig-relaxed">Media Center</Link>
            <FaChevronRight className='text-zinc-700 text-base font-normal' />
            <h5 className="text-teal-800 text-base font-normal font-['Inter'] leading-relaxed">{fetchData?.title}</h5>
          </div>
          :
          <Skeleton width={200} height={50} />
        }

        <div className="w-full h-[338px]">
          {fetchData ?
            <Image src={fetchData?.image?.file as StaticImageData} loading='lazy' width={1500} height={500}
              className='w-full h-full rounded-[32px] object-cover'
              alt={fetchData?.title || "blog images"} />
            :
            <Skeleton style={{ margin: '20px 0' }} borderRadius={40} height={350} />
          }
        </div>

        <div className="my-[60px] flex lg:flex-row flex-col gap-[30px] md:gap-[40px] items-start justify-between">
          <h2 className="w-full flex-1 text-zinc-900 text-[30px] lg:text-[40px] font-normal font-['Epilogue'] leading-[52px]">
            {fetchData?.title || <Skeleton borderRadius={10} height={50} />}
          </h2>

          <div className="lg:w-[400px] w-full flex items-start gap-4 flex-col justify-between">
            <h5 className=" flex items-start justify-between w-full ">
              <span className="text-gray-500 text-sm font-bold font-['Inter'] leading-snug">
                {fetchData ? 'By' : <Skeleton width={100} borderRadius={10} height={30} />}
              </span>
              <span className="text-zinc-900 text-sm font-normal font-['Inter'] leading-snug">
                {fetchData?.post_by || <Skeleton width={100} borderRadius={10} height={30} />}
              </span>
            </h5>

            <h5 className=" flex items-start justify-between w-full ">
              <span className="text-gray-500 text-sm font-bold font-['Inter'] leading-snug">
                {fetchData ? "Post Date " : <Skeleton width={100} borderRadius={10} height={30} />}
              </span>
              <span className="text-zinc-900 text-sm font-normal font-['Inter'] leading-snug">
                {
                  fetchData && ChangeToRealDate(fetchData?.created_at) || <Skeleton width={100} borderRadius={10} height={30} />
                }
              </span>
            </h5>

            <h5 className=" flex items-start justify-between w-full ">
              <span className="text-gray-500 text-sm font-bold font-['Inter'] leading-snug">
                {fetchData ? "Categories" : <Skeleton width={100} borderRadius={10} height={30} />}
              </span>

              <span className="text-zinc-900 text-sm font-normal font-['Inter'] leading-snug flex-wrap flex items-center gap-2">
                {
                  fetchData ? fetchData?.categories?.map((item, index) => {
                    return (
                      <div key={index} className="relative bg-white py-1 px-2 rounded-[14px] border 
                      hover:bg-green-700 hover:text-white cursor-pointer border-green-700 text-green-700 
                      text-[11px] font-normal font-['Inter'] leading-[18px]">
                        {item?.name}
                      </div>
                    )
                  })
                    :
                    <Skeleton width={100} borderRadius={10} height={30} />
                }
              </span>
            </h5>
          </div>
        </div>
        <div className="flex items-start gap-[110px] lg:flex-row flex-col justify-between">
          <div className="flex-1 transform translate-y-[0px] md:translate-y-[-40px] xl:translate-y-[-60px] lg:w-auto w-full">
            <BlogContent fetchData={fetchData} />
          </div>
          <div className="lg:w-[500px] w-full sticky top-[50px]">
            <Sidebar singleData={fetchData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainDetail