import { motion } from "framer-motion";
import { CgDetailsMore } from "react-icons/cg";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaTools } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

export const HomeAbout = () => {
    const highlights = [
        {
            icon: <FaTools className="text-indigo-400 text-3xl" />,
            title: "Repairs",
            desc: "Expert auto electrical & vulcanizing repairs",
        },
        {
            icon: <FaMapMarkerAlt className="text-pink-400 text-3xl" />,
            title: "Location",
            desc: "34R7V V. Luna Ext, Malaya, Quezon City",
        },
        {
            icon: <FaClock className="text-purple-400 text-3xl" />,
            title: "Hours",
            desc: "Open every day at 8:00 AM",
        },
        {
            icon: <FaPhoneAlt className="text-green-400 text-3xl" />,
            title: "Contact",
            desc: "+63 915 811 3963",
        },
    ];

    return (
        <div className="min-h-screen py-10 md:py-0 bg-black relative overflow-hidden px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center">

            {/* Background layers for void effect */}
            <motion.div
                initial={{ y: -80 }}
                animate={{ y: 80 }}
                transition={{ repeat: Infinity, duration: 25, ease: "easeInOut", repeatType: "reverse" }}
                className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)]"
            />

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}
                className="text-[28px] md:text-5xl lg:text-6xl font-bold 
          bg-linear-to-r from-gray-200 via-white to-gray-400 
          bg-clip-text text-transparent tracking-widest md:tracking-wide 
          drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] mb-16 text-center"
            >
                About Us
            </motion.h2>

            {/* Cards Grid */}
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl">
                {highlights.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="flex flex-col items-center text-center p-8 rounded-2xl 
              bg-linear-to-br from-gray-900/80 to-black/80 
              border border-gray-700/50 backdrop-blur-md 
              shadow-[0_0_40px_rgba(255,255,255,0.08)] hover:shadow-[0_0_60px_rgba(255,255,255,0.15)] 
              transition-all duration-500 ease-in-out"
                    >
                        {item.icon}
                        <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 text-gray-300 text-sm md:text-base">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Mission */}
            <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: false }}
                className="mt-16 text-gray-400 text-base md:text-lg leading-relaxed text-center max-w-3xl"
            >
                Our mission is to keep you safe on the road with dependable service. Whether it’s wiring problems or tire care, you can trust us to get the job done right.
            </motion.p>

            {/* Navigate Button */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: false }}
                className="flex justify-center mt-10"
            >
                <NavLink
                    to="/about"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="relative overflow-hidden group flex items-center gap-2 px-8 py-4 
            rounded-xl font-semibold text-lg md:text-xl 
            bg-linear-to-r from-gray-200 via-gray-400 to-gray-600 
            text-black cursor-pointer transition-all duration-300 
            transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl 
            border border-gray-400/60"
                >
                    <CgDetailsMore className="text-xl group-hover:hidden transform transition-transform duration-300" />
                    Learn More
                    <span className="absolute rotate-12 -translate-x-20 group-hover:translate-x-48 
            ease-in-out transform transition-all duration-700 
            bg-white/25 brightness-125 w-12 h-[160%]"></span>
                </NavLink>
            </motion.div>
        </div>
    );
};