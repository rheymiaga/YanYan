import { IoCall } from 'react-icons/io5';
import mazda from '../../../assets/mazda.png';
import LogoLoop from './logoLoop';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
};

export const HomePage = () => {
    return (
        <div className="pt-4 lg:pt-0 flex flex-col items-center justify-center 
      bg-linear-to-tr from-black to-black/90 relative overflow-hidden 
      min-h-screen px-6 md:px-12 lg:px-20">

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 w-full max-w-7xl mt-12">

                {/* Left Content */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                    <h1 className="flex flex-col md:gap-2 tracking-widest brightness-125 
            md:tracking-wider text-[26px] md:text-4xl lg:text-5xl 
            font-serif bg-linear-to-r text-transparent from-slate-400 via-slate-200 to-slate-600 
            bg-clip-text drop-shadow-[0px_0px_12px_rgba(100,100,100,0.6)] mb-4 p-2">
                        <span>Yan-Yan's Electrical</span>
                        <span>& Vulcanizing Shop</span>
                    </h1>

                    <p className="mb-8 text-xl md:text-2xl lg:text-3xl font-serif text-slate-200/80">
                        Reliable repairs, <br className="md:hidden" /> from wires to wheels.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap flex-row justify-center lg:justify-start gap-4">
                        {/* Call Button */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            exit="exit"
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                            viewport={{ once: false }}
                        >
                            <a
                                href="tel:09158113963"
                                className="relative group flex items-center overflow-hidden gap-2 px-5 py-2 
      rounded-lg font-Inter font-semibold text-base md:text-xl 
      bg-linear-to-bl from-slate-100 via-slate-500 to-slate-300 
      text-black cursor-pointer transition-all duration-300 
      transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl 
      border border-white/80"
                            >
                                <IoCall />
                                <span className="font-Poppins">Call us now</span>

                                <span className="absolute rotate-12 -translate-x-20 group-hover:translate-x-48 
      ease-in-out transform transition-all duration-700 
      bg-slate-50/25 brightness-125 w-10 h-[160%]"></span>
                            </a>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            exit="exit"
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                            viewport={{ once: false }}
                        >
                            <NavLink
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                to="/services"
                                className="inline-block text-base md:text-lg font-Poppins 
                  text-white px-5 py-2 rounded-lg backdrop-blur-sm 
                  transition-all duration-300 ease-in-out 
                  hover:scale-105 hover:drop-shadow-[0px_0px_15px_rgba(255,255,255,0.4)]"
                            >
                                View Our Services
                            </NavLink>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: false }}
                    className="flex-1 flex justify-center items-center"
                >
                    <img

                        className="max-w-xs md:max-w-md lg:max-w-lg object-contain object-center"
                        src={mazda}
                        alt="mazda image"
                    />
                </motion.div>
            </div>

            {/* Logo Loop */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                viewport={{ once: false }}
                className="w-full mt-12"
            >
                <LogoLoop />
            </motion.div>
        </div>
    );
};