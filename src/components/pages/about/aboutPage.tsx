import Yan from '../../../assets/Yan.png';
import { motion } from "framer-motion";
import { FaBolt, FaTools, FaCarBattery, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import car from '../../../assets/car.png';

export const AboutPage = () => {
    const highlights = [
        { icon: <FaBolt className="text-amber-400 text-4xl" />, title: "Auto Electrical", desc: "We repair car electrical systems such as wiring, lights, alternators, and starters." },
        { icon: <FaTools className="text-amber-400 text-4xl" />, title: "Vulcanizing", desc: "We provide tire patching, plugging, and vulcanizing services to fix flats and extend tire life." },
        { icon: <FaCarBattery className="text-amber-400 text-4xl" />, title: "Parts & Battery", desc: "We offer dependable battery replacements and supply basic car parts when you need quick solutions." },
        { icon: <FaPhoneAlt className="text-amber-400 text-4xl" />, title: "Customer Support", desc: "You can call or visit us for questions, advice, or assistance. We aim to give clear and helpful guidance." },
        { icon: <FaMapMarkerAlt className="text-amber-400 text-4xl" />, title: "Location", desc: "Our shop is located at V. Luna Ext, Quezon City. We’re easy to find and ready to serve the community." },
        { icon: <FaCarBattery className="text-amber-400 text-4xl" />, title: "Car Parts Sales", desc: "We sell car parts including batteries, tires, and accessories. If you need replacements or upgrades, we can help you find the right items." },
    ];

    const fadeVariants = {
        hidden: { opacity: 0, y: 80 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -80 },
    };

    return (
        <div className="relative min-h-screen bg-black px-6 md:px-12 lg:px-20 py-40">

            <img
                src={car}
                alt="car driving timeline"
                className="sticky object-contain flex shrink-0 rotate-90 top-1/2 left-1/2 md:-translate-x-1/8 transform transition-all drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] duration-300 lg:translate-x-1 -translate-y-1/2 z-50 pointer-events-none w-20 h-20"
            />

            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-linear-to-tr from-black via-gray-900 to-black"></div>
                <motion.div
                    initial={{ y: -40 }}
                    animate={{ y: 40 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "easeInOut", repeatType: "reverse" }}
                    className="absolute inset-0 bg-[radial-linear(circle_at_center,rgba(255,255,255,0.05),transparent)]"
                />
            </div>
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-amber-500/30 to-transparent"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-amber-400/30"></div>

            <motion.div
                variants={fadeVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-72"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-wide">
                    YanYan Electrical Shop & Vulcanizing
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                    Reliable service, trusted care, every journey.
                </p>
            </motion.div>

            <div className="relative max-w-6xl mx-auto">
                {highlights.map((item, i) => (
                    <div key={item.title} className="relative mb-72">
                        <motion.div
                            variants={fadeVariants}
                            initial="hidden"
                            whileInView="visible"
                            exit="exit"
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className={`flex ${i % 2 === 0 ? "justify-start text-left" : "justify-end text-right"} mb-12`}
                        >
                            <div className="flex items-center gap-4">
                                {item.icon}
                                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeVariants}
                            initial="hidden"
                            whileInView="visible"
                            exit="exit"
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                            className={`flex ${i % 2 === 0 ? "justify-end" : "justify-start"}`}
                        >
                            <div className="relative rounded-2xl p-10 w-full md:w-1/2 transition-all duration-500 bg-black/40 border aboutDesc border-gray-700/40">
                                <p className="text-gray-300 text-base md:text-lg leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute left-1/2 -translate-x-1/2 top-1/2 w-10 h-10 rounded-full bg-amber-400/50 blur-md"
                        ></motion.div>
                    </div>
                ))}
            </div>

            <motion.div
                variants={fadeVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mt-96 flex flex-col items-center gap-12"
            >
                <img
                    src={Yan}
                    loading="lazy"
                    alt="Ryan Hije - Owner"
                    className="rounded-3xl border border-amber-400/30 w-80 md:w-md lg:w-lg z-99 object-cover hover:scale-105 transition-transform duration-500"
                />
                <p className="text-gray-300 text-base md:text-lg max-w-2xl text-center leading-relaxed">
                    <span className="font-semibold text-white">Ryan Hije</span>, the founder of YanYan Electrical Shop & Vulcanizing,
                    began his journey at just 15 years old. Now at 45, he continues to serve the community with dedication and skill.
                    With three decades of experience, Ryan has built a reputation for honest work and dependable service.
                </p>
            </motion.div>
        </div>
    );
};