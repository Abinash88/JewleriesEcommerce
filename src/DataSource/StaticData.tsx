
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import ShortHariGirl from "../Assests/Home/shortHairGirl.jpg"

export const HeaderNavIcon = [
    {
        icon: <FaSearch />,
        link: '/'
    },
    {
        icon: <FaRegHeart />,
        link: '/Whislist'
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
        link: '/rings',
    },
    {
        name: 'Bracelets',
        link: 'bracelets',
    },
    {
        name: 'Earrings',
        link: 'earrings',
    },
    {
        name: 'Necklaces',
        link: 'necklaces',
    },

]

export const CatagoryData = [
    {
        image: ShortHariGirl,
        CatagoryName: 'Stone',
        style: 'w-[150px] h-[200px]',
        link: '/stone'
    },
    {
        image: ShortHariGirl,
        CatagoryName: 'Perl',
        style: 'w-[200px] h-[300px]',
        link: '/perl'
    },
    {
        image: ShortHariGirl,
        CatagoryName: 'Gold',
        style: 'w-[250px] h-[350px]',
        link: '/gold'
    },
    {
        image: ShortHariGirl,
        CatagoryName: 'Beads',
        style: 'w-[200px] h-[300px]',
        link: '/silver'
    },
    {
        image: ShortHariGirl,
        CatagoryName: 'Silver',
        style: 'w-[150px] h-[200px]',
        link: '/'
    },
]


export const ProductHighlight = [
    {
        image: ShortHariGirl
    },
    {
        image: ShortHariGirl
    },
    {
        image: ShortHariGirl
    },
    {
        image: ShortHariGirl
    },
    {
        image: ShortHariGirl
    },
    {
        image: ShortHariGirl
    },
    {
        image: ShortHariGirl
    },
]

export const AboutFooterLink = [
    {
        name:'About Jewelfy',
        link:'/about-jewelfy',
    },
    {
        name:'Faq',
        link:'/faq',
    },

]