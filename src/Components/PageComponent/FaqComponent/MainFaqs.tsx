"use client"

import React from 'react'
import { MainTextHead, SeconedHead } from '@/Components/Ui/Texts'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import useHandleAccordian from '@/Components/hooks/useHandleAccordian'

const MainFaqs = () => {

    useHandleAccordian()

    return (
        <div className='w-full my-[60px] '>
            <div className="flex mb-[60px] gap-5 items-center  flex-col ">
                <div className="w-[95%] mb-5 md:w-[70%]">
                    <MainTextHead className='w-full md text-text-foreground lg:text-[40px] pb-3 border-b-2 border-text-foreground' text='FREQUENTLY ASKED QUESTIONS' />
                </div>

                <div className="lg:w-[80%] relative w-full ">
                    <div className="mb-3 w-full ">
                        <SeconedHead text='General' className=' w-full text-left lg:text-[32px] font-["Poly"]' />
                    </div>
                    <Accordion className="focus:outline-none text-left transition-all duration-300">
                        <AccordionItem
                            id="AccordianTitle"
                            key="1"
                            data-open={true}
                            aria-label="Acccordain 1"
                            className="px-4 border relative focus:outline-none py-1 text-left  font-['Roboto'] font-semibold text-[13px] md:text-[15px] text-gray-600"
                            title="A. Does Jewelry make custom order?"
                        >
                            A. Does Jewelry make custom order?
                        </AccordionItem>
                        <AccordionItem
                            id="AccordianTitle"
                            aria-label="Acccordain 2"
                            key="2"
                            className="px-4 border relative focus:outline-none py-1 text-left  font-['Roboto'] font-semibold text-[13px] md:text-[15px] text-gray-600"
                            title="B. Does Jewelry has physical Store?"
                        >
                            B. Does Jewelry has physical Store?
                        </AccordionItem>
                        <AccordionItem
                            id="AccordianTitle"
                            aria-label="Acccordain 3"
                            key="3"
                            className="px-4 border relative focus:outline-none py-1 text-left  font-['Roboto'] font-semibold text-[13px] md:text-[15px] text-gray-600"
                            title="C. How long will it take to receive my orders?"
                        >
                            C. How long will it take to receive my orders?
                        </AccordionItem>
                        <AccordionItem
                            id="AccordianTitle"
                            aria-label="Acccordain 4"
                            key="4"
                            className="px-4 border relative focus:outline-none py-1 text-left  font-['Roboto'] font-semibold text-[13px] md:text-[15px] text-gray-600"
                            title="D. Does Jewelry allow returns?"
                        >
                            D. Does Jewelry allow returns?
                        </AccordionItem>
                    </Accordion >
                </div >
            </div >

        </div >
    )
}

export default MainFaqs