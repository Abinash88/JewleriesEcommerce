import { DoctorDetailTypes } from '@/DataSource/Types'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const LeftDoctorContent = ({ fetchData }: { fetchData: DoctorDetailTypes | undefined }) => {
    return (
        <div className='w-full flex-1'>
            {
                !fetchData ?
                    <Skeleton style={{ marginTop: '40px' }} count={7} height={40} />
                    :
                    <div className="w-full">
                        <h3   className="text-zinc-900 text-base font-bold py-[8px] border-b font-['Inter'] leading-relaxed">About {fetchData?.name}</h3>
                        <div className="mt-[26px]">
                            <p   className=" w-full text-justify text-zinc-900 text-sm font-normal font-['Inter'] leading-snug">{fetchData?.details?.description}</p>
                        </div>
                        <div   className="mt-[16px] gap-[8px] flex flex-col">
                            <h4 className="text-zinc-900 text-base font-bold font-['Inter'] leading-relaxed">Speciality And Areas Of Interest</h4>
                            <h6 className="text-zinc-700 text-sm font-normal font-['Inter'] uppercase leading-snug">{fetchData?.position}</h6>
                        </div>
                        <div   className="mt-[16px] gap-[8px] flex flex-col">
                            <h4 className="text-zinc-900 text-base font-bold font-['Inter'] leading-relaxed">Work Experience</h4>
                            <h6 className="text-zinc-700 text-sm font-normal font-['Inter'] flex flex-col gap-3 leading-snug">
                                {
                                    fetchData?.work_experiences?.map((item, index) => {
                                        return (
                                            <div key={index} className='uppercase leading-[150%]'>
                                                <h6>{item?.position} {" At "}</h6>
                                                <h6>{item?.hospital_name}</h6>
                                                <h5>({item?.start_date + " / " + item?.end_date})</h5>
                                            </div>
                                        )
                                    })
                                }
                            </h6>
                        </div>
                        <div   className="mt-[16px] gap-[8px] flex flex-col">
                            <h4 className="text-zinc-900 text-base font-bold font-['Inter'] leading-relaxed">Awards And Achievements</h4>
                            <h6 className="text-zinc-700 text-sm font-normal font-['Inter'] gap-2 leading-snug">
                                {
                                    fetchData?.awards?.map((item, index) => {
                                        return (<div key={index} className=''>
                                            {item?.award_name}{" "} ({item?.award_year})
                                        </div>)
                                    })
                                }
                            </h6>
                        </div>
                        <div  className="mt-[16px] gap-[8px] flex flex-col">
                            <h4 className="text-zinc-900 text-base font-bold font-['Inter'] leading-relaxed">Professional Memberships And Certifications</h4>
                            <div className="gap-[2px] flex flex-col">
                                {
                                    fetchData?.memberships.map((item, index) => {
                                        return (<h6 key={index} className="text-zinc-700 uppercase text-sm font-normal font-['Inter'] leading-snug">
                                            {
                                                item?.membership_name
                                            }
                                        </h6>)

                                    })
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default LeftDoctorContent