
import { FaFacebook, FaInstagram, FaPinterest, FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { TbArrowsDoubleSwNe } from "react-icons/tb";
import ShortHariGirl from "../Assests/productRing.png"
import stone from "../Assests/Home/stone.png"
import beads from "../Assests/Home/beads.png"
import gold from "../Assests/Home/gold.png"
import silver from "../Assests/Home/silver.png"
import pearl from "../Assests/Home/pearl.png"

import jewl1 from '../Assests/Home/jewl1.png'
import jewl2 from '../Assests/Home/jewl2.png'
import jewl3 from '../Assests/Home/jewl3.png'
import jewl4 from '../Assests/Home/jewl4.png'
import { CatagoryProductTypes } from "./Types";

export const HeaderNavIcon = [
    {
        icon: <TbArrowsDoubleSwNe />,
        link: '/'
    },
    {
        icon: <FaRegHeart />,
        link: '/favourites'
    },
    {
        icon: <IoBagOutline />,
        link: '/bags'
    },
    {
        icon: <FaUserCircle />,
        link: '/profile'
    },
    {
        icon: <CiGlobe />,
        link: '/language'
    },

]

export const HeaderNavBar = [
    {
        name: 'Rings',
        link: '/product?type=rings&catagoryId=stone',
    },
    {
        name: 'Bracelets',
        link: '/product?type=bracelets&catagoryId=stone',
    },
    {
        name: 'Earrings',
        link: '/product?type=earrings&catagoryId=stone',
    },
    {
        name: 'Necklaces',
        link: '/product?type=necklaces&catagoryId=stone',
    },

]

export const CatagoryData = [
    {
        image: stone,
        CatagoryName: 'Stone',
        style: 'w-[150px] h-[200px]',
        link: '/product?type=rings&catagoryId=stone'
    },
    {
        image: pearl,
        CatagoryName: 'pearl',
        style: 'w-[200px] h-[300px]',
        link: '/product?type=rings&catagoryId=pearl'
    },
    {
        image: gold,
        CatagoryName: 'Gold',
        style: 'w-[250px] h-[350px]',
        link: '/product?type=rings&catagoryId=gold'
    },
    {
        image: beads,
        CatagoryName: 'Beads',
        style: 'w-[200px] h-[300px]',
        link: '/product?type=rings&catagoryId=beads'
    },
    {
        image: silver,
        CatagoryName: 'Silver',
        style: 'w-[150px] h-[200px]',
        link: '/product?type=rings&catagoryId=silver'
    },
]

export const ProductHighlight = [
    {
        image: jewl1
    },
    {
        image: jewl2
    },
    {
        image: jewl3
    },
    {
        image: jewl4
    },
    {
        image: jewl2
    },
    {
        image: jewl1
    },
]

export const AboutFooterLink = [
    {
        name: 'About Jewelfy',
        link: '/about-us',
    },
    {
        name: 'Faqs',
        link: '/faqs',
    },

];

export const CatagoryProduct: CatagoryProductTypes[] = [
    {
        name: 'Perl Heart Earring',
        image: ShortHariGirl,
        price: '50',
        catagory: 'beads',
    },
    {
        name: 'Perl Heart Earring',
        image: ShortHariGirl,
        price: '50',
        catagory: 'perl',
    },
    {
        name: 'Perl Heart Earring',
        image: ShortHariGirl,
        price: '50',
        catagory: 'perl',
    },
    {
        name: 'Perl Heart Earring',
        image: ShortHariGirl,
        catagory: 'stone',
        price: '50'
    },
    {
        name: 'Perl Heart Earring',
        image: ShortHariGirl,
        catagory: 'gold',
        price: '50'
    },
    {
        name: 'Perl Heart Earring',
        image: ShortHariGirl,
        catagory: 'stone',
        price: '50'
    },
    {
        name: 'Perl Heart Earring',
        image: ShortHariGirl,
        catagory: 'perl',
        price: '50'
    },
]

export const SocialIcons = [
    {
        link: 'https://facebook.com',
        icon: <FaFacebook />,
    },
    {
        link: 'https://instagram.com',
        icon: <FaInstagram />,
    },
    {
        link: 'https://pinterest.com',
        icon: <FaPinterest />,
    },
]

export const descriptionData = [
    {
        name: 'collection',
        value: 'Jewelfy Timeless'
    },
    {
        name: 'Stone',
        value: 'Treated freshwater cultured pearl'
    },
    {
        name: 'color',
        value: 'White'
    },
    {
        name: 'Product Type     ',
        value: 'Earrings'
    },
]