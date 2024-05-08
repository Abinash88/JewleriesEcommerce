
import { FaFacebook, FaInstagram, FaPinterest, FaRegHeart } from "react-icons/fa";
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
        link: '/beads'
    },
    {
        image: ShortHariGirl,
        CatagoryName: 'Silver',
        style: 'w-[150px] h-[200px]',
        link: '/silver'
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
        name: 'About Jewelfy',
        link: '/about-jewelfy',
    },
    {
        name: 'Faq',
        link: '/faq',
    },

];


export const CatagoryProduct = [
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