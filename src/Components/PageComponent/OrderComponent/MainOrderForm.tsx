"use client"

import React, { useContext, useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { OrderFormDataTypes } from '@/DataSource/Types'
import FormErrors from '@/Components/UiComponent/FormErrors';
import ReCAPTCHA from "react-google-recaptcha";
import InputBox from '@/Components/Ui/InputBox'
import { toast } from 'react-toastify'
import { Button } from '@/Components/Ui/Button'
import { OrderSchema } from '@/Components/lib/FormSchema'
import PaymentOption from './PaymentOption'
import { ToggleTypes } from './MainOrderBox'
import { MyContext } from '@/Components/Context/Main'

const MainOrderForm = () => {
    const context = useContext(MyContext)

    const { register, handleSubmit, formState: { errors }, reset } = useForm<OrderFormDataTypes>({ resolver: zodResolver(OrderSchema) })
    const captcha = useRef<ReCAPTCHA>(null)

    const onSubmitForm: SubmitHandler<OrderFormDataTypes> = async (data) => {

        console.log(data)
        reset()
        context?.setTogglePopup((prev) => ({ toggle: true, popupType: 'CONFIRM' }))
    }


    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit(onSubmitForm)} action="" className='w-full flex flex-col  gap-[21px]'>
                <div className="w-full flex items-center md:flex-row flex-col gap-[20px] md:gap-[50px]">
                    <div className="w-full">
                        <InputBox type="text" {...register("firstname")} name='firstname' className='' label='First Name' htmlfor='First Name' />
                        {
                            errors && <FormErrors message={errors?.firstname?.message} />
                        }
                    </div>
                    <div className="w-full">
                        <InputBox type="text" {...register("lastname")} name='lastname' className='' label='Last Name' htmlfor='Last Name' />
                        {
                            errors && <FormErrors message={errors?.lastname?.message} />
                        }
                    </div>
                </div>
                <div className="w-full flex items-center md:flex-row flex-col gap-[20px] md:gap-[50px]">
                    <div className="w-full">
                        <InputBox type="email"  {...register("email")} name='email' className='' label='Email' htmlfor='Email' />
                        {
                            errors && <FormErrors message={errors?.email?.message} />
                        }
                    </div>
                    <div className="w-full">
                        <InputBox type="number"  {...register("phone")} name='phone' className='' label='Number' htmlfor='Number' />
                        {
                            errors && <FormErrors message={errors?.phone?.message} />
                        }
                    </div>
                </div>
                <div className="w-full flex items-center md:flex-row flex-col gap-[20px] md:gap-[50px]">
                    <div className="w-full">
                        <InputBox type="text"  {...register("city")} name='city' className='' label='City' htmlfor='City' />
                        {
                            errors && <FormErrors message={errors?.city?.message} />
                        }
                    </div>
                    <div className="w-full">
                        <InputBox type="text"  {...register("address")} name='address' className='' label='Address' htmlfor='Address' />
                        {
                            errors && <FormErrors message={errors?.address?.message} />
                        }
                    </div>
                </div>

                <div className="mt-8 w-full ">
                    <PaymentOption />
                </div>

            </form>
        </div>
    )
}

export default MainOrderForm