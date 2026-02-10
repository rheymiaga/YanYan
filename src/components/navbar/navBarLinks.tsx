import { TbArrowRoundaboutRight, TbCarGarage } from "react-icons/tb"
import { FaScrewdriverWrench } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

export const Contacts = [
    {
        label: 'Facebook',
        icon: <FaFacebookSquare />,
        link: 'https://www.facebook.com/yan.yan.176563'
    },
    {
        label: 'Email',
        icon: <BiLogoGmail />,
        link: 'mailto:raylieraylie17@gmail.com'
    },
    {
        label: 'Call',
        icon: <IoCall />,
        link: 'tel:09158113963'
    },
]

export const NavBarLinks = [
    {
        label: 'Home',
        icon: <TbCarGarage />,
        to: '/'
    },
    {
        label: 'Services',
        icon: < FaScrewdriverWrench />,
        to: '/services'
    },
    {
        label: 'About',
        icon: <TbArrowRoundaboutRight />,
        to: '/about'
    },

]