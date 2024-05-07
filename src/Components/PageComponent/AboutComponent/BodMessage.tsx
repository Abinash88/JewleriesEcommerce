import { BodTypes } from '@/DataSource/Types'
import Image from 'next/image'
import React from 'react'
import { FaXmark } from 'react-icons/fa6'

const BodMessage = ({ message, setMessage }:
    {
        message: BodTypes | undefined,
        setMessage: React.Dispatch<React.SetStateAction<BodTypes | undefined>>
    }) => {
    return (
        <div className='w-full z-[50] flex items-center justify-center h-screen fixed top-0 left-0 right-0 bottom-0'>
            <div onClick={() => setMessage(undefined)} className="w-full backdrop-blur-sm bg-gray-800/35 z-0 h-full absolute top-0 left-0 right-0 bottom-0 "></div>
            <div style={{ boxShadow: "2px 2px 10px #D6D6D6" }} className="w-[95%] lg:w-[60%] h-[500px] overflow-y-auto  md:h-auto z-50 relative bg-white rounded-md p-5 md:p-10">
                <FaXmark onClick={() => setMessage(undefined)} className='p-2 text-[40px] absolute top-2 bg-gray-100 rounded-full right-2 text-gray-600 hover:scale-110 cursor-pointer ' />
                <div className=" w-[80px] md:w-[130px]  mx-auto mb-5">
                    <Image width={400} height={400} className='w-full h-full object-contain ' src={message?.image.file || ""} alt={message?.name || ""} />
                </div>
                <h3 className='md:text-[28px] text-[20px] text-gray-700 mb-7 text-center Epilogue font-semibold capitalize'>Message form {message?.name}</h3>
                <div className='w-full font-normal text-[15px] md:text-[17px] text-justify font-["Inter"] leading-[150%]'>
                    {
                        message?.message
                    }
                </div>
            </div>
        </div>
    )
}

export default BodMessage