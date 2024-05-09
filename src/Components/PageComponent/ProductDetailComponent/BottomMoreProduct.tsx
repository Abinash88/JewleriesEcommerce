'use client'

import { CatagoryProduct } from '@/DataSource/StaticData'
import React from 'react'
import SingleProduct from '../CatagoryComponent/SingleProduct'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SeconedHead } from '@/Components/Ui/Texts'

const BottomMoreProduct = () => {
    return (
        <div className='w-full flex-1'>
            <SeconedHead text='Similar Product' className='mb-4 lg:text0' />
            <div className="w-full md:flex-row  bg-gray-100 py-8 flex-col flex items-start">
                <div className=" flex-1 flex items-center ">
                    {
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            modules={[Navigation, Autoplay]}
                            autoplay={false}
                            loop={true}
                            breakpoints={{
                                // 320: {
                                //     slidesPerView: 1,
                                //     spaceBetween: 10,
                                // },
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                1000: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                                // 1500: {
                                //     slidesPerView: 5,
                                //     spaceBetween: 20,
                                // }
                            }}
                            className='flex items-center gap-5  justify-center '
                        >
                            {
                                CatagoryProduct?.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index} className={` w-[247.21px] !h-[244.89px]  cursor-grab  !flex items-center  m-auto p-2 rounded-md `}>
                                            <SingleProduct item={item} index={index} key={index} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>

                    }
                </div>
            </div>
        </div >
    )
}

export default BottomMoreProduct