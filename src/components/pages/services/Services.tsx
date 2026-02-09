import { Footer } from "../../footer/Footer"
import { NavBar } from "../../navbar/NavBar"
import { OtherServices } from "./otherServices"
import { ServicesBanner } from "./servicesBanner"
import { ServicesPage } from "./servicesPage"



export const Services = () => {

    return (
        <>
            <NavBar />
            <ServicesBanner />
            <ServicesPage />
            <OtherServices />
            <Footer />
        </>
    )
}