"use client"

import SearchTitle from '@/Components/UiComponent/SearchTitle';
import { HtmlToText } from '@/Components/lib/Helper';
import { searchDataTypes } from '@/DataSource/Types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { IoIosSearch } from 'react-icons/io';
import Skeleton from 'react-loading-skeleton';
import { useRouter } from 'next/navigation';
import PostSearch from './PostSearch';
import VacanciesSearch from './VacanciesSearch';
import ServicesSearch from './ServicesSearch';
import DoctorsSearch from './DoctorsSearch';


const MainSearch = ({ fetchData, slug }: { slug: string, fetchData: searchDataTypes }) => {
  const [checkInputFocus, setCheckInputFocus] = useState(false)
  const [search, setSearch] = useState<string>("");
  const router = useRouter();


  useEffect(() => {
    if (typeof window === "undefined") return;
    const ClickEnterKey = (ev: KeyboardEvent) => {
      if (ev.key === "Enter") {
        if (search?.length >= 2 && checkInputFocus) {
          router.push(`/search/${search}`)
        }
      }
    }

    document.addEventListener("keyup", ClickEnterKey)
    return () => document.removeEventListener("keyup", ClickEnterKey);

    //eslint-disable-next-line
  }, [search, checkInputFocus])



  return (
    <div className='w-full my-10'>
      <div className="w-full">
        <div className="w-full h-[100px] flex items-center ">
          <h3 className='capitalize w-full  font-normal text-center text-[22px] md:text-[28px] font-["Inter"]'>
            {!fetchData ?
              <Skeleton width={200} height={50} />
              :
              <span>
                Search: <span className='font-semibold '>{fetchData?.searched_query}</span>
              </span>
            }
          </h3>
        </div>

        <div className="w-full flex items-center justify-center  mb-8 lg:my-8">
          {!fetchData ?
            <Skeleton height={50} width={800} />
            :
            <div className="md:w-[60%] w-full h-[55px] relative bg-white rounded-lg border border-zinc-200">
              {
                search?.length >= 2 ?
                  <IoIosSearch onClick={() => {
                    if (search?.length >= 2) {
                      router.push(`/search/${search}`)
                    }
                  }} className='absolute z-30  top-[50%] left-3 transform translate-y-[-50%] 
                   h-6 w-6 cursor-pointer text-sec_title_color' />
                  :
                  <IoIosSearch className='absolute z-30  top-[50%] left-3 transform translate-y-[-50%] 
              h-6 w-6 cursor-pointer text-sec_title_color' />
              }
              <input onFocus={() => setCheckInputFocus(true)} onBlur={() => setCheckInputFocus(false)}
                value={search} onChange={(e) => setSearch(e?.target?.value)}
                className=" absolute text-neutral-500 text-[16px] font-normal placeholder:text-[16px] 
              focus:outline-none w-[80%] h-full right-4 font-['Inter'] leading-7" type="search"
                placeholder="Search for Doctors and Services" ></input>
              <div className="w-6 h-6 left-[20px] top-[14px] absolute" />
            </div>
          }
        </div>


        {
          !fetchData ?
            <Skeleton className='w-full h-[100px]' count={4} />
            :
            <div className="w-full my-8  flex flex-col gap-8">
              {/* Department data search */}
              {fetchData && fetchData?.departments?.length >= 1 ?
                <div className="w-full">
                  <SearchTitle dataLength={fetchData?.departments?.length} name='Department' />
                  <div className="w-full">
                    {
                      fetchData?.departments?.map((item, index) => {
                        return (
                          <Link href={`/departments/${item?.slug}`} key={index} className='flex md:flex-row flex-col  mt-5 bg-gray-50 md:py-4 py-2 md:px-8 items-start md:items-center justify-between  px-4 gap-4'>
                            <div className="w-[60px] h-[60px] ">
                              <Image width={200} height={200} src={item?.image?.file} className='w-full rounded-full h-full object-cover' alt={item?.name} />
                            </div>
                            <div className="flex-1">
                              <h2 className='text-[18px] font-semibold mb-1 text-zinc-700'>{item?.name}</h2>
                              <p className='text-gray-500 w-full lg:w-[80%] mr-auto '>{HtmlToText(item?.description.substring(0, 200))}...</p>
                            </div>
                          </Link>
                        )
                      })
                    }
                  </div>
                </div>
                :
                null
              }


              {/* Blog data search */}
              <PostSearch fetchData={fetchData} />


              {/* Services data search */}
              <ServicesSearch fetchData={fetchData} />


              {/* Vacancies data search */}
              <VacanciesSearch fetchData={fetchData} />

              {/* Vacancies data search */}
              <DoctorsSearch fetchData={fetchData} />
            </div>
        }

        {
          fetchData
            && !fetchData?.departments?.length
            && !fetchData?.posts?.length
            && !fetchData?.services?.length
            && !fetchData?.vacancies?.length
            && !fetchData?.doctors?.length ?
            <div className="w-full flex items-center justify-center py-10">
              <h3 className='text-2xl text-gray-400  '>No Result Found of search: <span className='text-gray-600' > {slug}</span></h3>
            </div>
            :
            null
        }
      </div>
    </div>
  )
}

export default MainSearch