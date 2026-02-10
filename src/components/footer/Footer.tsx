import { FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="w-full bg-black text-gray-400 border-t border-gray-700 px-6 md:px-12 lg:px-20 py-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Left side */}
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold text-white">
                        Yan-Yan's Electrical & Vulcanizing Shop
                    </h2>
                    <p className="text-sm">Reliable repairs, guaranteed service.</p>
                </div>

                {/* Right side: Icon buttons */}
                <div className="flex items-center gap-4">
                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/yan.yan.176563"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-900 hover:bg-gray-800 transition"
                    >
                        <FaFacebookF className="text-white text-lg" />
                    </a>

                    {/* Gmail */}
                    <a
                        href="mailto:raylieraylie17@gmail.com"
                        className="p-3 rounded-full bg-gray-900 hover:bg-gray-800 transition"
                    >
                        <FaEnvelope className="text-white text-lg" />
                    </a>

                    {/* Call */}
                    <a
                        href="tel:09158113963"
                        className="p-3 rounded-full bg-gray-900 hover:bg-gray-800 transition"
                    >
                        <FaPhoneAlt className="text-white text-lg" />
                    </a>
                </div>
            </div>

            {/* Bottom note */}
            <div className="mt-6 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Yan-Yan's Electrical & Vulcanizing Shop. All rights reserved.
            </div>
        </footer>
    );
};