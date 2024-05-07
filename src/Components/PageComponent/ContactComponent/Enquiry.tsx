"use client"


import { fetchPostRequest } from '@/Components/lib/Helper'
import React, { useRef, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { ContactDetailTypes, DepartmentTypes, DoctorTypes, FormEnqueryTypes } from '@/DataSource/Types'
import FormErrors from '@/Components/UiComponent/FormErrors'
import { toast } from 'react-toastify'
import ReCAPTCHA from "react-google-recaptcha";

const Enquery = ({ department, doctor, formType }: { department: DepartmentTypes, doctor: DoctorTypes; formType: string }) => {

    const schema = z.object({
        name: z.string().nonempty({ message: "Please fill up all the fields!" }).refine((data) => !/[!#$%^&*()+{}\[\]:;<>,.?/~\\-]/.test(data)),
        email: z.string().email().nonempty({ message: "Please fill up all the fields!" }).refine((data) => !/[!#$%^&*()+{}\[\]:;<>,?/~\\-]/.test(data)),
        phone: z.string().nonempty({ message: "Please fill up all the fields!" }).refine((data) => !/[!@#$%^&*()_+{}\[\]:;<>,.?/~\\-]/.test(data)),
        country: z.string().nonempty({ message: "Please fill up all the fields!" }).refine((data) => !/[!#$%^&*()_+{}\[\]:;<>,.?/~\\-]/.test(data)),
        speciality: z.preprocess((x) => Number.parseInt(x as string), z.number()),
        doctor: z.preprocess((x) => Number.parseInt(x as string), z.number()),
        message: z.string().nonempty({ message: "Please fill up all the fields!" }).refine((data) => !/[!@#$%^&*()_+{}\[\]:;<>,.?/~\\-]/.test(data)),
    })

    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<ContactDetailTypes>({ resolver: zodResolver(schema) })
    const [captchaId, setCaptchaId] = useState('')
    const captcha = useRef<ReCAPTCHA>(null)

    const onSubmitForm: SubmitHandler<ContactDetailTypes> = async (data) => {
        const inquery: FormEnqueryTypes = {
            full_name: data?.name,
            type_of_inquiry: formType.toLowerCase(),
            phone_number: data?.phone,
            email: data?.email,
            speciality: null,
            doctor: 1,
            message: data?.message,
        }

        const postData = await fetchPostRequest<FormEnqueryTypes>({ endpoint: "inquiries/", data: inquery });
        if (postData?.created_at) {
            reset()
            toast.success("Message Successfully Send")
            captcha.current?.reset();
            setCaptchaId('')
        } else {
            toast.error("Error Occured!")
        }
    }

    const handleChangeCaptcha = (data: string) => {
        if (data) {
            setCaptchaId(data);
        } else {
            setCaptchaId('')
        }
    }


    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit(onSubmitForm)} action="" className='w-full flex flex-col  gap-[21px]'>
                <div className="w-full flex items-center md:flex-row flex-col gap-[23px]">
                    <div className="w-full">
                        <input type="text" {...register("name")} name='name' placeholder='Full Name*' className='contactInput' />
                        {
                            errors && <FormErrors message={errors?.name?.message} />
                        }
                    </div>
                    <div className="w-full">
                        <input type="email"  {...register("email")} name='email' placeholder='Email Id*' className='contactInput' />
                        {
                            errors && <FormErrors message={errors?.email?.message} />
                        }
                    </div>
                </div>
                <div className="w-full flex items-center md:flex-row flex-col gap-[23px]">
                    <div className="w-full">
                        <input type="number"  {...register("phone")} name='phone' placeholder='Mobile Number*' className='contactInput' />
                        {
                            errors && <FormErrors message={errors?.phone?.message} />
                        }
                    </div>
                    <div className="w-full">
                        <input type="text"  {...register("country")} name='country' placeholder='country*' className='contactInput' />
                        {
                            errors && <FormErrors message={errors?.country?.message} />
                        }
                    </div>
                </div>
                <div className="w-full flex md:flex-row flex-col gap-[23px] items-center">
                    <div className="w-full">
                        <select  {...register("speciality")} className='contactInput'>
                            <option value="_select_">-Select-</option>
                            {
                                department?.departments?.map((item, index) => {
                                    return (
                                        <option value={item?.id} key={index} className=''>
                                            {item?.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        {
                            errors && <FormErrors message={errors?.speciality?.message} />
                        }
                    </div>
                    <div className="w-full">

                        <select {...register("doctor")} className='contactInput'>
                            <option value="_select_">-Select-</option>
                            {
                                doctor?.doctors?.map((item, index) => {
                                    return (
                                        <option value={item?.id} key={index} className=''>
                                            {item?.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        {
                            errors && <FormErrors message={errors?.doctor?.message} />
                        }
                    </div>
                </div>

                <div className="w-full">
                    <textarea  {...register("message")} name="message" id="message" className='contactInput py-3'
                        cols={20} rows={5} placeholder='Write down your message'></textarea>
                    {
                        errors && <FormErrors message={errors?.message?.message} />
                    }
                </div>
                <div className="w-full flex items-center md:flex-row flex-col gap-[23px]">

                    <div className="w-full">
                        <ReCAPTCHA
                            sitekey={process.env.NEXT_PUBLIC_SITE_KEY as string}
                            //@ts-ignore
                            onChange={handleChangeCaptcha}
                            ref={captcha}
                        />
                    </div>
                </div>


                {captchaId ?
                    <button type='submit' className='px-[80px] rounded-md bg-teal-800  gap-2 ml-auto flex items-center py-4'>
                        <span className="text-white text-base  font-normal font-['Inter'] leading-tight">Submit</span>
                        <FaArrowRight className='text-5 text-white' />
                    </button>
                    :
                    <button type='button' className='px-[80px] rounded-md bg-gray-600/50  gap-2 ml-auto flex items-center py-4'>
                        <span className="text-white text-base  font-normal font-['Inter'] leading-tight">Submit</span>
                        <FaArrowRight className='text-5 text-white' />
                    </button>
                }
            </form>
        </div>
    )
}

export default Enquery