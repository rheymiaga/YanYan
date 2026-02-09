import { motion } from "framer-motion";
import { homeServicesInfo } from "../home/homeServicesInfo";

export const OtherServices = () => {


    return (
        <div className="min-h-screen bg-black relative overflow-hidden px-6 md:px-12 lg:px-20 py-16">
            {/* Background glow */}
            <motion.div
                initial={{ y: -60 }}
                animate={{ y: 60 }}
                transition={{ repeat: Infinity, duration: 25, ease: "easeInOut", repeatType: "reverse" }}
                className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)]"
            />

            <motion.h2
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}
                className="text-[28px] md:text-5xl lg:text-6xl font-bold 
          bg-linear-to-r from-gray-200 via-white to-gray-400 
          bg-clip-text text-transparent tracking-widest text-center 
          drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] mb-16"
            >
                More Services
            </motion.h2>

            {/* Services Grid */}
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {homeServicesInfo.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="p-8 rounded-2xl flex flex-col items-center text-center
              bg-linear-to-br from-gray-900/80 to-black/80 
              border border-gray-700/50 backdrop-blur-md
              shadow-[0_0_40px_rgba(255,255,255,0.08)] hover:shadow-[0_0_60px_rgba(255,255,255,0.15)] 
              transition-all duration-500 ease-in-out"
                    >
                        {service.icon}
                        <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
                        <p className="mt-2 text-gray-300 text-sm md:text-base">{service.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Mission Note */}
            <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: false }}
                className="mt-16 mx-auto text-gray-400 text-base md:text-lg leading-relaxed text-center max-w-3xl"
            >
                We provide services for motorcycles, cars, and trucks — from tire vulcanizing to replacing essential parts like alternators, starter motors, and batteries. Our goal is to keep every vehicle running safely and reliably.
            </motion.p>
        </div>
    );
};