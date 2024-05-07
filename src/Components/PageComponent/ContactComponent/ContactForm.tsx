"use client"

import React, { useState } from 'react'
import Enquery from './Enquiry'
import FormErrors from '@/Components/UiComponent/FormErrors';
import { DepartmentTypes, DoctorTypes } from '@/DataSource/Types';


const ContactForm = ({ department, doctor }: { department: DepartmentTypes, doctor: DoctorTypes; }) => {

    const [formType, setFormType] = useState<string>("Enquiry");

    const getFormType: React.ChangeEventHandler<HTMLInputElement> = (data) => {
        setFormType(data?.target?.id)
    }

    return (
        <div className='w-full'>
            <div className="py-5 relative w-full mb-[22px] bg-stone-50 rounded-lg justify-center md:flex-row flex-col items-center gap-6 inline-flex">
                <h3 className="text-zinc-900 text-xs font-medium font-['Inter'] uppercase leading-tight">Type of Query</h3>
                <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center  gap-1 r">
                        <input defaultChecked={formType === "Enquiry"} onChange={getFormType} type="radio" name='radioGroup' id='Enquiry' className='md:w-5 cursor-pointer w-4 h-4 md:h-5' />
                        <label htmlFor="Enquiry" className="text-zinc-900 text-sm font-medium font-['Inter'] leading-snug">Enquiry</label>
                    </div>
                    <div className="flex items-center  gap-1">
                        <input onChange={getFormType} type="radio" name='radioGroup' id='Complaint' className='md:w-5 cursor-pointer w-4 h-4 md:h-5' />
                        <label htmlFor="Complaint" className="text-zinc-900 text-sm font-medium font-['Inter'] leading-snug">Complaint</label>
                    </div>
                    <div className="flex items-center  gap-1">
                        <input onChange={getFormType} type="radio" name='radioGroup' id='FeedBack' className='md:w-5 cursor-pointer w-4 h-4 md:h-5' />
                        <label htmlFor="FeedBack" className="text-zinc-900 text-sm font-medium font-['Inter'] leading-snug">FeedBack</label>
                    </div>
                </div>
                {!formType &&
                    <div className="absolute bottom-0">
                        <FormErrors message='Please Select any one query.' />
                    </div>
                }
            </div>
            <div className="w-full ">
                <Enquery department={department} doctor={doctor} formType={formType} />
            </div>
        </div>
    )
}

export default ContactForm