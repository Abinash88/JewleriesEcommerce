import React from 'react'

const FormErrors = ({ message }: { message: string | undefined }) => {
    return (
        <div className={`text-[15px]  px-1 text-red-500 font-["Inter"]`}>{message}</div>
    )
}

export default FormErrors