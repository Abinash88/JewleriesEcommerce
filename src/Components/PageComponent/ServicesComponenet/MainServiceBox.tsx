
"use client"

import { mainServicesDataTypes } from '@/DataSource/Types'
import Image from 'next/image'
import React from 'react'
import { Autoplay, FreeMode, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Skeleton from 'react-loading-skeleton'

const MainServiceBox = ({ fetchData }: { fetchData: mainServicesDataTypes }) => {

    return (
        <div className='w-full'>
            <div className="w-full flex flex-col gap-[35px]">
                <div className="flex w-full justify-start  flex-col items-start gap-[35px]">
                    <div className=" flex items-start justify-start">
                        {
                            !fetchData ?
                                <Skeleton height={300} />
                                :
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    modules={[Pagination, FreeMode, Scrollbar, Autoplay]}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={true}
                                    loop={true}
                                    className='lg:w-[450px]  w-full h-[229px]  border rounded-[32px] overflow-hidden'
                                >
                                    {
                                        fetchData?.service_images?.map((item, index) => {
                                            return (
                                                <SwiperSlide key={index} className={`w-[90%] h-full`}>
                                                    {!fetchData ?
                                                        <Skeleton height={229} />
                                                        :
                                                        < Image width={700} height={229} loading='lazy' src={item?.image?.file || ""}
                                                            alt={fetchData?.name} className='w-full object-cover  h-full' />
                                                    }
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                        }
                    </div>
                    {
                        !fetchData ?
                            <Skeleton height={30} count={5} />
                            :
                            <p className="text-justify text-zinc-900 text-[16px] lg:text-[16px] font-normal font-['Inter'] leading-[25px] lg:leading-[30px]">
                                {fetchData?.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore architecto repellendus aspernatur exercitationem harum? Quos accusamus error ea consequatur quod doloribus commodi in sunt atque, fugiat nesciunt molestias veniam rem veritatis, dolor minus impedit dolorem facilis nisi debitis iste optio voluptatum, nostrum laboriosam? Quidem architecto accusantium facere, provident mollitia molestias vero soluta nihil pariatur exercitationem perferendis cupiditate quo repellendus quisquam saepe consequatur assumenda impedit, dolorum voluptatem id ut quibusdam consectetur? Vitae, voluptatum? Fuga sint nobis eos iusto mollitia quod. Voluptatum distinctio aspernatur nisi saepe dignissimos mollitia deleniti corporis consequatur amet accusamus enim eius laborum nihil placeat velit ea iusto quas animi, tempora fugiat laboriosam nobis error quae! Impedit explicabo vitae quis ratione. Dolorum amet nesciunt cumque asperiores enim, numquam et in a quasi, neque porro laboriosam ea quis consequatur, recusandae nam omnis officiis sed sint iusto unde laborum magni mollitia voluptates. Adipisci, excepturi quibusdam! Nesciunt quia harum voluptatum illo dolore odit, cupiditate eaque neque voluptatem amet corrupti, dignissimos consequatur unde minima reprehenderit corporis ex magni optio praesentium! Et, pariatur eaque quisquam eum rem dignissimos, incidunt distinctio accusamus in voluptas consequuntur sequi aut sunt explicabo adipisci officia ullam autem animi quo temporibus voluptates ex? Eligendi dignissimos eaque ratione ullam quos.
                            </p>

                    }
                </div>

            </div>
        </div>
    )
}

export default MainServiceBox