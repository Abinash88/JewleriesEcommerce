import React from 'react'
import { Cn } from '../lib/Helper'

const Texts = ({ text, className }: { text: string; className: string }) => {
    return (
        <p className={Cn(` text-[13px] md:text-[15px] ${className}`)}>{text}</p>
    )
}

export default Texts

export const SmallHead = ({ text, className }: { text: string; className?: string }) => {
    return (
        <h4 className={Cn(` text-[16px] md:text-[18px] lg:text-[20px] ${className}`)}>{text}</h4>
    )
}


export const SeconedHead = ({ text, className }: { text: string; className?: string }) => {
    return (
        <h3 className={Cn(` text-center w-full  font-normal  leading-9 font-["Roboto"] text-[18px] md:text-[22px] lg:text-[24px] ${className}`)}>{text}</h3>
    )
}


export const MainTextHead = ({ text, className }: { text: string; className?: string }) => {
    return (
        <h1 className={Cn(` text-center  w-full text-[28px] md:text-[35px] lg:text-[48px] font-normal  ${className}`)}>{text}</h1>
    )
}
