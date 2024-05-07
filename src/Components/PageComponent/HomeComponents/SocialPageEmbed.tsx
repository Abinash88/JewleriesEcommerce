"use client"

import dynamic from 'next/dynamic'
import React from 'react'
const InstagramEmbed = dynamic(() => import("react-social-media-embed").then((mod) => mod.InstagramEmbed), { ssr: false })

const SocialPageEmbed = () => {

    return (
        <div className='w-full'>
            <div className="max_width mb-6">
                <div className="w-full mx-auto flex   rounded-md lg:flex-row 
                flex-col items-center justify-center  py-[40px]">
                    <div className=" w-full rounded-md flex-1">
                        <InstagramEmbed draggable={true} style={{ boxShadow: "2px 2px 10px #E2E2E2" }} className=' w-full mx-auto  md:p-2 bg-white   rounded-md overflow-hidden' url={process.env.NEXT_PUBLIC_INSTAGRAM_PAGE_EMBED || ""} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialPageEmbed;


