import { Route, Routes } from "react-router-dom"
import { Home } from "./components/pages/home/Home"
import { About } from "./components/pages/about/About"

import { Services } from "./components/pages/services/Services"
import { GiCarWheel } from "react-icons/gi";
import { useEffect, useState } from "react";


function App() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <>
      {isScrolling && (
        <div className="fixed bottom-10 z-200 right-10 flex items-center gap-3 text-white/70 transition-opacity duration-300">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-10 h-10 rounded-full bg-indigo-500/30 blur-md animate-pulse"></div>
            <GiCarWheel className="animate-spin text-2xl relative z-10 text-indigo-300" />
          </div>
          <span className="animate-pulse text-sm md:text-base">Driving...</span>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

      </Routes>

    </>
  )
}

export default App