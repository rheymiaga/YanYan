import { motion } from "framer-motion";
import { FaCogs } from "react-icons/fa";
import { ServicesInfo } from "./ServicesInfo";

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

export const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden px-6 md:px-12 lg:px-20 py-22">

            <motion.div
                initial={{ y: -60 }}
                animate={{ y: 60 }}
                transition={{ repeat: Infinity, duration: 25, ease: "easeInOut", repeatType: "reverse" }}
                className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)]"
            />

            {/* Services Grid */}
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {ServicesInfo.map((service, i) => (
                    <motion.div
                        key={service.repair}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="p-8 rounded-2xl flex flex-col items-center text-center
              bg-linear-to-br from-gray-900/80 to-black/80 
              border border-gray-700/50 backdrop-blur-md
              shadow-[0_0_40px_rgba(255,255,255,0.08)] hover:shadow-[0_0_60px_rgba(255,255,255,0.15)] 
              transition-all duration-300 ease-in-out cursor-pointer"
                    >
                        {/* Icon row */}
                        <div className="flex gap-3 mb-4">
                            <FaCogs className="text-indigo-400 text-2xl" />
                        </div>

                        <h3 className="text-xl font-semibold text-white">{service.repair}</h3>
                        <p className="mt-2 text-gray-300 text-sm md:text-base">{service.desc}</p>

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