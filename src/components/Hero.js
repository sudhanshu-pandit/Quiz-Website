import "./HeroStyles.css";
import Image from "../assets/header-bg.jpg";

function Hero(props) {
    return (<>
    <div className={props.cName}>
        <img alt="Image" src={props.heroImg}/>

    <div className="hero-text">
    <h1>{props.title}</h1>
    <a href={props.url} className={props.btnClass}>
       {props.buttonText}
    </a>

    </div>
    </div>
    </> );
}
export default Hero;