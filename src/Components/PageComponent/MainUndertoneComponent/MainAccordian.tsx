"use client"

import React, { useEffect } from 'react'
import Texts, { SeconedHead } from '@/Components/Ui/Texts'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import useHandleAccordian from '@/Components/hooks/useHandleAccordian'

const MainMediaCenter = () => {

    useHandleAccordian()

    const accordianStyle = `px-4 border relative focus:outline-none  py-1 text-left my-4 bg-[#beccc2] rounded-md font-['Roboto'] font-semibold text-[13px] md:text-[15px] text-gray-800`
    return (
        <div className='w-full my-[60px] '>
            <div className="flex mb-[60px] gap-5 items-center  flex-col ">
                <div className="w-[95%] mb-5  md:w-[70%]">
                    <Texts text='Are you really confused which jewelry suits you the best? You need to answer only one simple question 
                        to know if you are team  gold or silver . ' className='text-center  mb-5 leading-[170%]' />
                    <SeconedHead className='w-full md text-text-foreground font-["Poly"] lg:text-[40px] pb-3 ' text='What is your undertone?' />
                </div>

                <div className="lg:w-[80%] undertone relative w-full  ">
                    <Accordion className="focus:outline-none  text-left">
                        <AccordionItem
                            id="AccordianTitle"
                            key="1"
                            data-open={true}
                            aria-label="Acccordain 1"
                            className={accordianStyle}
                            title="A. Does Jewelry make custom order?"
                        >
                            A. Does Jewelry make custom order?
                        </AccordionItem>
                        <AccordionItem
                            id="AccordianTitle"
                            aria-label="Acccordain 2"
                            key="2"
                            className={accordianStyle}
                            title="B. Does Jewelry has physical Store?"
                        >
                            B. Does Jewelry has physical Store?
                        </AccordionItem>
                        <AccordionItem
                            id="AccordianTitle"
                            aria-label="Acccordain 3"
                            key="3"
                            className={accordianStyle}
                            title="C. How long will it take to receive my orders?"
                        >
                            C. How long will it take to receive my orders?
                        </AccordionItem>
                        <AccordionItem
                            id="AccordianTitle"
                            aria-label="Acccordain 4"
                            key="4"
                            className={accordianStyle}
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

export default MainMediaCenter