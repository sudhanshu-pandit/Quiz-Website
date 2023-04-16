import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Image from "../assets/header-bg.jpg";

function Home (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={Image}
        title= "Learning From Experience"
        buttonText="Start A Random"
        url="/"
        btnClass="show"
        />
    
        </>
    );
}
export default Home;
