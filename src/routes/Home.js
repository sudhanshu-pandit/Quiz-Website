import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Image from "../assets/header-bg.jpg";
import Category from "../components/Category";
import Team from "./Team";
import QuestionForm from "../components/QuestionFrom";
import New from "../components/New";
import Slider from "../components/Slider";


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
        <Category/>
        <Slider/>
        <New/>
        <QuestionForm/>
        <Team/>
        </>
    );
}
export default Home;
