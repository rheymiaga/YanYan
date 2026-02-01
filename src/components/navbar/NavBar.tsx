import { Contacts, NavBarLinks } from "./navBarLinks"
import logo from '../../assets/yan-Logo.png'
import location from '../../assets/location.png'
import { IoMdContact } from "react-icons/io";
import { NavLink } from "react-router-dom"
import { TbLocationExclamation, } from "react-icons/tb"
import { useState } from "react"

export const NavBar = () => {
    const [hover, setHover] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [openContact, setOpenContact] = useState(false)

    return (
        <nav className=" w-full fixed top-0 left-0 z-50">

            {/* Desktop Navbar*/}
            <div className="hidden md:flex items-center justify-around mt-2 mx-2">
                <div className=" flex shrink-0 items-center max-w-7xl">
                    <img src={logo} alt="yan yan logo" className="h-12 md:h-16 lg:h-20" />
                </div>
                <div className=" flex gap-2 bg-black/50 border-gray-700 backdrop-blur-sm border-2 py-2 px-3 rounded-full divide-x divide-gray-400/30">
                    {NavBarLinks.map((Links) => (
                        <NavLink
                            key={Links.label}
                            to={Links.to}
                            className={({ isActive }) => `group gap-1 flex py-2 px-3 font-Poppins font-medium
                             ${isActive
                                    ? ""
                                    : ""} text-amber-50`}
                        >
                            {({ isActive }) => (
                                <>
                                    <span className=" group-hover:rotate-12 transition-transform duration-300 transform">{Links.icon}</span>
                                    <span className=" relative">
                                        {Links.label}
                                        <span
                                            className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-transparent via-slate-200/70 to-transparent transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                                }`} />
                                    </span>
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>
                <div className="flex items-center gap-8">
                    <div className="group bg-black/40 rounded-full border-gray-500 border-2 relative transform transition-all duration-300">
                        <a onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            target="_blank"
                            href="https://www.google.com/maps/place/Yanyan+Electrical+shop+%26+Vulcanizing/@14.635855,121.055998,15z/data=!4m6!3m5!1s0x3397b7a202407ac7:0x730a05cfd8d84106!8m2!3d14.6358551!4d121.055998!16s%2Fg%2F11c3nzz7bd?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                            className="flex py-3 px-4 gap-2 text-amber-50 transition-all duration-300 transform group">
                            <TbLocationExclamation className=" group-hover:rotate-12 transition-transform transform duration-300" />

                            {hover ? (
                                <p>Visit Google Map</p>

                            ) : (
                                <p>Location</p>
                            )}

                        </a>
                        <div className={`absolute top-16 right-0 pointer-events-none transition-all duration-500 transform ${hover ? "opacity-100 w-full" : "opacity-0 w-5"}`}>
                            <img className="rounded-lg" src={location} alt="location" />
                        </div>

                    </div>
                    <button
                        onClick={() => setOpenContact(!openContact)}
                        className={`relative group flex py-3 px-4 gap-2 text-amber-50 transition-all hover:scale-103 duration-300 transform group cursor-pointer`}>
                        <IoMdContact className=" group-hover:rotate-12 transition-transform duration-300 " />
                        Contacts

                    </button>
                    <div className=" relative">
                        {openContact && (
                            <div className='p-4 hidden md:inline absolute right-0 top-6 bg-linear-to-tr rounded drop-shadow-[0px_0px_12px] from-slate-800/40 to-gray-700/35'>
                                <button
                                    onClick={() => setOpenContact(false)}
                                    className="relative font-Poppins font-semibold text-[18px] justify-self-end flex cursor-pointer px-2">
                                    <span className="absolute -top-3 left-3">x</span> </button>
                                <div className="flex flex-col items-start space-y-2 text-amber-50 divide-y">
                                    <h1>Contact Us</h1>
                                    <div className="block items-start flex-col">
                                        {Contacts.map((Contacts) => (
                                            <NavLink
                                                key={Contacts.label}
                                                to={Contacts.link}
                                                className={`flex px-3 py-2 gap-1`}
                                            >
                                                <span>{Contacts.icon}</span>
                                                <span>{Contacts.label}</span>
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>


            </div>
            {/* Mobile Navbar*/}
            <div className="flex flex-col relative items-center md:hidden overflow-hidden">
                <div className=" py-2 px-4 flex items-center justify-between w-full mx-4">
                    <div className=" flex shrink-0 items-center">
                        <img src={logo} alt="yan yan logo" className="h-14 sm:h-16" />
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-10 h-10 relative cursor-pointer z-50 flex items-center justify-center"
                    >
                        <span className="absolute top-[25%] right-0 h-0.5 w-[50%] bg-white"></span>
                        <span className="absolute top-[50%] right-0 h-0.5 w-[75%] bg-white"></span>
                        <span className="absolute top-[75%] right-0 h-0.5 w-full bg-white"></span>

                    </button>


                </div>
                <div
                    className={`fixed  top-0 left-0 bg-[#1c1c1c] border-r-2 border-gray-700/80 transition-all transform duration-300 min-h-screen
    ${isOpen ? 'translate-x-0 w-[80%] ' : '-translate-x-full w-[80%]'}`}
                >
                    <div className="divide-y">
                        <div className=" flex shrink-0 items-center px-4 py-2 font-Poppins">
                            <img src={logo} alt="yan yan logo" className="h-14 sm:h-16" />
                            <h1 className=" text-amber-50 font-Poppins text-base">Yan Yan Electrical Shop</h1>
                        </div>
                        <div className="px-5 py-4 font-Poppins">
                            <h1 className=" text-amber-50 mb-2">Links</h1>
                            {NavBarLinks.map((links) => (
                                <NavLink
                                    key={links.label}
                                    to={links.to}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) => `flex py-2 px-3 gap-1 rounded text-amber-50 ${isActive ? ' bg-black/20' : ' bg-[1c1c1c] '}`}
                                >
                                    <span>{links.icon}</span>
                                    <span>{links.label}</span>
                                </NavLink>
                            ))}
                        </div>
                        <div className="flex px-5 py-4 flex-col items-start font-Poppins space-y-2 text-amber-50 ">
                            <h1>Contact Us</h1>
                            <div className="flex flex-col w-full items-start">
                                {Contacts.map((Contacts) => (
                                    <NavLink
                                        key={Contacts.label}
                                        to={Contacts.link}
                                        className={`flex px-3 w-full py-2 gap-1`}
                                    >
                                        <span>{Contacts.icon}</span>
                                        <span>{Contacts.label}</span>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                        <div className=" px-5 py-4 mb-2 text-amber-50 space-y-3 font-Poppins">
                            <div className="space-y-2">
                                <h1 className=" ">Location</h1>
                                <h2 className="text-xs sm:text-sm">34R7V V. Luna Ext, Malaya, Quezon City, 1101 Metro Manila</h2>
                            </div>
                            <div className="gap-2 flex flex-col relative">
                                <span className=" font-Poppins absolute top-1/2 left-1/2 -translate-x-1/2 text-black/80 animate-pulse opacity-80 font-bold text-base">click to visit</span>
                                <a
                                    target="_blank"
                                    href="https://www.google.com/maps/place/Yanyan+Electrical+shop+%26+Vulcanizing/@14.635855,121.055998,15z/data=!4m6!3m5!1s0x3397b7a202407ac7:0x730a05cfd8d84106!8m2!3d14.6358551!4d121.055998!16s%2Fg%2F11c3nzz7bd?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                                >
                                    <img src={location} alt="location" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </nav >

    )
}