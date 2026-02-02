import { IoCall } from 'react-icons/io5'
import mazda from '../../../assets/mazda.png'
import LogoLoop from './logoLoop'
import { NavLink } from 'react-router-dom'

export const HomePage = () => {


    return (

        <div className="flex flex-col items-center justify-center bg-linear-to-tr from-black to-black/90 relative overflow-hidden md:p-2 min-h-screen">
            <div className="flex flex-col md:flex-row items-center md:items-start my-4">
                <div className='flex-1 flex flex-col items-center lg:items-start mx-2 my-4'>
                    <h1 className=' flex flex-col md:gap-2 tracking-widest md:tracking-wider text-[26px] md:text-4xl mb-2 lg:text-5xl transition-all duration-300 transform font-serif bg-linear-to-r text-transparent from-slate-400 via-slate-200 to-slate-600 bg-clip-text text-shadow-[0px_0px_12px] text-shadow-slate-500/60 p-2'>
                        <span>Yan-Yan's Electrical</span>
                        <span>& Vulcanizing Shop</span>
                    </h1>
                    <p className='flex items-center mb-8 text-xl md:text-2xl transition-all duration-300 transform font-serif lg:text-3xl text-slate-200'>Reliable repairs, from wires to wheels.</p>
                    <div className='items-center flex justify-evenly w-full'>
                        <a href='tel:09158113963'
                            className='py-2 gap-1 text-base overflow-hidden relative group hover:scale-102 transition-all duration-300 transform flex items-center brightness-120 hover:drop-shadow-[4px_4px_15px] drop-shadow-slate-400 ease-in-out border-white/90 hover: border px-3 bg-linear-to-bl from-slate-100 via-slate-500 to-slate-300 cursor-pointer md:text-xl font-Inter font-semibold rounded'>
                            <IoCall /> <p className='transition-all duration-300 ease-in-out font-Poppins'>Call us now</p>
                            <span className=' absolute rotate-15 -translate-x-15 group-hover:translate-x-50 ease-in-out transform transition-all duration-500 bg-slate-50/25 brightness-125 w-8 h-[150%]'></span>
                        </a>

                        <NavLink
                            to="/services"
                            className="inline-block text-base font-Poppins md:text-lg bg-gray-900/60 border border-slate-800 hover:border-slate-800/60 hover:drop-shadow-[4px_4px_15px] drop-shadow-slate-800 hover:scale-102 ease-in-out duration-300 transition-all backdrop-blur-sm text-white px-3 py-2 rounded-lg shadow hover:bg-black/70"
                        >
                            View Our Services
                        </NavLink>

                    </div>
                </div>

                <div className='flex-1 mb-4 flex shrink-0 items-center justify-center mask-b-from-25% mask-t-from-50%'>
                    <img className='w-max object-contain object-center'
                        src={mazda} alt="mazda image" />
                </div>

            </div>
            <LogoLoop />
        </div>
    )
}