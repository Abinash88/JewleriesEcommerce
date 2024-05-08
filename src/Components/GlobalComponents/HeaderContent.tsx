"use client"

import React, { useState } from 'react'
import TopHeader from './TopHeader'
import HeaderNav from './HeaderNav'
import TopTags from './TopTags'

const HeaderContent = () => {

    return (
        <div className='w-full relative flex flex-col items-center  '>
            <TopTags />
            <TopHeader />
            <HeaderNav />
        </div>
    )
}

export default HeaderContent