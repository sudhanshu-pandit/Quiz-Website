import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Img from "../assets/map.jpg";
import Footer from "../components/Footer";

function Askaquestion (){
    return(
        <>
         <Navbar/>
         <Hero
         cName="hero-mid"
         heroImg={Img}
         title= "Ask a Question?"
        />
        <Footer/>
        </>
    );
}
export default Askaquestion;
