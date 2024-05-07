import Image from 'next/image'
import React from 'react'
import Surgery from "../../../Assests/HomeImages/Eplore/surgery.png"
import { ContactData } from '@/DataSource/StaticData'
import ContactForm from './ContactForm'
import { HtmlToText, fetchGetRequest } from '@/Components/lib/Helper'
import { ContactTypes, DepartmentTypes, DoctorTypes } from '@/DataSource/Types'
import Skeleton from 'react-loading-skeleton'

const MainContact = async () => {

    const fetchData: ContactTypes = await fetchGetRequest({ endpoint: 'contact-info/' })
    const doctor: DoctorTypes = await fetchGetRequest({ endpoint: 'doctor/' })
    const department: DepartmentTypes = await fetchGetRequest({ endpoint: 'department/' })

    const topContact = [
        {
            title: "Located At",
            name: fetchData?.contact_info?.addressline1
        },
        {
            title: "Call",
            name: fetchData?.contact_info?.phone
        },
        {
            title: "Email Us",
            name: fetchData?.contact_info?.email
        },
    ]

    return (
        <div className="flex flex-col items-start">
            <div className='w-full xl:flex-row flex-col flex items-start my-[40px] gap-[27px]'>

                <div className="left flex flex-col w-full flex-1">
                    <div className="flex items-center w-full gap-[10px] lg:gap-[24px]  flex-wrap lg:flex-row flex-col justify-between">
                        {fetchData ?
                            topContact?.map((item, index) => {
                                return (
                                    <div key={index} className={`${index === 0 ? "lg:w-[28%] w-full  pr-[10px]" : index === 1 ? "lg:w-[48%] w-full   flex-1 pr-5 " : "lg:w-[19%]  flex-1  w-full "} py-2.5  gap-1 pl-4 bg-emerald-50 rounded-lg flex-col justify-start items-start inline-flex`}>
                                        <h4 className="text-teal-800 text-xl font-semibold font-['Inter'] uppercase leading-tight">{item?.title}</h4>
                                        <h3 className="text-zinc-900 text-md font-semibold font-['Inter'] leading-[30px]">{item?.name}</h3>
                                    </div>
                                )
                            })
                            :
                            <>
                                <Skeleton direction='rtl' height={80} width={300} />
                                <Skeleton direction='rtl' height={80} width={300} />
                                <Skeleton direction='rtl' height={80} width={300} />
                            </>
                        }
                    </div>
                    <div className="w-full flex lg:flex-row relative flex-col-reverse mt-[61px] gap-[75px] items-start justify-center">
                        <div className="w-[232px] h-[531px] left-[50%] transform translate-x-[-50%] lg:translate-x-[0%] lg:static absolute">
                            {
                                fetchData ?
                                    <Image src={ContactData[0]?.images.contactDoctor} alt='' className='w-full lg:opacity-100 opacity-10 object-cover h-full' />
                                    :
                                    <Skeleton direction='rtl' height={531} width={232} />
                            }
                        </div>
                        <div className="flex-1 w-full lg:w-auto">
                            {
                                fetchData ?
                                    <ContactForm doctor={doctor} department={department} />
                                    :
                                    <Skeleton direction='rtl' style={{ marginTop: "20px" }} count={7} height={60} />
                            }
                        </div>
                    </div>
                </div>

                <div className="xl:w-[305px] w-full">
                    {
                        fetchData ?
                            <div className="w-full relative h-[549px]">
                                <div className="w-[76px] right-2 top-2 h-7 absolute flex items-center justify-center bg-white text-center rounded-[14px]">
                                    <div className="  text-zinc-950 text-xs font-medium font-['Inter'] leading-tight">30% Off</div>
                                </div>
                                <Image src={Surgery} alt='surger image' className='w-full h-full object-cover rounded-xl' />
                            </div>
                            :
                            <Skeleton direction='rtl' height={549} />
                    }
                </div>
            </div >
            <div className="w-full">
                <h3 className="text-zinc-900 text-[30px] lg:text-[32px] mb-[32px] font-bold font-['Epilogue'] leading-[48px]">Locate Us</h3>
                <div className="w-full  h-[479px]">
                    {HtmlToText(fetchData?.contact_info?.google_maps) || <Skeleton height={479} />}

                </div>
            </div>
        </div >
    )
}

export default MainContact