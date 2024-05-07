"use client"

import React, { useState } from 'react'
import TopHeader from './TopHeader'
import { DepartmentTypes, IdenetityTypes, NavBarDataTypes, NumberTypes } from '@/DataSource/Types'
import HeaderNav from './HeaderNav'
import { Cn } from '../lib/Helper'
import Emergency from './Emergency'
import TopTags from './TopTags'

const HeaderContent = ({ Navbar, fetchData, numbers, Department }:
    {
        Navbar: NavBarDataTypes[] | undefined;
        fetchData: IdenetityTypes | undefined;
        numbers: NumberTypes[];
        Department: DepartmentTypes;
    }) => {

    const [ToggleNav, setToggleNav] = useState(false);

    return (
        <div className='w-full flex flex-col items-center  '>
            <TopTags />
            <TopHeader numbers={numbers} Navbar={Navbar} setToggleNav={setToggleNav} />
            <HeaderNav Department={Department} ToggleNav={ToggleNav} setToggleNav={setToggleNav} Navbar={Navbar} />
        </div>
    )
}

export default HeaderContent