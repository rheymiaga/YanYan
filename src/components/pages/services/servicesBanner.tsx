import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export const ServicesBanner = () => {
    return (
        <div className="relative min-h-[60vh] flex flex-col items-center justify-center 
      bg-black overflow-hidden px-6 md:px-12 lg:px-20">

            {/* Background glow */}
            <motion.div
                initial={{ y: -40 }}
                animate={{ y: 40 }}
                transition={{ repeat: Infinity, duration: 20, ease: "easeInOut", repeatType: "reverse" }}
                className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent)]"
            />

            {/* Title */}
            <motion.h1
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}
                className="text-[32px] md:text-5xl lg:text-6xl font-bold 
          bg-linear-to-r from-gray-200 via-white to-gray-400 
          bg-clip-text text-transparent tracking-widest text-center 
          drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]"
            >
                Our Services
            </motion.h1>

            {/* Tagline */}
            <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
                className="mt-6 text-gray-300 text-base md:text-lg lg:text-xl text-center max-w-2xl"
            >
                From motorcycles to trucks — reliable electrical repairs, vulcanizing, and essential car parts replacement.
            </motion.p>
        </div>
    );
};