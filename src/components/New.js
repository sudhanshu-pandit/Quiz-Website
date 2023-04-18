import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Image from "../assets/portfolio/Sports.jpg";

function New(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={Image}
        title= "What's New?"
        buttonText="Recently Added"
        url="/whatsnew"
        btnClass="show"
        />
        </>
    );
}

export default New;