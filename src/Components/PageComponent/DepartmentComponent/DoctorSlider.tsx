import React from 'react'
import { DepartmentTypes, MainDepartmentDataTypes } from '@/DataSource/Types';
import Skeleton from 'react-loading-skeleton';
import { fetchGetRequest } from '@/Components/lib/Helper';
import MainDocterSlider from './MainDocterSlider';


const DoctorSlider = async ({ slug }: { slug: string }) => {


    const fetchData: DepartmentTypes = await fetchGetRequest({ endpoint: `hospital-services/` })
    const doctors: MainDepartmentDataTypes = await fetchGetRequest({ endpoint: `department/${slug}` })

    return (
        <div className='w-full mt-[40px]'>
            <div className=" w-full">
                {!fetchData ?
                    <Skeleton height={50} />
                    :
                    <h3 className="text-zinc-900  text-[25px] lg:text-[32px] font-bold font-['Epilogue'] leading-[56px]">Doctors Available</h3>}
                {!fetchData ?
                    <Skeleton height={100} />
                    :
                    <MainDocterSlider doctors={doctors} slug={slug} />
                }

            </div>
        </div>
    )
}

export default DoctorSlider