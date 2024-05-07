"use client"

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { CareersFormDataTypes } from '@/DataSource/Types';
import FormErrors from '@/Components/UiComponent/FormErrors';
import { fetchPostRequest } from '@/Components/lib/Helper';
import { toast } from 'react-toastify';

export default function CareersPoupForm({ openModal, setIsOpen, isOpen, position }: { openModal: () => void, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, isOpen: boolean, position: string }) {

    const schema = z.object({
        full_name: z.string().nonempty({ message: "Please fille up all the details!" }).refine((data) => !/[!@#$%^&*()_+{}\[\]:;<>,.?/~\\-]/.test(data)),
        email: z.string().nonempty({ message: "Please fille up all the details!" }).email().refine((data) => !/[!#$%^&*()+{}\[\]:;<>,?/~\\-]/.test(data)),
        phone_number: z.string().nonempty({ message: "Please fille up all the details!" }),
        resume: z.custom<FileList>(),
        cover_letter: z.custom<FileList>(),
    })

    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<CareersFormDataTypes>({ resolver: zodResolver(schema) })

    function closeModal() {
        setIsOpen(false)
        reset()
    }
    // console.log(errors)
    const handleFetchFunc: SubmitHandler<CareersFormDataTypes> = async (data) => {
        const fetchData = {
            full_name: data?.full_name,
            email: data?.email,
            phone_number: data?.phone_number,
            vacancy: data?.vacancy,
            resume: data?.resume,
            cover_letter: data?.cover_letter,
        }

        const fetch = await fetchPostRequest<CareersFormDataTypes>({ endpoint: "vacancy-application/", data: fetchData });
        console.log(fetch)
        if (fetch.status === "success") {
            closeModal()
            toast.success("Message Successfully Send")
        }
    }

    return (
        <div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl
                                    bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-[24px] font-medium mb-7 leading-6 text-gray-700 "
                                    >
                                        Fill up form for {position}
                                    </Dialog.Title>
                                    <form onSubmit={handleSubmit(handleFetchFunc)} className="mt-2">
                                        <div className="careers_form">
                                            <label htmlFor="Name">Full Name</label>
                                            <input {...register("full_name")} type="text" id='Name' className='' placeholder='Full Name' />
                                            <FormErrors message={errors.full_name?.message} />
                                        </div>
                                        <div className="careers_form">
                                            <label htmlFor="Email">Email</label>
                                            <input {...register("email")} type="email" id='Email' className='' placeholder='Email Address' />
                                            <FormErrors message={errors.email?.message} />
                                        </div>
                                        <div className="careers_form">
                                            <label htmlFor="Contact">Contact</label>
                                            <input {...register("phone_number")} type="number" id='Contact' className='' placeholder='Number' />
                                            <FormErrors message={errors.phone_number?.message} />
                                        </div>
                                        <div className="careers_form">
                                            <label htmlFor="resume">Resume</label>
                                            <input {...register("resume")} required type="file" id='resume' className='' placeholder='Resume' />
                                            <FormErrors message={errors.resume?.message as string} />
                                        </div>
                                        <div className="careers_form">
                                            <label htmlFor="CoverLetter">Cover Letterr</label>
                                            <input {...register("cover_letter")} required type="file" id='CoverLetter' className='' placeholder='Cover Letter' />
                                            <FormErrors message={errors?.cover_letter?.message as string} />
                                        </div>

                                        <div className="mt-10 gap-2 flex items-start justify-end">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Exit
                                            </button>
                                            <button
                                                type='submit'
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}
