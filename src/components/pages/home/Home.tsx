import { Footer } from "../../footer/Footer"
import { NavBar } from "../../navbar/NavBar"
import { HomeServices } from "./homeServices"
import { HomeAbout } from "./homeAbout"
import { HomePage } from "./homePage"



export const Home = () => {

    return (
        <>
            <NavBar />
            <HomePage />
            <HomeServices />
            <HomeAbout />
            <Footer />
        </>
    )
}