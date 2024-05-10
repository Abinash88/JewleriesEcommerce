import React, { InputHTMLAttributes } from 'react'
import { Cn } from '../lib/Helper'

interface InputBoxTypes extends InputHTMLAttributes<HTMLInputElement> {
    className: string;
    label: string;
    htmlfor: string;
    hideLabelImportant?: boolean;
}

const InputBox = React.forwardRef<HTMLInputElement, InputBoxTypes>(({ htmlfor, label, hideLabelImportant = false, className, ...props }, ref) => {
    return (
        <div className="flex flex-col gap-1">
            <label className='text-[14px] md:text-[15px] flex gap-1 items-center font-semibold font-["Roboto"] text-text' htmlFor={htmlfor}>
                <span className={Cn(` text-red-500 text-[16px] ${hideLabelImportant ? 'hidden' : ''} `)}>*</span>
                {label}
            </label>
            <input ref={ref} id={htmlfor} {...props} className={Cn(`py-[6px] px-2 border border-text focus:outline-none rounded-md ${className}`)} />
        </div>
    )
}
)
export default InputBox

InputBox.displayName = 'InputBox'