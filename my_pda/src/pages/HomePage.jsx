import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Topactivity from "../components/Topactivity";
import Upcomingevents from "../components/Upcomingevents";
import Navbar from "../components/navbar";

const Homepage = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Carousel />
            <Topactivity />
            <Upcomingevents />
            {/* <Footer /> */}
        </>
    )
}

export default Homepage;