import { motion } from "framer-motion";
import { FaCogs } from "react-icons/fa";
import { ServicesInfo } from "./ServicesInfo";

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

export const ServicesPage = () => {
    return (
        <div className="min-h-screen relative overflow-hidden px-6 md:px-12 lg:px-20 py-24 bg-black text-white">
            <motion.div
                initial={{ y: -60 }}
                animate={{ y: 60 }}
                transition={{ repeat: Infinity, duration: 25, ease: "easeInOut", repeatType: "reverse" }}
                className="absolute inset-0 -z-10 bg-[radial-linear(circle_at_center,rgba(255,255,255,0.03),transparent)]"
            />
            <div className="absolute inset-0 -z-20 bg-linear-to-br from-black via-gray-950 to-black"></div>
            {/* Particle stars */}
            <div className="absolute inset-0 -z-30">
                <div className="bg-[radial-linear(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[30px_30px] opacity-10 animate-pulse h-full w-full"></div>
            </div>

            {/* Services Grid */}
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {ServicesInfo.map((service, i) => (
                    <motion.div
                        key={service.repair}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 25px 50px rgba(0,0,0,0.8)",
                        }}
                        className="p-10 rounded-2xl flex flex-col items-center text-center
              bg-linear-to-br from-gray-900/80 to-black/80 
              border border-gray-700/50 backdrop-blur-md aboutDesc
              shadow-[0_0_30px_rgba(255,255,255,0.08)] hover:shadow-[0_0_50px_rgba(0,150,255,0.25)]
              hover:border-indigo-400 transition-all duration-500 ease-in-out cursor-pointer"
                    >
                        {/* Icon */}
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/20 mb-6">
                            <FaCogs className="text-indigo-400 text-2xl" />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                            {service.repair}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                            {service.desc}
                        </p>

                        {/* Extra info */}
                        <p className="mt-4 text-gray-400 text-xs italic">
                            Available as both a repair service and replacement part.
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};