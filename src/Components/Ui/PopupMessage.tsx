import React, { useContext } from 'react'
import Texts, { SeconedHead } from './Texts'
import { FaXmark } from 'react-icons/fa6'
import { Button } from './Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSChema } from '../lib/FormSchema'
import FormErrors from '../UiComponent/FormErrors'
import { ToggleTypes } from '../PageComponent/OrderComponent/MainOrderBox'
import { MyContext } from '../Context/Main'

const PopupMessage = () => {
    const contextData = useContext(MyContext);
    const choosePopupType = () => {
        switch (contextData?.togglePopup.popupType) {
            case 'SUCCESS':
                return <SuccessFullOrderMessage setTogglePopup={contextData?.setTogglePopup} />
            case 'CONFIRM':
                return <ConfrimOrderMessage setTogglePopup={contextData?.setTogglePopup} />
            case 'FORM':
                return <PayEsewaMessage setTogglePopup={contextData?.setTogglePopup} />
            case 'UPDATE':
                return <ProfileUpdatedMessage setTogglePopup={contextData?.setTogglePopup} />
        }
    }
    return (
        <>
            <div className="fixed z-10 inset-0 bg-gray-600/20"></div>
            <div className='py-3  w-[90%] md:w-[400px]  left-[50%] translate-x-[-50%] z-50 px-6 shadow-[2px_2px_10px_#E2E6E3] bg-white fixed'>
                <div className="absolute right-2 top-2">
                    <FaXmark onClick={() => { contextData?.setTogglePopup((prev) => ({ ...prev, toggle: false })) }} className='text-[25px] cursor-pointer p-1 rounded-full border' />
                </div>
                {
                    choosePopupType()
                }

            </div>
        </>

    )
}

export default PopupMessage


export const ConfrimOrderMessage = ({ setTogglePopup }: { setTogglePopup: React.Dispatch<React.SetStateAction<ToggleTypes>> }) => {
    return (
        <div className="relative   ">

            <SeconedHead text='Order Message' className='border-b-2 border-text pb-2' />
            <div className="mt-6">
                <Texts text='Are you sure you want to place this order?' className=' w-full md:w-[70%] mx-auto text-text' />
            </div>
            <div className="flex items-start gap-3 w-full justify-end mt-5">
                <Button onClick={() => { setTogglePopup((prev) => ({ ...prev, toggle: false })) }} variant={'outline'} size={'sm'} className='rounded-none h-[30px] text-text font-["Roboto"]'>Cancel</Button>
                <Button onClick={() => { setTogglePopup((prev) => ({ ...prev, toggle: false })) }} variant={'outline'} size={'sm'} className='rounded-none h-[30px] font-["Roboto"] text-primary'>Confirm</Button>
            </div>
        </div>
    )
}


export const PayEsewaMessage = ({ setTogglePopup }: { setTogglePopup: React.Dispatch<React.SetStateAction<ToggleTypes>> }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<{ id: string, pin: string }>({ resolver: zodResolver(formSChema) })

    const formHandle: SubmitHandler<{ id: string, pin: string }> = (data) => {
        console.log(data)
    }
    return (
        <div className="relative flex   flex-col">
            <SeconedHead text='PAY VIA E-sewa' className='border-b-2 border-text pb-2' />
            <form onSubmit={handleSubmit(formHandle)} className="flex items-center flex-col gap-4 w-full justify-end mt-5">
                <div className="flex items-center  relative gap-2">
                    <label htmlFor="id" className='font-["Roboto"] ' >ID:</label>
                    <div className="flex flex-col gap-1">
                        <input type='text' id='id' {...register('id')} className='rounded-full focus:outline-none py-1 px-3 bg-gray-200 ' />
                        {
                            errors && <FormErrors style='text-[12px] absolute bottom-[-16px] ' message={errors?.pin?.message} />
                        }
                    </div>
                </div>
                <div className="flex items-center relative gap-2">
                    <label htmlFor="id" className='font-["Roboto"] ' >PIN:</label>
                    <div className="flex flex-col gap-1">
                        <input type='text' id='id' {...register('pin')} className='rounded-full focus:outline-none py-1 px-3 bg-gray-200 ' />
                        {
                            errors && <FormErrors style='text-[12px] absolute bottom-[-16px] ' message={errors?.pin?.message} />
                        }
                    </div>
                </div>
                <Button variant={'outline'} size={'sm'} onClick={() => { setTogglePopup((prev) => ({ ...prev, toggle: false })) }} className='rounded-none mx-auto h-[30px] mt-2 hover:bg-primary hover:text-white font-["Roboto"] text-primary'>Confirm</Button>
            </form>
        </div>
    )
}


export const SuccessFullOrderMessage = ({ setTogglePopup }: { setTogglePopup: React.Dispatch<React.SetStateAction<ToggleTypes>> }) => {
    return (
        <div className="relative  ">
            <SeconedHead text='Order Message' className='border-b-2 border-text pb-2' />
            <div className="mt-6">
                <Texts text='Your order has been places. You will recieve it in 2-3 days. Happy shopping :)' className=' w-full md:w-[70%] mx-auto text-text' />
            </div>
            <div className="flex items-start gap-3 w-full justify-end mt-5">
                <Button variant={'outline'} size={'sm'} className='rounded-none h-[30px] text-text font-["Roboto"]' onClick={() => { setTogglePopup((prev) => ({ ...prev, toggle: false })) }}>Cancel</Button>
                <Button variant={'outline'} size={'sm'} className='rounded-none h-[30px] font-["Roboto"] text-primary' onClick={() => { setTogglePopup((prev) => ({ ...prev, toggle: false })) }}>Confirm</Button>
            </div>
        </div>
    )
}


export const ProfileUpdatedMessage = ({ setTogglePopup }: { setTogglePopup: React.Dispatch<React.SetStateAction<ToggleTypes>> }) => {
    return (
        <div className="relative   ">

            <SeconedHead text='Order Message' className='border-b-2 border-text pb-2' />
            <div className="mt-6">
                <Texts text='Are you sure you want to place this order?' className=' w-full md:w-[70%] mx-auto text-text' />
            </div>
            <div className="flex items-start gap-3 w-full justify-end mt-5">
                <Button onClick={() => { setTogglePopup((prev) => ({ ...prev, toggle: false })) }} variant={'outline'} size={'sm'} className='rounded-none h-[30px] text-text font-["Roboto"]'>Cancel</Button>
                <Button onClick={() => { setTogglePopup((prev) => ({ ...prev, toggle: false })) }} variant={'outline'} size={'sm'} className='rounded-none h-[30px] font-["Roboto"] text-primary'>Confirm</Button>
            </div>
        </div>
    )
}