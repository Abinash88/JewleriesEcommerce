import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { fetchGetRequest } from '../lib/Helper'
import HeaderContent from './HeaderContent'
import TopTags from './TopTags'

const Header = async () => {

    const fetchData = await fetchGetRequest({ endpoint: 'identity/' })
    const Navbar = await fetchGetRequest({ endpoint: 'api/menu-items/' })
    const numbers = await fetchGetRequest({ endpoint: 'important-numbers/' })
    const Department = await fetchGetRequest({ endpoint: "department/" });

    return (
        <div id='Header' className='w-full flex flex-col '>
            <HeaderContent numbers={numbers} Department={Department} fetchData={fetchData} Navbar={Navbar} />
        </div>
    )
}

export default Header