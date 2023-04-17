import "./FooterStyles.css";

const Footer = () =>{
    return(
        <div className="footer">
           <div className="top">
            <div>
                <h1>Play Through It!</h1>
                <p>Learning From Experience</p>
            </div>
            <div>
                <a href="/">
                <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="/">
                <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                <i className="fa-brands fa-behance-square"></i>
                </a>
                <a href="/">
                <i className="fa-brands fa-twitter-square"></i>
                </a>
            </div>
           </div>
           <div className="bottom">
           <div>
              <h4>Project</h4>
              <a href="/">Change Log</a>
              <a href="/">Status</a>
              <a href="/">License</a>
              <a href="/">All Versions</a>
            </div>
            <div>
              <h4>Community</h4>
              <a href="/">Github</a>
              <a href="/">Project</a>
              <a href="/">Issues</a>
              <a href="/">Twitter</a>
            </div>           
            <div>
              <h4>Help</h4>
              <a href="/">Support</a>
              <a href="/">Troubleshoots</a>
              <a href="/">Contact US</a>
            </div>           
            <div>
              <h4>Other</h4>
              <a href="/">Term of Service</a>
              <a href="/">Privacy Policy</a>
              <a href="/">Copyright</a>
            </div>
            </div>
        </div>
    )
}

export default Footer;