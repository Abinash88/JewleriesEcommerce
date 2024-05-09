"use client"

import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { zodResolver } from "@hookform/resolvers/zod"
import { AccountDataTypes } from '@/DataSource/Types'
import FormErrors from '@/Components/UiComponent/FormErrors';
import InputBox from '@/Components/Ui/InputBox'
import { Button } from '@/Components/Ui/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginSchema } from '@/Components/lib/FormSchema'

const MainLoginForm = () => {


    const { register, handleSubmit, formState: { errors }, reset } = useForm<AccountDataTypes>({ resolver: zodResolver(LoginSchema) })

    const onSubmitForm: SubmitHandler<AccountDataTypes> = async (data) => {
        console.log(data)
        reset()
    }


    return (
        <div className='w-[90%] md:w-[60%] lg:w-[35%] mx-auto justify-center flex '>
            <form onSubmit={handleSubmit(onSubmitForm)} action="" className='w-full flex flex-col  gap-[21px]'>
                <div className="w-full flex items-center flex-col gap-[15px]">
                    <div className="w-full">
                        <InputBox type="email"  {...register("email")} name='email' className='' label='Email' htmlfor='Email' />
                        {
                            errors && <FormErrors message={errors?.email?.message} />
                        }
                    </div>
                    <div className="w-full">
                        <InputBox type="password"  {...register("password")} name='password' className='' label='Password' htmlfor='Password' />
                        {
                            errors && <FormErrors message={errors?.password?.message} />
                        }
                    </div>
                </div>


                <Button type='submit' className='flex gap-2 rounded-xl text-[14px] mx-auto'>
                    <span className="text-white text-base  font-normal font-['Inter'] leading-tight">Submit</span>
                    <FaArrowRight className='text-5 text-white' />
                </Button>

            </form>
        </div>
    )
}

export default MainLoginForm