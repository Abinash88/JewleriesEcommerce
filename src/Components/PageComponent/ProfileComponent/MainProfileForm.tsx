"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { OrderFormDataTypes } from '@/DataSource/Types'
import FormErrors from '@/Components/UiComponent/FormErrors';
import InputBox from '@/Components/Ui/InputBox'
import { Button } from '@/Components/Ui/Button'
import { OrderSchema } from '@/Components/lib/FormSchema'
import { SeconedHead } from '@/Components/Ui/Texts'

const MainProfileForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<OrderFormDataTypes>({ resolver: zodResolver(OrderSchema) })

    const onSubmitForm: SubmitHandler<OrderFormDataTypes> = async (data) => {

        console.log(data)
        reset()
    }


    return (
        <div className='w-full'>
            <SeconedHead text="Hello's Riya!" className='text-left font-["Poly"] mb-5' />
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

                <div className="flex items-center mt-5 justify-center gap-8">
                    <Button type='submit' className='px-8'>
                        Edit
                    </Button>
                    <Button type='submit' className='px-8'>
                        Save
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default MainProfileForm