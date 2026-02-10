import { NavLink } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import { motion } from "framer-motion";
import { homeServicesInfo } from "./homeServicesInfo";
import { useState } from "react";
import { MdOutlineTouchApp } from "react-icons/md";
import { useHoverOffset } from "../../../utils/hoveroffset/useHoverOffset";
import { BiMouse } from "react-icons/bi";
import car from '../../../assets/car.png'
import { FaLocationDot } from "react-icons/fa6";



const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 40 },
};

export const HomeServices = () => {
    const [hoveredAnchor, setHoveredAnchor] = useState<string | null>(null);
    const { offset, handleMouseMove } = useHoverOffset();

    const activeService = homeServicesInfo.find(
        (s) => s.title === hoveredAnchor
    );

    return (
        <div className="relative min-h-screen py-25 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center bg-black">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b z-10 from-transparent via-amber-500/30 to-transparent"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 border-l-2 z-10 border-dashed border-amber-400/30"></div>
            <div className="absolute bottom-10 left-0 w-full h-1 bg-linear-to-r z-10 from-transparent via-amber-500/30 to-transparent"></div>
            <div className="absolute bottom-10 left-0 w-full h-0.5 border-t-2 z-10 border-dashed border-amber-400/30"></div>
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 25px 50px rgba(0,0,0,0.6)",
                }}
                className=" absolute top-1/2 lg:top-1/2 left-[52%] text-white/40"
            >
                Malumanay street

            </motion.div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white/10 w-2 h-full "></div>
            <div className=" absolute bottom-10 left-0 w-full h-2 bg-white/10"></div>
            <div
                className="text-sm animate-pulse transition-all duration-300 transform absolute bottom-2 md:translate-x-1/2 left-[25%] text-white/70 truncate">
                <span> V. Luna Ave.</span></div>
            <div
                className="flex flex-col animate-pulse transition-all duration-300 transform md:flex-row text-wrap text-sm absolute bottom-0 md:left-[65%] md:-translate-x-1/2 left-[55%] text-white/70 truncate">
                <span>Iglesia Ni Cristo</span> <span>[Central] - V. Luna</span></div>
            <div
                className="text-base flex flex-col md:flex-row animate-pulse transition-all duration-300 transform text-wrap absolute bottom-12 md:left-1/2 md:-translate-x-1/2 left-1/7 bg-linear-to-tr from-red-300 via-red-200 to-red-400 bg-clip-text text-transparent">
                <span>Yanyan Electrical</span> <span>shop & Vulcanizing</span></div>
            <FaLocationDot className=" absolute bottom-13 left-[45%] md:left-[48%] -translate-x-1/2 text-2xl text-red-600 animate-bounce" />
            <img src={car} alt="car"
                className="sticky object-contain flex shrink-0 rotate-90 top-1/2 left-1/2 md:-translate-x-1/8 transform transition-all drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] duration-300 lg:translate-x-1 -translate-y-1/2 z-50 pointer-events-none w-20 h-20">

            </img>
            {/* Background Void Effect */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-linear-to-tr from-black via-gray-900 to-black"></div>
                <motion.div
                    initial={{ y: -40 }}
                    animate={{ y: 40 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "easeInOut", repeatType: "reverse" }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent)]"
                />
            </div>

            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
                className="flex justify-center mt-16"
            >
                <h1 className="text-[28px] md:text-5xl lg:text-6xl font-bold 
          bg-linear-to-r from-gray-200 via-white to-gray-400 
          bg-clip-text text-transparent tracking-widest md:tracking-wide 
          drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
                    Offered Services
                </h1>
            </motion.div>

            {/* Services Grid */}
            <div className="flex gap-20 w-full flex-col mt-16 items-start md:items-center lg:items-start relative">
                {homeServicesInfo.map((serv, i) => (
                    <motion.div
                        onMouseEnter={() => setHoveredAnchor(serv.title)}
                        onMouseLeave={() => setHoveredAnchor(null)}
                        onMouseMove={handleMouseMove}
                        onClick={() => setHoveredAnchor(serv.title)}
                        key={serv.title}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        exit="exit"
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 25px 50px rgba(0,0,0,0.6)",
                        }}
                        className="p-14 rounded-2xl flex flex-col max-w-xl w-full justify-between
              bg-linear-to-br from-gray-900/80 to-black/80 
              border border-gray-700/50 backdrop-blur-md z-99
              hover:border-gray-400/70 hover:shadow-2xl hover:-translate-y-2 
              transition-all duration-500 ease-in-out text-center items-center cursor-pointer"
                    >
                        {serv.icon}
                        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                            {serv.title}
                        </h2>
                        <span className=" text-white/70"><BiMouse className="hidden md:inline text-xl" /> <MdOutlineTouchApp className="inline md:hidden text-xl" /></span>
                    </motion.div>
                ))}
            </div>


            {/* Tooltip / Modal */}
            {
                activeService && (
                    <>
                        {/* Desktop Tooltip */}
                        <div
                            className="fixed hidden md:flex top-1/2 left-1/2 md:-translate-x-1/2 lg:translate-x-1 -translate-y-1/2 z-110 pointer-events-none"
                            style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="rounded-3xl px-8 py-6 bg-black/90 backdrop-blur-xl 
                border border-gray-700/50 shadow-[0_8px_40px_rgba(0,0,0,0.7)] 
                text-gray-100 max-w-lg transition-all duration-300 flex items-center divide-x"
                            >
                                <h3 className="text-xl font-semibold text-white mr-3 p-3">
                                    {activeService.title}
                                </h3>
                                <p className="text-base text-gray-300 leading-relaxed p-3">
                                    {activeService.desc}
                                </p>
                            </motion.div>
                        </div>

                        {/* Mobile Modal */}
                        <div
                            className="md:hidden fixed inset-0 z-110 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                            onClick={() => setHoveredAnchor(null)} // click overlay to close
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="relative rounded-3xl px-6 py-6 
                bg-black/95 border border-gray-700/50 
                shadow-[0_8px_40px_rgba(0,0,0,0.7)] 
                text-gray-100 max-w-md w-[90%]"
                                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                            >
                                <button
                                    onClick={() => setHoveredAnchor(null)}
                                    className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                                >
                                    &times;
                                </button>
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {activeService.title}
                                </h3>
                                <p className="text-base text-gray-300 leading-relaxed">
                                    {activeService.desc}
                                </p>
                            </motion.div>
                        </div>
                    </>
                )
            }

            {/* Show More Button */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
                className="flex justify-center mt-20 mb-24 z-50"
            >
                <NavLink
                    to="/services"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="relative overflow-hidden group flex items-center gap-2 px-8 py-4 
            rounded-xl font-semibold text-lg md:text-xl 
            bg-linear-to-r from-gray-200 via-gray-400 to-gray-600 
            text-black cursor-pointer transition-all duration-300 
            transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl 
            border border-gray-400/60"
                >
                    <CgDetailsMore className="text-xl group-hover:hidden ease-in-out transform transition-transform duration-300" />
                    Show More
                    <span className="absolute rotate-12 -translate-x-20 group-hover:translate-x-48 
            ease-in-out transform transition-all duration-700 
            bg-white/25 brightness-125 w-12 h-[160%]"></span>
                </NavLink>
            </motion.div>
        </div >
    );
};