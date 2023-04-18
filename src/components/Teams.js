import React from "react";
import Image1 from "../assets/team/ashish.jpg";
import Image2 from "../assets/team/rajul.jpg";
import Image3 from "../assets/team/sudhanshu.jpg";
import Image4 from "../assets/team/ankur.jpg";
import "./TeamStyles.css";

function Teams (){
    let message="The strength of the team is each individual member. The strength of each member is the team.";
    return(
       <section className="team">
                 <div className="center">
                   <h1>
                    Our Amazing Team
                   </h1>
                   <p className="section-subtitle">{message}</p>
                 </div>

                   <div className="team-content">
                     <div className="box">
                       <img src={Image1} className="team-img" alt="pic"/>
                       <h3>Ashish Kumar</h3>
                       <h5>Team Lead</h5>
                            <div className="icons">
                              <a href="#"><i className="fa-brands fa-twitter"></i></a>
                              <a href="#"><i className="fa-brands fa-github"></i></a>
                              <a href="#"><i className="fa-brands fa-facebook"></i></a>
                              <a href="#"><i className="fa-brands fa-linkedin"></i></a>  
                            </div>
                     </div>
                  

                
                     <div className="box">
                       <img src={Image2} className="team-img" alt="pic"/>
                       <h3>Rajul Raj Sharma</h3>
                       <h5>UI/UX and R3D</h5>
                            <div className="icons">
                              <a href="#"><i className="fa-brands fa-twitter"></i></a>
                              <a href="#"><i className="fa-brands fa-github"></i></a>
                              <a href="#"><i className="fa-brands fa-facebook"></i></a>
                              <a href="#"><i className="fa-brands fa-linkedin"></i></a>  
                            </div>
                     </div>
                

                     <div className="box">
                       <img src={Image3} className="team-img" alt="pic"/>
                       <h3>Sudhanshu Pandey</h3>
                       <h5>Frontend Lead</h5>
                            <div className="icons">
                              <a href="#"><i className="fa-brands fa-twitter"></i></a>
                              <a href="#"><i className="fa-brands fa-github"></i></a>
                              <a href="#"><i className="fa-brands fa-facebook"></i></a>
                              <a href="#"><i className="fa-brands fa-linkedin"></i></a>  
                            </div>
                     </div>
            


                   
                     <div className="box">
                       <img src={Image4} className="team-img" alt="pic"/>
                       <h3>Ankur Pal</h3>
                       <h5>Tech Lead and Backend</h5>
                            <div className="icons">
                              <a href="#"><i className="fa-brands fa-twitter"></i></a>
                              <a href="#"><i className="fa-brands fa-github"></i></a>
                              <a href="#"><i className="fa-brands fa-facebook"></i></a>
                              <a href="#"><i className="fa-brands fa-linkedin"></i></a>  
                            </div>
                     </div>

                   </div>

                   
       </section>
    );
}
export default Teams;