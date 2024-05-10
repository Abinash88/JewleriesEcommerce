import React from 'react'
import { Cn } from '../lib/Helper'

const FormErrors = ({ message, style }: { message: string | undefined, style?: string }) => {
    return (
        <div className={Cn(`text-[15px]  px-1 text-red-500 font-["Inter"] ${style}`)}>{message}</div>
    )
}

export default FormErrors