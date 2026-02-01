import { Route, Routes } from "react-router-dom"
import { Home } from "./components/pages/home/Home"
import { About } from "./components/pages/about/About"

import { Services } from "./components/pages/services/Services"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

      </Routes>

    </>
  )
}

export default App