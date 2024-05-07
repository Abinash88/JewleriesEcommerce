
import { fetchGetRequest } from '@/Components/lib/Helper'
import { DepartmentTypes } from '@/DataSource/Types'
import Link from 'next/link'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const LeftSidebar = async ({ slug: param }: { slug: string }) => {
    const fetchData: DepartmentTypes = await fetchGetRequest({ endpoint: `department/` });
    return (
        <div className='w-full'>
            {!fetchData ?
                <Skeleton height={30} style={{ marginRight: '10px' }} />
                :
                <h3 className="text-zinc-900  text-[25px] lg:text-[32px] font-bold font-['Epilogue'] leading-[48px]">Departments</h3>
            }
            <div className="mt-[5px] w-full lg:w-[70%] flex flex-col">
                {!fetchData ?
                    <Skeleton count={5} height={50} />
                    :
                    fetchData?.departments?.slice(0, 8)?.map((item, index) => {
                        if (item?.slug === param) return;
                        return (
                            <Link href={item?.slug} key={index} className='cursor-pointer hover:text-green-600 py-[15px] border-t-2'>
                                {item?.name}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LeftSidebar