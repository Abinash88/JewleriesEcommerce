import { DoctorDetailTypes } from '@/DataSource/Types';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const TopAboutDoctor = ({ fetchData }: { fetchData: DoctorDetailTypes | undefined }) => {

    return (
        <div className='w-full mb-[32px]'>
            <div className="  flex gap-[36px] xl:flex-row flex-col items-start justify-between">
                <div style={{ boxShadow: `0px 0px 5px #EAEAEA` }} className="w-full flex-1 md:flex-row justify-center flex-col gap-10 lg:gap-[8px] p-[18px] h-[135px] flex items-center relative bg-white rounded-md ">
                    <div className="lg:w-[88px] w-[80%] sm:w-[250px]  lg:h-[103px] md:h-[250px]">
                        <Image src={fetchData?.image?.file as StaticImport} alt='' width={250} height={250} className='w-full h-full object-cover bg-gray-50' />
                    </div>
                    <div className="flex items-start gap-5 flex-1 lg:flex-row flex-col">
                        <div className="lg:ml-[10px] flex flex-col text-center lg:text-left lg:w-[259px]">
                            <h3 className="text-zinc-900 text-xl font-bold font-['Epilogue'] text-center md:text-left leading-[30px]">{fetchData?.name}</h3>
                            <h6 className="text-gray-600 text-base md:justify-start justify-center  font-normal flex gap-2 font-['Inter'] leading-relaxed">
                                {
                                    fetchData?.degrees?.map((item, index) => {
                                        return (<p key={index} className="text-gray-600 capitalize text-base font-normal font-['Inter'] leading-relaxed">
                                            {item?.name},
                                        </p>)
                                    })
                                }
                            </h6>
                            <h6 className="text-gray-600 text-base font-normal font-['Inter'] leading-relaxed">{fetchData?.work_experiences && fetchData?.work_experiences?.[0]?.position}</h6>
                        </div>
                        <div className="lg:ml-[50px] gap-1 flex-col flex lg:justify-center w-full text-center md:text-left flex-1">
                            <h5 className="text-gray-600 text-base font-normal font-['Inter'] leading-relaxed">Nmc No: {fetchData?.details?.nmc_number}</h5>
                            <div className="text-gray-600 text-base font-normal font-['Inter'] leading-relaxed">Languages: {" "}
                                {
                                    fetchData?.details?.languages
                                }
                            </div>
                        </div>
                        <div className="lg:ml-[50px] w-full flex-1 justify-center md:justify-start flex lg:justify-end">
                            <Link href={'/contact-us'} className=" px-3 lg:px-0 lg:w-[172px] h-11 relative bg-teal-800 rounded 
                            top-[9px] text-white text-base flex items-center justify-center font-normal font-['Inter'] leading-relaxed">
                                <span> Book Appointment</span>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="xl:w-[380px] w-full h-[100px] lg:h-[135px] flex items-center justify-center relative bg-white rounded-md shadow">
                    <div className="p-2.5  justify-start items-start gap-2.5 inline-flex">
                        <div className="px-5 py-3 left-0 top-0  bg-emerald-50 rounded justify-start items-center gap-2 flex">
                            <div className="w-5 h-5 relative" />
                            <div className="text-teal-800 text-lg font-normal font-['Inter'] leading-7">{fetchData?.experience} Years+</div>
                        </div>
                        <div className="px-[26px] py-3  bg-teal-800 rounded justify-center items-center gap-2.5 flex">
                            <div>
                                <span className="text-white text-lg font-normal font-['Mukta'] leading-7">रु</span>
                                <span className="text-white text-lg font-normal font-['Inter'] leading-7">.{fetchData?.visting_charge}/-</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopAboutDoctor