import React from 'react'
import { Cn } from '../lib/Helper'

const Texts = ({ text, className }: { text: string; className: string }) => {
    return (
        <p className={Cn(` text-[15px] ${className}`)}>{text}</p>
    )
}

export default Texts

export const SeconedHead = ({ text, className }: { text: string; className: string }) => {
    return (
        <h4 className={Cn(` text-[20px] ${className}`)}>{text}</h4>
    )
}
